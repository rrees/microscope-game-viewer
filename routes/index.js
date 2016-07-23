var express = require('express');
var router = express.Router();

const gamedata = require('../data/games');

/* GET home page. */
router.get('/', function(req, res, next) {
    const templateData = {
        title: 'Microscope game viewer',
        games: gamedata
    };

    res.render('index', templateData);
});

module.exports = router;
