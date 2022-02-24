/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("abilities", (table) => {
    table.bigIncrements("id").primary();
    table.bigInteger("characterId").notNullable().unsigned().index().references("characters.id");
    table.string("moveIndex").notNullable().index().references("moves.index");
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("abilities");
};
