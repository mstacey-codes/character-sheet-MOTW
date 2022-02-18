class CharacterLookSerializer {
  static async getDetails(look) {
    const allowedAttributes = ["id", "characterId", "aura", "body", "clothes", "eyes", "face"];
    let serializedLook = {};
    for (const attribute of allowedAttributes) {
      serializedLook[attribute] = look[attribute];
    }
    return serializedLook;
  }
}

export default CharacterLookSerializer;
