// Update with your config settings.
require("dotenv").config({ path: "../../.env" });

module.exports = {
	development: {
		client: process.env.DB_CLIENT,
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			charset: "utf8",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/../migrations",
		},
	},

	production: {
		client: process.env.DB_CLIENT,
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			charset: "utf8",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/../migrations",
		},
	},
};
