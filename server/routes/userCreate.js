

const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const db = require("../models");
const { User } = db;

app.post("/", urlencodedParser, async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);

    const { firstName, lastName, email } = req.body;
    const password = req.body.password;
    console.log(firstName);
    const userHash = crypto
      .pbkdf2Sync(password, email, 1000, 64, `sha512`)
      .toString(`hex`);

    User.create({
      firstName,
      lastName,
      email,
      hash: userHash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("user added");
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: e.message,
    });
  }
});

module.exports = app;
