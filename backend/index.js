const express = require("express");
const mongoose = require("mongoose");
// const route = require("./routes/route");
var cors = require("cors");
const app = express();
const route=require("./routes/route")
// const { errorHandler, notFound } = require("./middleware/error.js");
// const path = require("path");

// const dotenv = require("dotenv");
app.use(cors());
mongoose.connect(
"mongodb+srv://mrdiaz5656:crapdood22@cluster0.r6bemvx.mongodb.net/Note?retryWrites=true&w=majority",  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use('/',route)
app.listen(8000, () => {
    console.log("server started")
})
// getNotes()
// notes()

