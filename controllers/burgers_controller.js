var express = require("express");
var burger = require("../models/burger");

module.exports = function(app) {
  app.get("/", req, res => {
    res.setEncoding("Hello World!");
  });
};
