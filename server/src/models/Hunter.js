const Model = require("./Model.js");

class Hunter extends Model {
  static get tableName() {
    return "hunters";
  }

  static get relationMappings() {
    const Character = require("./Character.js");

    return {
      character: {
        relation: Model.HasOneRelation,
        modelClass: Character,
        join: {
          from: "hunters.index",
          to: "charactersRouter.hunterIndex",
        },
      },
    };
  }
}

module.exports = Hunter;
