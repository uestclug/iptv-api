const express = require("express");
const router = express.Router();
const auth = require("../utils/auth");
const plugin_jwt_admin = require("../plugins/jwt_admin");
const data = require("../utils/data");
const db = require("../utils/db");
const { route } = require("./service");

router.use(plugin_jwt_admin);

router.use(auth);

router.post("/live", (req, res) => {
  if (!req.body.title) res.status(404);
  else {
    data.addLive(req.body.title, req.body.id);
    res.status(200);
  }
  res.json({});
});

router.post("/live/refresh", (req, res) => {
  if (!req.body.id) res.status(404);
  else {
    data.regenLive(req.body.id);
    res.status(200);
  }
  res.json({});
});

router.delete("/live", (req, res) => {
  if (!req.body.id) res.status(404);
  else {
    data.delLive(req.body.id);
    res.status(200);
  }
  res.json({});
});

router.get("/list", (req, res) => {
  res.json(data.fetchList(false, false));
});

module.exports = router;
