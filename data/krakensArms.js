
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
		},
		{
			name: "Two magicians split into different kabals after an argument",
			tone: "dark",
			scenes: [
				{
					question: "What was the argument?",
					answer: "The inheritence of the Undivided Circle",
					tone: "dark"
				}
			]
		},
		{
			name: "The trial of Blacktoothed Jack",
			tone: "dark",
			scenes: [
				{
					question: "Who led the Revolt of the Roses?",
					answer: "No-one"
				}
			]
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
		},
		{
			name: "A skyscraper is built on the demolished remains",
			tone: "dark",
			scenes: [
				{
					question: "What happens to the sign?",
					answer: "It travels back to the beginning of the story",
					tone: "light"
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
