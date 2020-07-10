require("dotenv").config();

const config = require("../config/knexfile")[
	process.env.NODE_ENV || "development"
];
module.exports = require("knex")(config);
