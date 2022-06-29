require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
