import { Character } from "../../models/index.js";

class CharacterSeeder {
  static async seed() {
    const characterData = [
      { userId: 1, name: "Poppy Reynolds", hunterIndex: "flake" },
      { userId: 1, name: "Calathea Abernathy", hunterIndex: "expert" },
      { userId: 2, name: "Jinjo McKid", hunterIndex: "spooky" },
    ];
    for (const singleCharacterData of characterData) {
      const currentCharacter = await Character.query().findOne({
        name: singleCharacterData.name,
      });
      if (!currentCharacter) {
        await Character.query().insert(singleCharacterData);
      }
    }
  }
}

export default CharacterSeeder;
