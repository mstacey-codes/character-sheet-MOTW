const Model = require("./Model.js");

class Look extends Model {
  static get tableName() {
    return "looks";
  }

  static get relationMappings() {
    const Character = require("./Character.js");

    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: Character,
        join: {
          from: "looks.characterId",
          to: "characters.id",
        },
      },
    };
  }
}

module.exports = Look;
