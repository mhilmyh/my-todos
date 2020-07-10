const express = require("express");
const routes = require("./routes");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

module.exports = (app) => {
	// utility
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	// logger
	const accessLogStream = fs.createWriteStream(
		path.join(__dirname, "access.log"),
		{ flags: "a" }
	);
	app.use(morgan("combined", { stream: accessLogStream }));

	// routes
	app.use("/api", routes);
};
