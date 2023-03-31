const { Router } = require('express');
const router = Router();
const {addCourse, allCourse } = require('../Controller/course.controller');
const verifyJWT = require('../middleware/jwt.auth');

router.post('/addCourse', verifyJWT, addCourse);
router.get('/allCourses', verifyJWT, allCourse);

module.exports = router