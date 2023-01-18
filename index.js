const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();
mongoose.set('strictQuery',false)
app.use(express.static("public"))

app.use(express.json());
app.use(cors());
app.use(require("./routes"));
app.use(morgan("dev"));

const { MONGOSERVER, PORT } = process.env;
mongoose.connect(MONGOSERVER, () => {
  console.log("connected");
  app.listen(PORT, function () {
    console.log("started");
  });
});
