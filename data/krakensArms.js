
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

const foundingOfVegas = {
	name: "Founding of the Society of Vegas",
	tone: "light",
	chronicle: {
		focusCharacter: {
			name: "Falmouth the Fantastic",
			description: "Naturally gifted at magic, astonshingly charismatic"
		},
	},
	events: [
		{
			name: "The portentious birth of Falmouth",
			tone: "light",
			scenes: [
				{
					question: "What dark force does this anger?",
					answer: "All of them",
					tone: "dark"
				}
			]
		},
		{
			name: "The seer stone is destroyed",
			tone: "light",
			scenes: [
				{
					question: "Who decides to destroy the stone and why?",
					answer: "The djinn because the Seer of the Stone was being corrupted by it",
					tone: "dark"
				}
			]
		},
		{
			name: "The destruction of the Yoke of Woe",
			tone: "light"
		}
	]
};

const theCityFounded = {
	name: "The city is founded",
	tone: "dark",
	chronicle: {
		focusCharacter: {
			name: "Mayor Janet Fairchild-Humphries"
		}
	},
	events: [
		{
			name: "The corruption of Janet Fairchild-Humphries",
			tone: "dark",
			scenes: [
				{
					question: "Who corrupts Janet?",
					answer: "Janet was corrupted by her own lust for power",
					tone: "dark"
				}
			]
		},
		{
			name: "The booze goes on strike",
			tone: "light"
		},
		{
			name: "The city council form the Cult of Shoggoth",
			tone: "dark"
		},
		{
			name: "The leader of the Cult of Shoggoth is assassinated",
			tone: "dark"
		}
	]
};

const theDragonSummoned = {
	name: "The dragon is summoned",
	tone: "dark",
	chronicle: {
		focusCharacter: {
			name: "Karlock the mad dragon"
		}
	},
	events: [
		{
			name: "The Brothers of Tomorrow murder Karlok's child",
			tone: "dark"
		},
		{
			name: "The booze is boiled in its casks by dragon flames",
			tone: "dark"
		},
		{
			name: "Karlok burns the Arms to the ground",
			tone: "dark"
		},
		{
			name: "The last of the Society of Vegas sacrifice themselves to banish Karlok",
			tone: "light"
		}
	]
}

const gameData = {
	periods: [
		theSignIsRaised,
		theGreatDivide,
		theMagicDies,
		foundingOfVegas,
		theCityFounded,
		theDragonSummoned
	]
};

module.exports = gameData;
