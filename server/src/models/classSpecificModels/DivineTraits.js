const Model = require("../Model.js");

class DivineTraits extends Model {
  static get tableName() {
    return "divineTraits";
  }

  static get relationMappings() {
    const Character = require("../Character.js");

    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: Character,
        join: {
          from: "divineTraits.characterId",
          to: "characters.id",
        },
      },
    };
  }
}

module.exports = DivineTraits;
