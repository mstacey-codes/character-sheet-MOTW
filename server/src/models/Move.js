const Model = require("./Model.js");

class Move extends Model {
  static get tableName() {
    return "moves";
  }

  static get relationMappings() {
    const Character = require("./Character.js");
    const Ability = require("./Ability.js");

    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: Character,
        join: {
          from: "moves.index",
          through: {
            from: "abilities.moveIndex",
            to: "abilities.characterId",
          },
          to: "characters.id",
        },
      },

      abilities: {
        relation: Model.HasManyRelation,
        modelClass: Ability,
        join: {
          from: "moves.index",
          to: "abilities.moveIndex",
        },
      },
    };
  }
}

module.exports = Move;
