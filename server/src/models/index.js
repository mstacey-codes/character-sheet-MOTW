// include all of your models here using CommonJS requires
const User = require("./User.js");
const Hunter = require("./Hunter.js");
const Character = require("./Character.js");
const Move = require("./Move.js");
const Ability = require("./Ability.js");
const DivineTraits = require("./classSpecificModels/DivineTraits.js");

module.exports = { User, Hunter, Character, Move, Ability, DivineTraits };
