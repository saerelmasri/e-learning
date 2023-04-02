const { Router } = require('express');
const router = Router();
const { enroll, getEnrolledStudentByID, studentsInThisCouse } = require('../Controller/enrolledStudents.controller');
const verifyJWT = require('../middleware/jwt.auth');

router.post('/enrollStudent', verifyJWT, enroll);
router.get('/enrollById/:id', verifyJWT, getEnrolledStudentByID);
router.get('/students/:id', verifyJWT, studentsInThisCouse);

module.exports = router