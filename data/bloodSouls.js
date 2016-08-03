
const gameData = {
	periods: [
		{
			name: "The Great Sundering",
			description: "Moon Fell seperates from Agire",
			tone: "light",
			events: [
				{
					name: "Denivici grows the Thorn Wall",
					tone: "light"
				},
				{
					name: "Thorns of Denivici are lost, possibly destroyed",
					tone: "dark"
				}
			]
		},
		{
			name: "The Dark Dimension Doors open in the City of the Dead",
			tone: "dark",
			events: [
				{
					name: "Hengé created in a blood ritual",
					tone: "dark"
				},
				{
					name: "Garalon tries to settle down, fails due to Hengé",
					tone: "dark"
				},
				{
					name: "Garalon crafts the Folly door",
					tone: "light",
					scenes: [
						{
							question: "Why does Garalon want the Folly Door deranged?",
							answer: "To exile his daughter in the City of the Dead",
							tone: "dark",
							characters: [
								{
									name: "Garalon"
								},
								{
									name: "Frederick"
								},
								{
									name: "Hengé"
								}
							],
						}
					]
				},
				{
					name: "The necromancer Mageti Toreni shackles the zombies to his will",
					tone: "light"
				},
				{
					name: "The necromancer Mageti Toreni loses power",
					tone: "dark",
					scenes: [
						{
							question: "Why do the people choose to reject Toreni when he's kept them safe for so long?",
							answer: "He was replacing beauty with utility",
							tone: "dark",
							characters: [
								{
									name: "Set",
									description: "Temple singer"
								},
								{
									name: "Square",
									description: "Head of the Temple of Beauty"
								},
								{
									name: "Serene",
									description: "Goddess of Beauty"
								}
							]
						},
						{
							question: "How does Mageti return Agire to the world?",
							answer: "To attempt to add its zombies to his army",
							tone: "dark",
							location: "Mageti's beautiful but decayed villa",
							characters: [
								{
									name: "Elanyi",
									description: "The voice in the mirror"
								},
								{
									name: "Mageti"
								},
								{
									name: "Square",
									description: "The zombified fanatic"
								}
							]
						}
					]
				},
				{
					name: "The Golden Years",
					tone: "light"
				},
				{
					name: "The Rose Age",
					tone: "dark",
					events: [
						{
							name: "The Kings Balls",
							tone: "light"
						},
						{
							name: "Descent into hedonism",
							tone: "dark"
						}
					]
				},
				{
					name: "The Deathless Year",
					description: "Apocalypse storms",
					tone: "dark",
					events: [
						{
							name: "The cult of the Serene Stars start using death magic",
							tone: "dark"
						},
						{
							name: "Geasea created",
							tone: "dark"
						},
						{
							name: "People choose to become undead",
							tone: "dark"
						}
					]
				}
			]
		}

	]
};

module.exports = gameData;
