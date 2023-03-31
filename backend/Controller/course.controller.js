const Course = require('../Model/course.model');

const addCourse = async(req, res) => {
    try{
        const { course_code, course_name, instructor } = req.body;
        const newCourse = new Course();
        newCourse.course_code = course_code;
        newCourse.course_name = course_name;
        newCourse.instructor = instructor;
        
        const existingCourse = await Course.findOne({course_code});

        if(existingCourse){
            res.status(409).json({
                message: 'Course Already Exist'
            });
        }
        await newCourse.save();
        res.status(201).json({
            message: 'Course saved'
        });
    }catch(err){
        console.log(err);
    }
}

const allCourse = async (req, res) => {
    try {
      const allCourses = await Course.find();
      res.status(200).json({
        message: 'Success',
        courses: allCourses,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Server Error',
      });
    }
};
module.exports = { addCourse, allCourse}