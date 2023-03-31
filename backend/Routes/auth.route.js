const { Router } = require('express');
const router = Router();
const register = require('../Controller/auth.controller');

router.post('/register', register);

module.exports = router