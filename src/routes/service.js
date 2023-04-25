const express = require("express");
const router = express.Router();
const data = require("../utils/data");

router.post("/on_publish", (req, res) => {
  if (!req.body.name || !req.body.token) {
    res.sendStatus(403);
    return;
  }
  const id = req.body.name;
  const token = req.body.token
  if (data.authLive(id, token)) res.sendStatus(200);
  else res.sendStatus(403);
});

module.exports = router;
