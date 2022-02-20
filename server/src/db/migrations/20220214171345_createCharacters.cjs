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
    table.integer("charm").notNullable();
    table.integer("cool").notNullable();
    table.integer("sharp").notNullable();
    table.integer("tough").notNullable();
    table.integer("weird").notNullable();
    table.integer("luck").notNullable().defaultTo(7);
    table.integer("harm").notNullable().defaultTo(0);
    table.integer("experience").notNullable().defaultTo(0);
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id");
    table.string("aura");
    table.string("body");
    table.string("clothes");
    table.string("eyes");
    table.string("face");
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
