const Model = require("./Model.js");

class Character extends Model {
  static get tableName() {
    return "characters";
  }

  static get relationMappings() {
    const User = require("./User.js");
    const Hunter = require("./Hunter.js");
    const DivineTraits = require("./classSpecificModels/DivineTraits.js");

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

      divineTraits: {
        relation: Model.HasOneRelation,
        modelClass: DivineTraits,
        join: {
          from: "characters.id",
          to: "divineTraits.characterId",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "hunterIndex", "charm", "cool", "sharp", "tough", "weird"],
      properties: {
        name: { type: "string" },
        hunterIndex: { type: "string" },
        userId: { type: ["string", "integer"] },
        charm: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        cool: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        sharp: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        tough: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        weird: { type: ["string", "integer"], minimum: -2, maximum: 3 },
      },
    };
  }
}

module.exports = Character;
