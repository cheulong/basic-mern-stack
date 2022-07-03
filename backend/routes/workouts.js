const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "get all workouts!" });
});

router.get("/:id", (req, res) => {
  res.send({ msg: "get single workout!" });
});

router.post("/", (req, res) => {
  res.send({ msg: "post a new workout!" });
});

router.delete("/:id", (req, res) => {
  res.send({ msg: "delete a workout!" });
});

router.patch("/:id", (req, res) => {
  res.send({ msg: "update a workout!" });
});

module.exports = router;
