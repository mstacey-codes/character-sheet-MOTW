/* eslint-disable no-console */
import { connection } from "../boot.js";

import HunterSeeder from "./seeders/HunterSeeder.js";
import UserSeeder from "./seeders/UserSeeder.js";
import CharacterSeeder from "./seeders/CharacterSeeder.js";
import MoveSeeder from "./seeders/MoveSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding users");
    await UserSeeder.seed();
    console.log("seeding hunters");
    await HunterSeeder.seed();
    console.log("seeding characters");
    await CharacterSeeder.seed();
    await MoveSeeder.seed();
    console.log("seeding moves");
    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
