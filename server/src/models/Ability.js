const Model = require("./Model.js");

class Ability extends Model {
  static get tableName() {
    return "abilities";
  }

  static get relationMappings() {
    const Character = require("./Character.js");
    const Move = require("./Move.js");

    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: Character,
        join: {
          from: "abilities.characterId",
          to: "characters.id",
        },
      },

      move: {
        relation: Model.BelongsToOneRelation,
        modelClass: Move,
        join: {
          from: "abilities.moveIndex",
          to: "moves.index",
        },
      },
    };
  }
}

module.exports = Ability;
