class CharacterClassTraitsSerializer {
  static async getDetails(character) {
    let serializedClassTraits = {};
    console.log("in serializer");
    console.log(character);
    if (character.hunterIndex === "divine") {
      console.log("in divine");
      const divineTraits = await character.$relatedQuery("divineTraits");
      return (serializedClassTraits.classTraits = divineTraits);
    } else {
      return serializedClassTraits;
    }
  }
}

export default CharacterClassTraitsSerializer;
