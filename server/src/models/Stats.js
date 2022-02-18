const Model = require("./Model.js");

class Stats extends Model {
  static get tableName() {
    return "stats";
  }

  static get relationMappings() {
    const Character = require("./Character.js");

    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: Character,
        join: {
          from: "stats.characterId",
          to: "characters.id",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["charm", "cool", "sharp", "tough", "weird"],
      properties: {
        charm: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        cool: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        sharp: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        tough: { type: ["string", "integer"], minimum: -2, maximum: 3 },
        weird: { type: ["string", "integer"], minimum: -2, maximum: 3 },
      },
    };
  }
}

module.exports = Stats;
