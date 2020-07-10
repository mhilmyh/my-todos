require("dotenv").config();

const express = require("express");
const loader = require("./src/loader");
const port = process.env.APP_PORT || 8000;

async function run() {
	const server = express();
	await loader(server);
	server.listen(port, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log(`Server running on port : ${port}`);
		}
	});
}

run();
