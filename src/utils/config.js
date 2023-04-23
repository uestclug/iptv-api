require("dotenv").config();

let config = {
  PORT: process.env.PORT || 8080,
};

fromenv = [
  "JWT",
  "JWT_ALG",
  "JWT_ADMIN",
  "JWT_ALG_ADMIN"
];

fromenv.forEach((enval) => {
  if (process.env[enval]) config[enval] = process.env[enval];
  else {
    console.log(`Error: ${enval} is not defined in .env`);
    process.exit(1);
  }
});

module.exports = config;
