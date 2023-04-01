const { Router } = require('express');
const router = Router();
const { addFile, removeFile, listOfFiles } = require('../Controller/file.controller');
const upload = require('../middleware/upload');

router.post('/addFile',upload.single('content'), addFile);
router.delete('/removeFile/:id', removeFile);
router.get('/list', listOfFiles);

module.exports = router