const express = require("express");
const router = express.Router();
const data = require("../utils/data");
const url = require("url");

router.post("/on_publish", (req, res) => {
  const id = req.body.name;
  const token = url.parse(req.body.tcurl, { parseQueryString: true }).query
    .token;
  if (data.authLive(id, token)) res.sendStatus(200);
  else res.sendStatus(403);
});

module.exports = router;
