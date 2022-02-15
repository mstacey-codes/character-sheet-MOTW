import UserCharacterSerializer from "./UserCharacterSerializer.js";

class UserSerializer {
  static async getSummary(user) {
    const allowedAttributes = ["id", "email"];
    let serializedUser = {};
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute];
    }
    const relatedCharacters = await user.$relatedQuery("characters");

    const serializedCharacters = await Promise.all(
      relatedCharacters.map(async (character) => {
        return UserCharacterSerializer.getSummary(character);
      })
    );

    serializedUser.characters = serializedCharacters;

    return serializedUser;
  }
}

export default UserSerializer;
