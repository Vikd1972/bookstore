const express = require("express");

const app = express();

const db = require("../models");
const { User } = db;

app.use("/", async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: e.message,
    });
  }
});

module.exports = app;
