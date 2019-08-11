const express = require('express');
const router = express.Router();

// @route POST /api/auth

router.get('/', (req, res) => {
    res.send('Get logged a user');
});

router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;