var express = require("express");
var burger = require("../models/burger.js");

var PORT = process.env.PORT;

var app = express();

app.get("/", req, res => {
  res.setEncoding("Hello World!");
});

app.listen(PORT, () => console.log("Example app listening on port 3000!"));
