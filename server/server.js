const Sequelize = require("sequelize");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const userCreate = require("./routes/userCreate");
app.use("/api/user/create", userCreate);
const usersList = require("./routes/usersList");
app.use("/api/user/list", usersList);
const userDelete = require("./routes/userDelete");
app.use("/api/user/delete", userDelete);
const userLogin = require("./routes/userLogin");
app.use("/api/user/login", userLogin);

const sequelize = new Sequelize("bookstore", "user2", "root1234", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

sequelize
  .sync()
  .then(() => {
    app.listen(3001, function () {
      console.log("Server waiting for connection...");
    });
  })
  .catch((err) => console.log(err));
