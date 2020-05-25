const express = require("express");
const router = express.Router();

const TinyUrl = require("../models/TinyUrlModel");

router.get("/api/data", async (req, res) => {
  const data = await TinyUrl.find();

  res.status(200).json(data);
});

router.post("/api/data", async (req, res) => {
  const { url } = req.body;
  const data = await TinyUrl.findOne({ url });

  if (data) {
    await TinyUrl.findOneAndUpdate({ url }, { $inc: { requestTimes: 1 } });
    return res.json({ result: data.truncatedUrl });
  }

  const longUrl = req.body.url;
  const newData = new TinyUrl({ url: longUrl, truncatedUrl: "" });
  const shortUrl = newData._id.toString().slice(-6);
  newData.truncatedUrl = shortUrl;
  console.log(newData);
  await newData.save();
  res.json({ result: shortUrl });
});

module.exports = router;
