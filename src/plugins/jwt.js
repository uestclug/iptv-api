var { expressjwt: jwt } = require("express-jwt");
const config = require("../utils/config");

const plugin = jwt({
  secret: `-----BEGIN PUBLIC KEY-----\r\n${config.JWT}\r\n-----END PUBLIC KEY-----`,
  algorithms: [config.JWT_ALG],
  credentialsRequired: false,
});

module.exports = plugin;
