/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("divineTraits", (table) => {
    table.bigIncrements("id").notNullable();
    table.bigInteger("characterId").notNullable().index().unsigned().references("characters.id");
    table.string("mission").notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("divineTraits");
};
