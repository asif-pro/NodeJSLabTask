const express = require("express");

const router = express.Router();

const info = [];

router.get("/", (req, res) => {
  res.render("admin");
});
exports.routes = router;