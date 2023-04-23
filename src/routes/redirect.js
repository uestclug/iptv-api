const express = require("express");
const router = express.Router();
const config = require("../utils/config");

router.get("/user", (req, res) => {
  res.redirect(
    `${config.SSO_URL}realms/LUG/protocol/openid-connect/auth?client_id=iptv&redirect_uri=${config.FRONT_URL}auth&response_type=token`
  );
});

router.get("/admin", (req, res) => {
  res.redirect(
    `${config.SSO_URL}realms/NU/protocol/openid-connect/auth?client_id=iptv&redirect_uri=${config.FRONT_URL}auth_admin&response_type=token`
  );
});

module.exports = router;
