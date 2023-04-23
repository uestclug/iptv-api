const express = require("express");
const router = express.Router();
const auth = require("../utils/auth");
const plugin_jwt = require("../plugins/jwt");
const data = require("../utils/data");

router.use(plugin_jwt);

router.use(auth);

router.get("/list", (req, res) => {
  res.json(data.exportList(data.fetchList()));
});

module.exports = router;
