/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("moves", (table) => {
    table.bigIncrements("id").notNullable().primary();
    table.string("index").notNullable().unique();
    table.string("name").notNullable().unique();
    table.text("description").notNullable();
    table.string("relatedStat");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("moves");
};
