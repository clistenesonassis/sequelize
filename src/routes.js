const express = require("express");

const User = require("./controllers/UserController");
const Address = require("./controllers/AddressController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "LOOOP" });
});

routes.post("/users", User.store);
routes.post("/users/:user_id/address", Address.store);

module.exports = routes;
