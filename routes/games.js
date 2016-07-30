const express = require('express');
const router = express.Router();

const gamedata = require('../data/games');

router.get('/:gameId', function(req, res, next) {
	const gameId = req.params.gameId;

	const gameData = gamedata.find((game) => gameId === game.slug);

	const templateData = {
		gameId: gameId,
		title: gameData.name,
		gameData: gameData
	};

	res.render('game', templateData);
});

module.exports = router;
