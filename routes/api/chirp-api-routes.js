const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
    db.Chirp.findAll({
    }).then(dbChirp => {
        const sortedChirps = dbChirp.sort((a, b) => b.createdAt - a.createdAt);
        console.log(sortedChirps);
        res.json(sortedChirps);
    });
});

router.put('/', (req, res) => {
    db.Chirp.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbChirp => {
        res.json(dbChirp);
    });
});


router.post('/', (req, res) => {
    db.Chirp.create(req.body).then(dbChirp => {
        console.log(dbChirp);
        if (res.status === 200) {
            const https = require('https');
            const options = {
                hostname: "https://bellbird.joinhandshake-internal.com/push",
                method: 'POST',

            }

        }
        res.json(dbChirp);
    }).catch(err => {
        if (err) {
            throw new Error("Chirp did not save");
        }
    });
});

module.exports = router;