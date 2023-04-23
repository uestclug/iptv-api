require("dotenv").config();

let config = {
  PORT: process.env.PORT || 8080,
  HOST: process.env.HOST || 127.0.0.1,
  FRONT_URL: process.env.FRONT_URL || "https://iptv.uestc.edu.cn/",
  SSO_URL: process.env.SSO_URL || "https://sso.uestclug.org/",
};

fromenv = ["JWT", "JWT_ALG", "JWT_ADMIN", "JWT_ALG_ADMIN"];

fromenv.forEach((enval) => {
  if (process.env[enval]) config[enval] = process.env[enval];
  else {
    console.log(`Error: ${enval} is not defined in .env`);
    process.exit(1);
  }
});

module.exports = config;
