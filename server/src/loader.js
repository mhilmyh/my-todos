const express = require("express");
const routes = require("./routes");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../openapi.json");

module.exports = (app) => {
	// utility
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	// cors enable
	app.use(cors());

	// logger
	const accessLogStream = fs.createWriteStream(
		path.join(__dirname, "access.log"),
		{ flags: "a" }
	);
	app.use(morgan("combined", { stream: accessLogStream }));

	// routes
	app.use("/api", routes);

	// api doc
	app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
