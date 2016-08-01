const krakensArms = require('./krakensArms');

const gamesList = [
	{
		slug: "krakens-arms",
		name: "The Kraken's Arms",
		type: "Chronicle",
		data: krakensArms,
		palette: {
			include: [],
			exclude: []
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
		data: {
			periods: [
				{
					name: "The Great Sundering",
					description: "Moon Fell seperates from Agire",
					tone: "light"
				}
			]
		}
	}
];

module.exports = gamesList;
