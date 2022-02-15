import { Hunter } from "../../models/index.js";

class HunterSeeder {
  static async seed() {
    const hunterData = [
      {
        name: "The Chosen",
        index: "chosen",
      },
      {
        name: "The Crooked",
        index: "crooked",
      },
      {
        name: "The Divine",
        index: "divine",
      },
      {
        name: "The Expert",
        index: "expert",
      },
      {
        name: "The Flake",
        index: "flake",
      },
      {
        name: "The Initiate",
        index: "initiate",
      },
      {
        name: "The Monstrous",
        index: "monstrous",
      },
      {
        name: "The Mundane",
        index: "mundane",
      },
      {
        name: "The Professional",
        index: "professional",
      },
      {
        name: "The Spell-Slinger",
        index: "spell-slinger",
      },
      {
        name: "The Spooky",
        index: "spooky",
      },
      {
        name: "The Wronged",
        index: "wronged",
      },
    ];
    for (const singleHunterData of hunterData) {
      const currentHunter = await Hunter.query().findOne({ index: singleHunterData.index });
      if (!currentHunter) {
        await Hunter.query().insert(singleHunterData);
      }
    }
  }
}

export default HunterSeeder;
