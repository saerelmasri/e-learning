const { Router } = require('express');
const router = Router();
const addFile = require('../Controller/file.controller');
const upload = require('../middleware/upload');

router.post('/addFile',upload.single('content'), addFile);

module.exports = router