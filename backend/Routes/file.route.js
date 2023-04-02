const { Router } = require('express');
const router = Router();
const { addFile, removeFile, listOfFiles, getFileByID } = require('../Controller/file.controller');
const upload = require('../middleware/upload');
const verifyJWT = require('../middleware/jwt.auth');


router.post('/addFile',[upload.single('content'), verifyJWT], addFile);
router.delete('/removeFile/:id', verifyJWT, removeFile);
router.get('/list', verifyJWT, listOfFiles);
router.get('/file/:id', verifyJWT, getFileByID);

module.exports = router