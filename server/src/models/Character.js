const Model = require("./Model.js");

class Character extends Model {
  static get tableName() {
    return "characters";
  }

  static get relationMappings() {
    const User = require("./User.js");
    const Hunter = require("./Hunter.js");
    const Stats = require("./Stats.js");
    const Look = require("./Look.js");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "characters.userId",
          to: "users.id",
        },
      },

      hunter: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hunter,
        join: {
          from: "characters.hunterIndex",
          to: "hunters.index",
        },
      },

      stats: {
        relation: Model.HasOneRelation,
        modelClass: Stats,
        join: {
          from: "characters.id",
          to: "stats.characterId",
        },
      },

      look: {
        relation: Model.HasOneRelation,
        modelClass: Look,
        join: {
          from: "characters.id",
          to: "looks.characterId",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "hunterIndex"],
      properties: {
        name: { type: "string" },
        hunterIndex: { type: "string" },
        userId: { type: ["string", "integer"] },
      },
    };
  }
}

module.exports = Character;
