/**
 * @typedef {import("knex")} Knex
 */

const { table } = require("../../boot/model.cjs");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("looks", (table) => {
    table.bigIncrements("id").notNullable().primary();
    table.bigInteger("characterId").notNullable().index().unsigned().references("characters.id");
    table.string("aura");
    table.string("body");
    table.string("clothes");
    table.string("eyes");
    table.string("face");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("looks");
};
