import { Character } from "../../models/index.js";

class CharacterSeeder {
  static async seed() {
    const characterData = [
      {
        userId: 1,
        name: "Poppy Reynolds",
        hunterIndex: "flake",
        clothes: "Neat clothes",
        eyes: "Wide eyes",
        charm: 1,
        cool: -1,
        sharp: 2,
        tough: 1,
        weird: 0,
      },
      {
        userId: 1,
        name: "Calathea Abernathy",
        hunterIndex: "expert",
        clothes: "Old fashioned clothes",
        face: "Contemplative face",
        charm: 0,
        cool: 1,
        sharp: 2,
        tough: -1,
        weird: 1,
      },
      {
        userId: 2,
        name: "Jinjo McKid",
        hunterIndex: "spooky",
        body: "Teen",
        clothes: "Nerdy clothes",
        eyes: "Unblinking eyes",
        charm: 2,
        cool: 0,
        sharp: -1,
        tough: -1,
        weird: 2,
      },
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
