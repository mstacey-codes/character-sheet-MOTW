import CharacterClassTraitsSerializer from "./CharacterClassTraitsSerializer.js";

class CharacterSerializer {
  static async getDetails(character) {
    const allowedAttributes = ["userId", "id", "name", "hunterIndex", "status"];
    let serializedCharacter = {};
    for (const attribute of allowedAttributes) {
      serializedCharacter[attribute] = character[attribute];
    }
    const formattedHunter = await character.$relatedQuery("hunter");
    serializedCharacter.hunterType = formattedHunter.name;
    const allowedLookAttributes = ["aura", "body", "clothes", "eyes", "face"];
    serializedCharacter.look = {};
    for (const attribute of allowedLookAttributes) {
      serializedCharacter.look[attribute] = character[attribute];
    }
    const allowedStatsAttributes = [
      "charm",
      "cool",
      "sharp",
      "tough",
      "weird",
      "luck",
      "harm",
      "experience",
    ];
    serializedCharacter.stats = {};
    for (const attribute of allowedStatsAttributes) {
      serializedCharacter.stats[attribute] = character[attribute];
    }
    serializedCharacter.moves = await character.$relatedQuery("moves");
    const classTraits = await CharacterClassTraitsSerializer.getDetails(character);
    serializedCharacter.classTraits = classTraits;

    return serializedCharacter;
  }
}

export default CharacterSerializer;
