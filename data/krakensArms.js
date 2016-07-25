
const gameData = {
	periods: [
		{
			name: "Test start",
			tone: "light",
			chronicle: {
				focusCharacter: {
					name: "Joe",
					description: "A person"
				}
			},
			events: [
				{
					name: "First event",
					tone: "dark",
					scenes: [
						{
							question: "Why is this here?",
							answer: "As an example",
							description: "Optional",
							tone: "light",
							characters: [
								{
									name: "Blah",
									description: "Optional"
								}
							],
							exclusions: []
						}
					]
				}

			]
		},
		{
			name: "Test end",
			tone: "dark",
			events: [

			]
		}

	]
};

module.export = gameData;
