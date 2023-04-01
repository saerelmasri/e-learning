const { Router } = require('express');
const router = Router();
const { register, login, getUserByToken, logout } = require('../Controller/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/getByToken', getUserByToken);
router.post('/logout', logout);

module.exports = router