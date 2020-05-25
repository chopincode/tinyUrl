const mongoose = require("mongoose");

module.exports = function connectDB() {
  mongoose.connect(
    "mongodb+srv://chris:123@cluster0-c4t2r.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  );
};
