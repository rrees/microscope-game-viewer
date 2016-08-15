const krakensArms = require('./krakensArms');
const bloodSouls = require('./bloodSouls');

const gamesList = [
	{
		slug: "krakens-arms",
		name: "The Kraken's Arms",
		type: "Chronicle",
		data: krakensArms,
		palette: {
			include: [],
			exclude: [
				"Magical minors"
			]
		},
		focuses: [
			"Origin stories",
			"Destruction",
			"Magical cabals"
		],
		legacies: [
			"Demonic booze",
			"Cult of Shoggoth",
			"The Undivided Circle"
		]
	},
	{
		slug: "blood-souls",
		name: "Blood Souls of the Ancients",
		type: "Microscope",
		description: "A computer game is due to launch and none of the game lore has been written... Microscope to the rescue!",
		palette: {
			include: [
				"Deep philosophy",
				"Big bosses with weaknesses",
				"Renaissance aesthetics",
				"Crafted power-ups"
			],
			exclude: [
				"Easy magic",
				"Non-necromatic monsters",
				"Traditional weapons and armour"
			]
		},
		data:  bloodSouls
	}
];

module.exports = gamesList;
