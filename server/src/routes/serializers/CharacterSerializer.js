class CharacterSerializer {
  static async getDetails(character) {
    const allowedAttributes = ["id", "name", "hunterIndex"];
    let serializedCharacter = {};
    for (const attribute of allowedAttributes) {
      serializedCharacter[attribute] = character[attribute];
    }
    const allowedLookAttributes = ["aura", "body", "clothes", "eyes", "face"];
    serializedCharacter.look = {};
    for (const attribute of allowedLookAttributes) {
      serializedCharacter.look[attribute] = character[attribute];
    }
    const allowedStatsAttributes = ["charm", "cool", "sharp", "tough", "weird"];
    serializedCharacter.stats = {};
    for (const attribute of allowedStatsAttributes) {
      serializedCharacter.stats[attribute] = character[attribute];
    }
    return serializedCharacter;
  }
}

export default CharacterSerializer;
