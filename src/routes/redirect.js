const express = require("express");
const router = express.Router();
const data = require("../utils/data");

router.get("/user", (req, res) => {
  res.redirect(
    "https://sso.uestclug.org/realms/LUG/protocol/openid-connect/auth?client_id=iptv&redirect_uri=http://localhost:3000/auth&response_type=token"
  );
});

router.get("/admin", (req, res) => {
  res.redirect(
    "https://sso.uestclug.org/realms/NU/protocol/openid-connect/auth?client_id=iptv&redirect_uri=http://localhost:3000/auth_admin&response_type=token"
  );
});

module.exports = router;
