// include all of your models here using CommonJS requires
const User = require("./User.js");
const Hunter = require("./Hunter.js");
const Character = require("./Character.js");
const DivineTraits = require("./classSpecificModels/DivineTraits.js");

module.exports = { User, Hunter, Character, DivineTraits };
