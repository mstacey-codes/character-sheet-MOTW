/**
 * @typedef {import("knex")} Knex
 */

const { knex } = require("../../models/Model");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("hunters", (table) => {
    table.string("description");
    table.string("flavor");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("hunters", (table) => {
    table.dropColumn("description");
    table.dropColumn("flavor");
  });
};
