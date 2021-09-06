const Sequelize = require("sequelize");
const express = require("express");
const app = express();

app.use(express.json());

const userCreate = require("./routes/userCreate");
app.use("/api/user/create", userCreate);


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
    app.listen(3000, function () {
      console.log("Server waiting for connection...");
    });
  })
  .catch((err) => console.log(err));
