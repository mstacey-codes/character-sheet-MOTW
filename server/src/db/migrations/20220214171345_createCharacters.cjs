/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("characters", (table) => {
    table.bigIncrements("id").notNullable();
    table.string("name").notNullable();
    table.string("hunterIndex").notNullable().index().references("hunters.index");
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id");
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("characters");
};
