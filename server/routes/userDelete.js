const express = require("express");

const app = express();

const db = require("../models");
const { User } = db;

app.delete("/", (req, res) => {
  User.destroy({ where: { email: req.body.email } })
    .then(() => {
      res.send("user deleted");
      return;
    })
    .catch((err) => console.log(err));
});

module.exports = app;
