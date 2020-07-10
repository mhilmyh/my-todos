const express = require("express");
const router = express.Router();
const knex = require("../tools/knex");

// get all todo
router.get("/", async (req, res) => {
	try {
		let todos = await knex("todo");
		res.json({
			todos: todos,
			message: "mendapatkan seluruh todo",
		});
	} catch (e) {
		console.error(e);
	}
});

// save new todo
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		let title = req.body.title;
		let note = req.body.note;
		let deadline = new Date(req.body.deadline);

		let id = await knex("todo").insert({
			title: title,
			note: note,
			deadline: deadline,
		});

		res.json({
			id: id[0],
			title: title,
			note: note,
			deadline: deadline,
			message: "berhasil menyimpan todo",
		});
	} catch (e) {
		console.error(e);
	}
});

// delete todo
router.delete("/", async (req, res) => {
	try {
		let id = req.body.id;

		await knex("todo").where("id", id).del();
		res.json({
			id: id,
			message: "todo telah dihapus",
		});
	} catch (e) {
		console.error(e);
	}
});

module.exports = router;
