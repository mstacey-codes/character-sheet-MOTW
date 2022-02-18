import CharacterStatsSerializer from "./CharacterStatsSerializer.js";
import CharacterLookSerializer from "./CharacterLookSerializer.js";

class CharacterSerializer {
  static async getDetails(character) {
    const allowedAttributes = ["id", "name", "hunterIndex"];
    let serializedCharacter = {};
    for (const attribute of allowedAttributes) {
      serializedCharacter[attribute] = character[attribute];
    }

    const formattedHunter = await character.$relatedQuery("hunter");
    serializedCharacter.hunterType = formattedHunter.name;

    const stats = await character.$relatedQuery("stats");
    const serializedStats = await CharacterStatsSerializer.getDetails(stats);
    serializedCharacter.stats = serializedStats;

    const look = await character.$relatedQuery("look");
    const serializedLook = await CharacterLookSerializer.getDetails(look);
    serializedCharacter.look = serializedLook;
    return serializedCharacter;
  }
}

export default CharacterSerializer;
