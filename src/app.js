const config = require("./utils/config");
const express = require("express");
const app = express();

const plugin_cors = require("./plugins/cors");
const error_handler = require("./utils/errors");

const route_user = require("./routes/user");
const route_admin = require("./routes/admin");
const route_service = require("./routes/service");
const route_redirect = require("./routes/redirect");

app.use(plugin_cors);
app.use(error_handler);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", route_user);
app.use("/admin", route_admin);
app.use("/service", route_service);
app.use("/redirect", route_redirect);

app.get("/test", (req, res) => {
  res.send("Hello, " + req.auth);
});

app.listen(config.PORT, () => {
  console.log(`IPTV API listening on ${config.PORT}...`);
});
