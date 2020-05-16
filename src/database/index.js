const Sequilize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../model/User");
const Address = require("../model/Address");

connection = new Sequilize(dbConfig);

User.init(connection);
Address.init(connection);


module.exports = connection;