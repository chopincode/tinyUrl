const mongoose = require("mongoose");

const TinyUrlSchema = mongoose.Schema({
  url: String,
  requestTimes: {
    type: Number,
    default: 0,
  },
  truncatedUrl: String,
});

module.exports = mongoose.model("/tinyUrl", TinyUrlSchema);
