const { Router } = require('express');
const router = Router();
const { enroll, getEnrolledStudentByID } = require('../Controller/enrolledStudents.controller');
const verifyJWT = require('../middleware/jwt.auth');

router.post('/enrollStudent', verifyJWT, enroll);
router.get('/enrollById/:id', getEnrolledStudentByID);

module.exports = router