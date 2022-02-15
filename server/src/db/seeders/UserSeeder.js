import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "poppy@gmail.com",
        cryptedPassword: "$2b$10$4cIEaD8VI363mcxC6FZS3.PvsSze.HjPJMIx1miVd2zIv3QV4YT4a",
      },
      {
        email: "jinjo@gmail.com",
        cryptedPassword: "$2b$10$9DTcZhhEcKGH.iU3AJFpPuY5KHfgV4nqeTk4LhqwfRFJFCyXkFA26",
      },
    ];
    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne({
        email: singleUserData.email,
      });
      if (!currentUser) {
        await User.query().insert(singleUserData);
      }
    }
  }
}

export default UserSeeder;
