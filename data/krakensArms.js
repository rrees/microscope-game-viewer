
const theSignIsRaised = {
	name: "The sign is raised",
	tone: "light",
	chronicle: {
		focusCharacter: {
			name: "Bart",
			description: "Landlord and barman of the Kraken's Arms"
		}
	},
	events: [
		{
			name: "The sign appears from nowhere",
			tone: "light"
		},
		{
			name: "The Kraken's Arms gains popularity",
			tone: "light"
		},
		{
			name: "The first magical visitors arrive at the bar",
			tone: "light",
			scenes: [
				{
					question: "Who was the first magical visitor?",
					answer: "The leaders of the Undivided Circle",
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
};

const theGreatDivide = {
	name: "The Great Divide",
	tone: "dark",
	chronicle: {
		focusCharacter: {
			name: "Sir Fairchild Humphries",
			description: "Owner of the Arms, master wizard and dandy whose looks never fade"
		}
	},
	events: [
		{
			name: "Black-Tooth Jack meets Sir Fairchild Humphries",
			tone: "light"
		}
	]
};

const theMagicDies = {
	name: "The magic dies",
	tone: "dark",
	chronicle: {
		focusCharacter: {
			name: "Donald Trump",
			description: "Small handed vulgarian with stupid hair"
		}
	},
	events: [
		{
			name: "Trump buys the land on which the pub is built",
			tone: "dark",
			scenes: [
				{
					question: "How does he manage this?",
					answer: "The city officials are bullied into submission and deported (for looking Mexican... maybe)",
					tone: "dark"
				}
			]
		}
	]
};

const gameData = {
	periods: [
		theSignIsRaised,
		theGreatDivide,
		theMagicDies
	]
};

module.export = gameData;
