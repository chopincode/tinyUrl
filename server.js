const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");

connectDB();

app.use(express.json({ extended: false }));

app.use("/", require("./routes/tinyUrl"));

app.listen(5000, () => console.log("Server running on port 5000"));