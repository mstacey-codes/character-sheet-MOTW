class CharacterClassTraitsSerializer {
  static async getDetails(character) {
    let serializedClassTraits = {};

    if (character.hunterIndex === "divine") {
      const divineTraits = await character.$relatedQuery("divineTraits");
      return (serializedClassTraits.classTraits = divineTraits);
    } else {
      return serializedClassTraits;
    }
  }
}

export default CharacterClassTraitsSerializer;
