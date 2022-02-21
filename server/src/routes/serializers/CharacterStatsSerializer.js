class CharacterStatsSerializer {
  static async getDetails(stat) {
    const allowedAttributes = [
      "id",
      "characterId",
      "charm",
      "cool",
      "sharp",
      "tough",
      "weird",
      "luck",
      "harm",
      "experience",
      "updatedAt",
    ];
    let serializedStats = {};
    for (const attribute of allowedAttributes) {
      serializedStats[attribute] = stat[attribute];
    }
    return serializedStats;
  }
}

export default CharacterStatsSerializer;
