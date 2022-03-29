/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("characters", (table) => {
    table.string("status").notNullable().defaultTo("alive");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("characters", (table) => {
    table.dropColumn("status");
  });
};
