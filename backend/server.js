const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("cyberschools! Hey there");
});
app.get("/profile", (req, res) => {
  res.send("cyberschools! User profile");
});

const PORT = process.env.PORT;
app.listen(PORT, console.log("server listening on PORT 5000"));
