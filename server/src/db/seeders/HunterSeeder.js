import { Hunter } from "../../models/index.js";

class HunterSeeder {
  static async seed() {
    const hunterData = [
      {
        name: "The Chosen",
        index: "chosen",
        description:
          "A once-ordinary person who discovered a special destiny, and has been given the power to accomplish it. The Chosen is good in a fight, with some weird powers.",
        flavor:
          "Your birth was prophesied. You are the Chosen One, and with your abilities you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",
      },
      {
        name: "The Crooked",
        index: "crooked",
        description:
          "A criminal turned monster hunter, haunted by their past and enemies. The Crooked is good in social situations and has a lot of contacts.",
        flavor:
          "\"Yeah, I've been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn't so different from the underworld I already knew. It was easy to find an angle, just like before.\"",
      },
      {
        name: "The Divine",
        index: "divine",
        description:
          "An agent of a higher power, with a mission to fulfill. The Divine is very tough and has been granted holy powers.",
        flavor:
          '"I am the Light, the Sword. I am sent to defend the meek from Darkness. All Evil fears me, for I am its end."',
      },
      {
        name: "The Expert",
        index: "expert",
        description:
          "The hunter who knows all about monsters and magic. The Expert knows a lot of hidden secrets and how to find out more, and also has a well-supplied base to work from.",
        flavor:
          '"I have dedicated my life to the study of the unnatural. I know their habits, their weaknesses. I may not be youngest or strongest, but my knowledge makes me the biggest threat."',
      },
      {
        name: "The Flake",
        index: "flake",
        description:
          "A conspiracy theorist. The Flake is great at finding things out and seeing how the events of separate mysteries are connected.",
        flavor:
          "\"Everything's connected. But not everyone can see the patterns. But me, I can never stop looking deeper. I can never stop seeing the truth. I spot the patterns. That's how I found the monsters, and that's how I help kill them.\"",
      },
      {
        name: "The Initiate",
        index: "initiate",
        description:
          "A member of an ancient monster-slaying Sect, trained to fight and use magic. The Initiate is good with magic, and their Sect provides help (and sometimes problems).",
        flavor:
          '"Since the dawn of history, we have been the bulwark against Darkness. We know the Evils of the world, and we stand against them so that the mass of humanity need not fear. We are the Flame that cleanses the Shadows."',
      },
      {
        name: "The Monstrous",
        index: "monstrous",
        description:
          "A monster fighting for the good guys. The Monstrous is very weird, and can have a variety of different powers based on what monster breed they are.",
        flavor:
          "\"I feel the hunger, the lust to destroy. But I fight it: I never give in. I'm not human any more, but I have to protect those who still are. That way I can tell myself I'm different to the other monsters. Sometimes I can even believe it.\"",
      },
      {
        name: "The Mundane",
        index: "mundane",
        description:
          "Just a normal regular person, especially good at dealing with regular people you meet and have to save, and at getting captured by monsters (which can be more useful than you might expect).",
        flavor:
          '"You heard about how monsters only pick on people with crazypowers who can fight back on even terms? Yeah, me neither. But, hell, I ended up in this monster-hunting team so I gotta do what I can, right?"',
      },
      {
        name: "The Professional",
        index: "professional",
        description:
          "You work for an agency that hunts monsters. The Professional is good in a fight, and a good team player.",
        flavor:
          "\"It's kind of strange when your job is to hunt down monsters. Still, that's the job I took on when I joined this outfit. It pays well, and the benefits are good. Like they say \nYou don't have to be crazy to work here, but it sure helps!'\"",
      },
      {
        name: "The Spell-Slinger",
        index: "spell-slinger",
        description:
          "A trained wizard, wielding powerful magic in their crusade against evil. The Spell-slinger’s arcane training gives them an advantage when dealing with eldritch secrets.",
        flavor: '"Fight fire. With fire magic."',
      },
      {
        name: "The Spooky",
        index: "spooky",
        description:
          "Has psychic or magical powers, These powers are strange and sinister... and not entirely under your control.",
        flavor:
          "\"I can do things, things that normal people can't. But there's a price—I haven't paid it in full, yet, but the bill's gonna come due soon. It's best I don't tell you any more. You get too close, you'll get hurt.\"",
      },
      {
        name: "The Wronged",
        index: "wronged",
        description:
          "Revenge driven and really tough. The Wronged is all about kiling a specific breed of monster and protecting others as you do it.",
        flavor:
          "\"They took my loved ones. Back then I wasn't strong enough to fight, but I studied, trained, and now I'm ready to cleanse the world of their taint. I'll kill them all. That's all I have left.\"",
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
