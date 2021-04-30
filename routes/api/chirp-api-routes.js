const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
    db.Chirp.findAll({
        
    }).then(dbChirp => {
        res.json(dbChirp);
    });
});

module.exports = router;