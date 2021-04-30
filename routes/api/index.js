const router = require('express').Router();
const chirpRoutes = require('./chirp-api-routes');

router.use('/chirps', chirpRoutes);

module.exports = router;