const express = require("express");
const router = express.Router();
const auth = require("../utils/auth");
const plugin_jwt_admin = require("../plugins/jwt_admin");
const data = require("../utils/data");

router.use(plugin_jwt_admin);

router.use(auth);

router.post("/live", (req, res) => {});

router.delete("/live", (req, res) => {});

router.get("/list", (req, res) => {
  res.json(data.fetchList(false, false));
});

module.exports = router;
