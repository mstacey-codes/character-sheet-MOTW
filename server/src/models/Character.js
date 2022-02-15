const Model = require("./Model.js");

class Character extends Model {
  static get tableName() {
    return "characters";
  }

  static get relationMappings() {
    const User = require("./User.js");
    const Hunter = require("./Hunter.js");

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
