const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection To Db Open");
});

app.listen(PORT, (s) => {
  console.log(`Server is running at port ${PORT}`);
});
