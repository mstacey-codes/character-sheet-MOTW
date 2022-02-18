/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("stats", (table) => {
    table.bigIncrements("id").notNullable().primary();
    table.bigInteger("characterId").notNullable().index().unsigned().references("characters.id");
    table.integer("charm").notNullable();
    table.integer("cool").notNullable();
    table.integer("sharp").notNullable();
    table.integer("tough").notNullable();
    table.integer("weird").notNullable();
    table.integer("luck").notNullable().defaultTo(7);
    table.integer("harm").notNullable().defaultTo(0);
    table.integer("experience").notNullable().defaultTo(0);
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("stats");
};
