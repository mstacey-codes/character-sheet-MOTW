import Move from "../../models/Move.js";

class MoveSeeder {
  static async seed() {
    const moveData = [
      {
        index: "chosenDestinysPlaything",
        name: "Destiny's Plaything",
        description:
          "At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future. On a 10+, the Keeper will reveal a useful detail about the coming mystery. On a 7-9 you get a vague hint about it. On a miss, something bad is going to happen to you.",
        relatedStat: "weird",
      },
      {
        index: "chosenImHereForAReason",
        name: "I'm Here For A Reason",
        description:
          "There's something you are destined to do. Work out the details with the Keeper, based on your fate. You cannot die until it comes to pass. If you die in play, then you must spend a Luck point. You will then, somehow, recover or be returned to life. Once your task is done (or you use up all your Luck), all bets are off.",
      },
      {
        index: "chosenTheBigEntrance",
        name: "The Big Entrance",
        description:
          "When you make a showy entrance into a dangerous situation, roll +Cool. On 10+ everyone stops to watch and listen until you finish your opening speech. On a 7-9, you pick one person or monster to stop, watch and listen until you finish talking. On a miss, you're marked as the biggest threat by all enemies who are present.",
        relatedStat: "cool",
      },
      {
        index: "chosenDevastating",
        name: "Devastating",
        description: "When you inflict harm, you may inflict +1 harm.",
      },
      {
        index: "chosenDutiful",
        name: "Dutiful",
        description:
          "When your fate rears its ugly head, and you act in accordance with any of your fate tags(either heroic or doom) then mark experience. If it's a heroic tag, take +1 forward.",
      },
      {
        index: "chosenInvincible",
        name: "Invincible",
        description:
          "You always count as having 2-armour. This doesn't stack with other protection.",
      },
      {
        index: "chosenResilience",
        name: "Resilience",
        description:
          "You heal faster than normal people. Any time your harm gets healed, heal an extra point. Additionally, your wounds count as 1-harm less for the purpose of the Keeper's harm moves.",
      },
      {
        index: "crookedArtifact",
        name: "Artifact",
        description:
          "You 'found' a magical artifact with handy powers, and kept it. Pick one: Protective amulet (1-armour magic recharge), Lucky charm (may be used as a Luck point, once only), Grimoire (studying the book gives +1 forward to use magic), Skeleton key (opens any magically sealed lock), Imp stone (A weak demon is bound to serve the holder. The imp must be summoned with the use magic move).",
      },
      {
        index: "crookedCrew",
        name: "Crew",
        description:
          "You have a regular crew, a team of three or four people who will help you out with pretty much anything. They count as a team.",
      },
      {
        index: "crookedDealwiththeDevil",
        name: "Deal with the Devil",
        description:
          "You sold your soul to the Devil. Pick one or two things you got out of the deal: wealth, fame, youth, sensual gratification, skill (add +1 to two ratings). Payment is due either when you die, in six months (if you picked two things) or otherwise in a year.",
      },
      {
        index: "crookedFriendsontheForce",
        name: "Friends on the Force",
        description:
          "You know a few cops who can be persuaded to look the other way, or do you a favour, for certain considerations. You can act under pressure to get in touch with them when you need to divert any law enforcement attention. There will be a cost, although maybe not right now.",
      },
      {
        index: "crookedMade",
        name: "Made",
        description:
          "You're 'made' in a gang. Name the gang and describe how their operations tie into your background. You can call on gang members to help you out, but they'll expect to be paid. Your bosses will have requests for you now and again, but you'll be paid. Minor trouble will be overlooked, but you better not screw over any other made gangsters.",
      },
      {
        index: "crookedDriver",
        name: "Driver",
        description:
          "You have +1 ongoing while driving, plus you can hotwire anything (the older it is, the fewer tools you need to do it). You also own two handy, wide-ly-available vehicles (perhaps a sportscar and a van).",
      },
      {
        index: "crookedHomeGround",
        name: "Home Ground",
        description:
          "Your crew made a point of keeping the locals happy - keeping them safe, ensuring things always went down okay. When you're back in your old neighbourhood, you can always find people who will hide you or help you with a minor favour, no questions asked.",
      },
      {
        index: "crookedNotorious",
        name: "Notorious",
        description:
          "You have a reputation from your criminal past. When you reveal who you are, your terrifying reputation counts as a reason for people to do what you ask, for the manipulate someone move. Revealing your identity to someone can create other problems later, of course.",
      },
      {
        index: "divineBossfromBeyond",
        name: "Boss from Beyond",
        description:
          "At the beginning of each mystery, roll +Weird. On a 10+, your Superiors ask you to do something simple. On a 7-9, they ask you to do something complicated or difficult. In either case, you get to ask them one of the questions from the investigate a mystery move right now. On a miss, you are required to do something terrible. If you do not accomplish what they've ordered, you cannot use this move again until you have made up for your failure.",
        relatedStat: "weird",
      },
      {
        index: "divineAngelWings",
        name: "Angel Wings",
        description:
          "You can go instantly to anywhere you've visited before, or to a person you know well. When you carry one or two people with you, roll +Weird. On a 10+ you all go where you wanted. On a 7-9, you don't quite manage it. Either you are all separated, or you all appear in the wrong place.",
        relatedStat: "weird",
      },
      {
        index: "divineWhatINeedWhenINeedIt",
        name: "What I Need, When I Need It",
        description:
          "You may store any small object you own, putting it into a magical space nobody can get to. You may retrieve anything you stored at any time; it appears in your hand.",
      },
      {
        index: "divineSmite",
        name: "Smite",
        description:
          "Your body and divine weapon always count as a weakness against the monsters you fight. Your unarmed attacks are 2-harm intimate hand messy.",
      },
      {
        index: "divineSoothe",
        name: "Soothe",
        description:
          "When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions they have. This works even if the thing that freaked them out is still present, as long as your voice can be heard.",
      },
      {
        index: "divineLayOnHands",
        name: "Lay On Hands",
        description:
          "Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool. On a 10+, heal 2 harm or an illness, plus they're stabilized. On a 7-9, you can heal the harm or illness as on a 10+, but you take it into your-self. On a miss, your aura causes them extra harm.",
        relatedStat: "cool",
      },
      {
        index: "divineCastOutEvil",
        name: "Cast Out Evil",
        description:
          "You may banish an unnatural creature from your presence. Roll +Tough. On a 10+ it is banished. On a 7-9 it takes a little while for the banishing to take effect—the creature has time to make one or two actions. Either way, the banished creature is unharmed, and you have no control over where it goes. This move may be used on unnatural hunters (e.g. the Monstrous). On a miss, something is keeping it here. That's bad.",
        relatedStat: "tough",
      },
      {
        index: "expertIveReadAboutThisSortOfThing",
        name: "I've Read About This Sort Of Thing",
        description: "Roll +Sharp instead of +Cool when you act under pressure.",
        relatedStat: "sharp",
      },
      {
        index: "expertOftenRight",
        name: "Often Right",
        description:
          "When a hunter comes to you for advice about a problem, give them your honest opinion and advice. If they take your advice, they get +1 ongoing while following your advice, and you mark experience.",
      },
      {
        index: "expertPreparedness",
        name: "Preparedness",
        description:
          "When you need something unusual or rare, roll +Sharp. On a 10+, you have it here right now. On a 7-9 you have it, but not here: it will take some time to get it. On a miss, you know where it is, but it's somewhere real bad.",
        relatedStat: "sharp",
      },
      {
        index: "expertItWasntAsBadAsItLooked",
        name: "It Wasn't As Bad As It Looked",
        description:
          "Once per mystery, you may attempt to keep going despite your injuries. Roll +Cool. On a 10+, heal 2 harm and stabilize your wounds. On a 7-9 you may either stabilize or heal 1 harm. On a miss, it was worse than it looked: the Keeper may inflict a harm move on you, or make your wounds unstable.",
        relatedStat: "cool",
      },
      {
        index: "expertPreciseStrike",
        name: "Precise Strike",
        description:
          "When you inflict harm on a monster, you can aim for a weak spot. Roll +Tough. On a 10+ you inflict +2 harm. On a 7-9 you inflict +1 harm. On a miss, you leave yourself open to the monster.",
        relatedStat: "tough",
      },
      {
        index: "expertTheWomanorManWithThePlan",
        name: "The Woman (or Man) with The Plan",
        description:
          "At the beginning of each mystery, roll +Sharp. On a 10+ hold 2, on a 7-9 hold 1. Spend the hold to be where you need to be, prepared and ready. On a miss, the Keeper holds 1 they can spend to put you in the worst place, unprepared and unready.",
        relatedStat: "sharp",
      },
      {
        index: "expertDarkPast",
        name: "Dark Past",
        description:
          "If you trawl through your memories for something relevant to the case at hand, roll +Weird. On a 10+ ask the Keeper two questions from the list below. On a 7-9 ask one. On a miss, you can ask a question anyway but that will mean you were personally complicit in creating the situation you are now dealing with. The questions are: When I dealt with this creature (or one of its kind), what did I learn? What black magic do I know that could help here? Do I know anyone who might be behind this? Who do I know who can help us right now?",
        relatedStat: "weird",
      },
      {
        index: "flakeConnecttheDots",
        name: "Connect the Dots",
        description:
          "At the beginning of each mystery, if you look for the wider patterns that current events might be part of, roll +Sharp. On a 10+ hold 3, and on a 7-9 hold 1. Spend your hold during the mystery to ask the Keeper any one of the following questions: Is this person connected to current events more than they are saying? When and where will the next critical event occur? What does the monster want from this person? Is this connected to previous mysteries we have investigated? How does this mystery connect to the bigger picture?",
        relatedStat: "sharp",
      },
      {
        index: "flakeCrazyEyes",
        name: "Crazy Eyes",
        description: "You get +1 Weird (max +3).",
      },
      {
        index: "flakeSeeItAllFitsTogether",
        name: "See, it All Fits Together",
        description: "You can use Sharp instead of Charm when you manipulate someone.",
        relatedStat: "sharp",
      },
      {
        index: "flakeSuspiciousMind",
        name: "Suspicious Mind",
        description: "If someone lies to you, you know it.",
      },
      {
        index: "flakeOftenOverlooked",
        name: "Often Overlooked",
        description:
          "When you act all crazy to avoid something, roll +Weird. On a 10+ you're regarded as unthreatening and unimportant. On a 7-9, pick one: unthreatening or unimportant. On a miss, you draw lots (but not all) of the attention.",
        relatedStat: "weird",
      },
      {
        index: "flakeContrary",
        name: "Contrary",
        description:
          "When you seek out and receive some-one's honest advice on the best course of action for you and then do something else instead, mark experience. If you do exactly the opposite of their advice, you also take +1 ongoing on any moves you make pursuing that course.",
      },
      {
        index: "flakeNetFriends",
        name: "Net Friends",
        description:
          "You know a lot of people on the Inter-net. When you contact a net friend to help you with a mystery, roll +Charm. On a 10+, they're available and helpful—they can fix something, break a code, hack a computer, or get you some special information. On a 7-9, they're prepared to help, but it's either going to take some time or you're going to have to do part of it yourself. On a miss, you burn some bridges.",
        relatedStat: "charm",
      },
      {
        index: "flakeSneaky",
        name: "Sneaky",
        description: "When you attack from ambush, or from behind, inflict +2 harm.",
      },
      {
        index: "initiateConnecttheDots",
        name: "I'll Connect the Dots",
        description:
          "At the beginning of each mystery, if you look for the wider patterns that current events might be part of, roll +Sharp. On a 10+ hold 3, and on a 7-9 hold 1. Spend your hold during the mystery to ask the Keeper any one of the following questions: Is this person connected to current events more than they are saying? When and where will the next critical event occur? What does the monster want from this person? Is this connected to previous mysteries we have investigated? How does this mystery connect to the bigger picture?",
        relatedStat: "sharp",
      },
      {
        index: "initiateAncientFightingArts",
        name: "Ancient Fighting Arts",
        description:
          "When using an old-fashioned hand weapon, you inflict +1 harm and get +1 whenever you roll protect someone.",
      },
      {
        index: "initiateMystic",
        name: "Mystic",
        description: "Every time you successfully use magic, take +1 forward.",
      },
      {
        index: "initiateFortunes",
        name: "Fortunes",
        description:
          "The Sect has ancient prophecies or divination techniques to predict the future. Once per mystery, you may use them. If you look at what the future holds, roll +Weird. On a 10+ hold 3, and on a 7-9 hold 1. On a miss, you get bad information and the Keeper decides how that affects you. Spend your hold to: have a useful object ready; be somewhere you are needed, just in time; take +1 forward, or give +1 forward to another hunter; retroactively warn someone about an attack, so that it doesn't happen.",
        relatedStat: "weird",
      },
      {
        index: "initiateSacredOath",
        name: "Sacred Oath",
        description:
          "You may bind yourself to a single goal, forsaking something during your quest (e.g. speech, all sustenance but bread and water, alcohol, lying, sex, etc). Get the Keeper's agreement on this—it should match the goal in importance and difficulty. While you keep your oath and work towards your goal, mark experience at the end of every session and get +1 on any rolls that directly help achieve the goal. If you break the oath, take -1 ongoing until you have atoned.",
      },
      {
        index: "initiateMentor",
        name: "Mentor",
        description:
          "You have a mentor in the Sect: name them. When you contact your mentor for info, roll +Sharp. On a 10+, you get an answer to your question, no problem. On a 7-9 you choose: they're either busy and can't help, or they answer the question but you owe a favour. On a miss, your question causes trouble.",
        relatedStat: "sharp",
      },
      {
        index: "initiateApprentice",
        name: "Apprentice",
        description:
          "You have an apprentice: name them. Your job is to teach them the Sect's ways. They count as an ally: subordinate (motivation: to follow your instructions to the letter).",
      },
      {
        index: "initiateHelpingHand",
        name: "Helping Hand",
        description:
          "When you successfully help out another hunter, they get +2 instead of the usual +1.",
      },
      {
        index: "initiateThatOldBlackMagic",
        name: "That Old Black Magic",
        description:
          "When you use magic, you can ask a question from the investigate a mystery move as your effect.",
      },
      {
        index: "monstrousImmortal",
        name: "Immortal",
        description:
          "You do not age or sicken, and whenever you suffer harm you suffer 1-harm less.",
      },
      {
        index: "monstrousUnnaturalAppeal",
        name: "Unnatural Appeal",
        description: "Roll +Weird instead of +Charm when you manipulate someone.",
        relatedStat: "weird",
      },
      {
        index: "monstrousUnholyStrength",
        name: "Unholy Strength",
        description: "Roll +Weird instead of +Tough when you kick some ass.",
        relatedStat: "weird",
      },
      {
        index: "monstrousIncorporeal",
        name: "Incorporeal",
        description: "You may move freely through solid objects (but not people).",
      },
      {
        index: "monstrousPreternaturalSpeed",
        name: "Preternatural Speed",
        description:
          "You go much faster than normal people. When you chase, flee, or run take +1 ongoing.",
      },
      {
        index: "monstrousClawsoftheBeast",
        name: "Claws of the Beast",
        description: "All your natural attacks get +1 harm.",
      },
      {
        index: "monstrousMentalDominion",
        name: "Mental Dominion",
        description:
          "When you gaze into a normal human's eyes and exert your will over them, roll +Charm. On a 10+, hold 3. On a 7-9, hold 1. You may spend your hold to give them an order. Regular people will follow your order, whatever it is. Hunters can choose whether they do it or not. If they do, they mark experience.",
        relatedStat: "charm",
      },
      {
        index: "monstrousUnquenchableVitality",
        name: "Unquestionable Vitality",
        description:
          "When you have taken harm, you can heal yourself. Roll +Cool. On a 10+, heal 2-harm and stabilise your injuries. On a 7-9, heal 1-harm and stabilise your injuries. On a miss, your injuries worsen.",
        relatedStat: "cool",
      },
      {
        index: "monstrousDarkNegotiator",
        name: "Dark Negotiator",
        description:
          "You can use the manipulate someone move on monsters as well as people, if they can reason and talk.",
      },
      {
        index: "monstrousFlight",
        name: "Flight",
        description: "You can fly.",
      },
      {
        index: "monstrousShapeshifter",
        name: "Shapeshifter",
        description:
          "You may change your form (usually into an animal). Decide if you have just one alternate form or several, and detail them. You gain +1 to investigate a mystery when using an alternate form's superior senses (e.g. smell for a wolf, sight for an eagle).",
        relatedStat: "weird",
      },
      {
        index: "monstrousSomethingBorrowed",
        name: "Something Borrowed",
        description:
          "Take a move from a hunter playbook that is not currently in play. Keep track in notes.",
      },
      {
        index: "mundaneAlwaysTheVictim",
        name: "Always the Victim",
        description:
          "When another hunter uses protect someone to protect you, they mark experience. Whenever a monster captures you, you mark experience.",
      },
      {
        index: "mundaneOops",
        name: "Oops",
        description:
          "If you want to stumble across something important, tell the Keeper. You will find something important and useful, although not necessarily related to your immediate problems.",
      },
      {
        index: "mundanePanicButton",
        name: "Panic Button",
        description:
          "When you need to escape, name the route you'll try and roll +Sharp. On a 10+ you're out of danger, no problem. On a 7-9 you can go or stay, but if you go it's going to cost you (you leave some-thing behind or something comes with you). On a miss, you are caught halfway out.",
        relatedStat: "sharp",
      },
      {
        index: "mundaneThePowerofHeart",
        name: "The Power of Heart",
        description:
          "When fighting a monster, if you help someone, don't roll +Cool. You automatically help as though you'd rolled a 10.",
        relatedStat: "cool",
      },
      {
        index: "mundaneTrustMe",
        name: "Trust Me",
        description:
          "When you tell a normal person the truth in order to protect them from danger, roll +Charm. On a 10+ they'll do what you say they should, no questions asked. On a 7-9 they do it, but the Keeper chooses one from: They ask you a hard question first; They stall and dither a while; They have a “better” idea. On a miss, they're going to think you' re crazy and maybe dangerous too.",
        relatedStat: "charm",
      },
      {
        index: "mundaneWhatCouldGoWrong",
        name: "What Could Go Wrong?",
        description:
          "Whenever you charge into immediate danger without hedging your bets, hold 2. You may spend your hold to: Inflict +1 harm; Reduce someone's harm suffered by 1; Take +2 forward on an act under pressure roll.",
      },
      {
        index: "mundaneDontWorryIllCheckItOut",
        name: "Don't Worry, I'll Check It Out",
        description:
          "Whenever you go off by yourself to check out somewhere (or something) scary, mark experience.",
      },
      {
        index: "professionalProfessional",
        name: "Professional",
        description:
          "When you deal with the Agency, requesting help or gear, or making excuses for a failure, roll +Sharp. On a 10+, you're good— your request for gear or personnel is okayed, or your slip-up goes unnoticed. On a 7-9, things aren't so great. You might get chewed out by your superiors and there'll be fallout, but you get what you need for the job. On a miss, you screwed up: you might be suspended or under investigation, or just in the doghouse. You certainly aren't going to get any help until you sort it all out.",
      },
      {
        index: "professionalBottleItUp",
        name: "Bottle It Up",
        description:
          "If you want, you can take up to +3 bonus when you act under pressure. For each +1 you use, the Keeper holds 1. That hold can be spent later— one for one— to give you -1 on any move except act under pressure.",
      },
      {
        index: "professionalUnfazeable",
        name: "Unfazeable",
        description: "Take +1 Cool (max +3).",
      },
      {
        index: "professionalBattlefieldAwareness",
        name: "Battlefield Awareness",
        description:
          "You always know what's happening around you, and what to watch out for. Take +1 armour (max 2-armour) on top of whatever you get from your gear.",
      },
      {
        index: "professionalLeaveNoManBehind",
        name: "Leave No Man Behind",
        description:
          "In combat, when you help someone escape, roll +Sharp. On a 10+ you get them out clean. On a 7-9, you can either get them out or suffer no harm, you choose. On a miss, you fail to get them out and you’ve attracted hostile attention.",
        relatedStat: "sharp",
      },
      {
        index: "professionalTacticalGenius",
        name: "Tactical Genius",
        description: "When you read a bad situation, you may roll +Cool instead of +Sharp.",
        relatedStat: "cool",
      },
      {
        index: "professionalMedic",
        name: "Medic",
        description:
          "You have a full first aid kit, and the training to heal people. When you do first aid, roll +Cool. On a 10+ the patient is stabilized and healed of 2 harm. On a 7-9 choose one: heal 2 harm or stabilize the injury. On a miss, you cause an extra 1 harm. This move takes the place of regular first aid.",
        relatedStat: "cool",
      },
      {
        index: "professionalMobility",
        name: "Mobility",
        description:
          "You have a truck, van, or car built for monster hunting. Choose two good things and one bad thing about it. Good things: roomy; surveillance gear; fast; stealthy; intimidating; classic; medical kit; sleep-ing space; toolkit; concealed weapons; anonymous; armoured (+1 armour inside); tough; monster cage. Bad things: loud; obvious; temperamental; beat-en-up; gas-guzzler; uncomfortable; slow; old.",
      },
      {
        index: "spell-slingerToolsandTechniques",
        name: "Tools and Techniques",
        description:
          "To use your combat magic effectively, you rely on a collection of tools and techniques. Cross off one; you'll need the rest. Consumables: You need certain supplies— powders, oils, etc—on hand, some will be used up each cast. If you don't have them, take 1-harm ignore-armour when you cast. Foci: You need wands, staves, and other obvious props to focus. If you don't have what you need, your combat magic does 1 less harm. Gestures: You need to wave your hands around to use combat magic. If you're restrained, take -1 ongoing for combat magic. Incantations: You must speak in an arcane language to control your magic. If you use combat magic without speaking, act under pressure to avoid scrambling your thoughts.",
      },
      {
        index: "spell-slingerAdvancedArcaneTraining",
        name: "Advanced Arcane Training",
        description:
          "If you have two of your three Tools and Techniques at the ready, you may ignore the third one.",
      },
      {
        index: "spell-slingerArcaneReputation",
        name: "Arcane Reputation",
        description:
          "Pick three big organizations or groups in the supernatural community, which can include some of the more sociable types of monsters. They've heard of you and respect your power. With affected humans, take +1 forward when you manipulate them. You may manipulate affected monsters as if they were human, with no bonus.",
      },
      {
        index: "spell-slingerCouldveBeenWorse",
        name: "Could've Been Worse",
        description:
          "When you miss a use magic roll you can choose one of the following options instead of losing control of the magic: Fizzle: The preparations and materials for the spell are ruined. You'll have to start over from scratch with the prep time doubled; This Is Gonna Suck: The effect happens, but you trigger all of the listed glitches but one. You pick the one you avoid.",
      },
      {
        index: "spell-slingerEnchantedClothing",
        name: "Enchanted Clothing",
        description:
          "Pick an article of every-day clothing-it's enchanted without any change in appearance. Take -1 harm from any source that tries to get at you through the garment.",
      },
      {
        index: "spell-slingerForensicDivination",
        name: "Forensic Divination",
        description:
          "When you successfully investigate a mystery, you may ask “What magic was done here?” as a free extra question.",
      },
      {
        index: "spell-slingerGoBigorGoHome",
        name: "Go Big Or Go Home",
        description:
          "When you must use magic as a requirement for Big Magic, take +1 ongoing to those use magic rolls.",
      },
      {
        index: "spell-slingerNotMyFault",
        name: "Not My Fault",
        description:
          "When you must use magic as a requirement for Big Magic, take +1 ongoing to those use magic rolls.",
      },
      {
        index: "spell-slingerPractitioner",
        name: "Practitioner",
        description:
          "Choose two effects available to you under use magic. Take +1 to use magic whenever you choose one of those effects.",
      },
      {
        index: "spell-slingerShieldSpell",
        name: "Shield Spell",
        description:
          "When you protect someone, gain 2-armour against any harm that is transferred to you. This doesn't stack with your other armour, if any.",
      },
      {
        index: "spell-slingerThirdEye",
        name: "Third Eye",
        description:
          "When you read a bad situation, you can open up your third eye for a moment to take in extra information. Take +1 hold on any result of 7 or more, plus you can see invisible things. On a miss, you may still get 1 hold, but you're exposed to super-natural danger. Unfiltered hidden reality is rough on the mind!",
      },
      {
        index: "spookyTelepathy",
        name: "Telepathy",
        description:
          "You can read people’s thoughts and put words in their mind. This can allow you to investigate a mystery or read a bad situation without needing to actually talk. You can also manipulate someone without speaking. You still roll moves as normal, except people will not expect the weirdness of your mental communication.",
      },
      {
        index: "spookyHex",
        name: "Hex",
        description:
          "When you cast a spell (with use magic), as well as the normal effects, you may pick from the follow-ing: The target contracts a disease; The target immediately suffers harm (2-harm magic ignore-armour); The target breaks something precious or important.",
      },
      {
        index: "spookyTheSight",
        name: "The Sight",
        description:
          "You can see the invisible, especially spirits and magical influences. You may communicate with (maybe even make deals with) the spirits you see, and they give you more opportunities to spot clues when you investigate a mystery.",
      },
      {
        index: "spookyPremonitions",
        name: "Premonitions",
        description:
          "At the start of each mystery, roll +Weird. On a 10+, you get a detailed vision of some-thing bad that is yet to happen. You take +1 forward to prevent it coming true, and mark experience if you stop it. On a 7-9+ you get clouded images of some-thing bad that is yet to happen: mark experience if you stop it. On a miss, you get a vision of something bad happening to you and the Keeper holds 3, to be spent one-for-one as penalties to rolls you make.",
        relatedStat: "weird",
      },
      {
        index: "spookyHunches",
        name: "Hunches",
        description:
          "When something bad is happening (or just about to happen) somewhere that you aren't, roll +Sharp. On a 10+ you knew where you needed to go, just in time to get there. On a 7-9, you get there late—in time to intervene, but not prevent it altogether. On a miss, you get there just in time to be in trouble yourself.",
        relatedStat: "sharp",
      },
      {
        index: "spookyTuneIn",
        name: "Tune In",
        description:
          "You can attune your mind to a monster or minion. Roll +Weird. On a 10+, hold 3. On a 7-9, hold 1. On a miss, the monster becomes aware of you. Spend one hold to ask the Keeper one of the fol-lowing questions, and gain +1 ongoing while acting on the answers: Where is the creature right now? What is it planning to do right now? Who is it going to attack next? Who does it regard as the biggest threat? How can I attract its attention?",
        relatedStat: "weird",
      },
      {
        index: "spookyTheBigWhammy",
        name: "The Big Whammy",
        description:
          "You can use your powers to kick some ass: roll +Weird instead of +Tough. The attack has 2-harm close obvious ignore-armour. On a miss, you'll get a magical backlash.",
        relatedStat: "weird",
      },
      {
        index: "spookyJinx",
        name: "Jinx",
        description:
          "You can encourage coincidences to occur, the way you want. When you jinx a target, roll +Weird. On a 10+ hold 2 and on a 7-9 hold 1. On a miss, the Keeper holds 2 over you to be used in the same way. Spend your hold to: Interfere with a hunter, giving them -1 forward; Help a hunter, giving them +1 forward, by interfering with their enemy; Interfere with what a monster, minion, or bystander is trying to do; Inflict 1-harm on the target due to an accident; The target finds something you left for them; The target loses something that you will soon find.",
        relatedStat: "weird",
      },
      {
        index: "wrongedIKnowMyPrey",
        name: "I Know My Prey",
        description:
          "You get +1 ongoing when knowingly investigating, pursuing or fighting the breed of monster that caused your loss.",
      },
      {
        index: "wrongedBerserk",
        name: "Berserk",
        description:
          "No matter how much harm you take, you can always keep going until the current fight is over. During a fight, the Keeper may not use harm moves on you and you cannot die. When the fight ends, all harm takes effect as normal.",
      },
      {
        index: "wrongedNEVERAGAIN",
        name: "NEVER AGAIN!",
        description:
          "In combat, you may choose to protect someone without rolling, as if you had rolled a 10+, but you may not choose to “suffer little harm.",
      },
      {
        index: "wrongedWhatDoesNotKillMe",
        name: "What Does Not Kill Me...",
        description:
          "If you have suffered harm in a fight, you gain +1 ongoing until the fight is over.",
      },
      {
        index: "wrongedSafetyFirst",
        name: "Safety First",
        description:
          "You have jury-rigged extra protection into your gear, giving you +1 armour (maximum 2-armour).",
      },
      {
        index: "wrongedDIYSurgery",
        name: "DIY Surgery",
        description:
          "When you do quick and dirty first aid on someone (including yourself ), roll +Cool. On a 10+ it's all good, it counts as normal first aid, plus stabilize the injury and heal 1 harm. On a 7-9 it counts as normal first aid, plus one of these, your choice: Stabilise the injury but the patient takes -1 forward; Heal 1-harm and stabilise for now, but it will return as 2-harm and become unstable again later; Heal 1-harm and stabilise but the patient takes -1 ongoing until it's fixed properly.",
        relatedStat: "cool",
      },
      {
        index: "wrongedToolsMatter",
        name: "Tools Matter",
        description:
          "With your signature weapon (see your gear, below), you get +1 to kick some ass.",
      },
    ];
    for (const singleMoveData of moveData) {
      const currentMove = await Move.query().findOne({
        index: singleMoveData.index,
      });
      if (!currentMove) {
        await Move.query().insert(singleMoveData);
      }
    }
  }
}

export default MoveSeeder;
