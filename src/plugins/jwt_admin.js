var { expressjwt: jwt } = require("express-jwt");
const config = require("../utils/config");

const plugin = jwt({
  secret: `-----BEGIN PUBLIC KEY-----\r\n${config.JWT_ADMIN}\r\n-----END PUBLIC KEY-----`,
  algorithms: [config.JWT_ALG_ADMIN],
  credentialsRequired: false,
  requestProperty: "auth_admin",
});

module.exports = plugin;
