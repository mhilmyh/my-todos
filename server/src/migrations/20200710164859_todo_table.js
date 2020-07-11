exports.up = function (knex) {
	return knex.schema.createTable("todo", (table) => {
		table.increments("id").primary();
		table.string("title", 255).notNullable();
		table.string("note", 255);
		table.timestamp("deadline").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("todo");
};
