const express = require("express");
const router = express.Router();
const todoRoute = require("./todo.route");

router.use("/todo", todoRoute);

module.exports = router;
