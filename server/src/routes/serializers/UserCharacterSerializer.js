class UserCharacterSerializer {
  static async getSummary(character) {
    const allowedAttributes = ["id", "name", "hunterIndex", "status"];
    let serializedCharacter = {};
    for (const attribute of allowedAttributes) {
      serializedCharacter[attribute] = character[attribute];
    }
    const formattedHunter = await character.$relatedQuery("hunter");
    serializedCharacter.hunterType = formattedHunter.name;
    return serializedCharacter;
  }
}

export default UserCharacterSerializer;
