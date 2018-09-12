var express = require("express");
var burger = require("../models/burger");

var app = express();

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
};
