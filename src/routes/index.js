const express = require("express");
const router = express.Router();

router.get("/info", function (req, res, next) {
  res.status(200).send({
    title: "FRASES API",
    version: "0.0.1",
  });
});

module.exports = router;
