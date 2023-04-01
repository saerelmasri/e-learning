const { Router } = require('express');
const router = Router();
const { register, login, getUserByToken } = require('../Controller/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/getByToken', getUserByToken);

module.exports = router