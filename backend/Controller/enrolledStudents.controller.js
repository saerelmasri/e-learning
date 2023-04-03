const EnrolledStudent = require('../Model/enrolled_student.model');

const enroll = async (req, res) => {
    try{
        const { course_id, user_id } = req.body;
        const alreadyEnrolled = await EnrolledStudent.findOne({
            course_id: course_id,
            user_id: user_id
        });
        if(alreadyEnrolled){
            return res.status(409).json({
                status: 409,
                message: 'Student already enrolled in this class'
            });
        }

        const enrollToClass = new EnrolledStudent();
        enrollToClass.course_id = course_id;
        enrollToClass.user_id = user_id;
        await enrollToClass.save();

        const enrolledStudents = await EnrolledStudent.find().populate({
            path: 'user_id course_id',
            select: '-password -location -age'
        })

        res.status(201).json({
            status: 201,
            message: 'Student enrolled successfully',
            response: enrolledStudents
        })
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

const getEnrolledStudentByID = async (req, res) => {
    try{
        const { id } = req.params;

        const checkUserID = await EnrolledStudent.findOne({user_id: id});
        if(!checkUserID){
            return res.status(404).json({
                message: 'Student does not exist'
            });
        }

        const enrolledUser_courses = await EnrolledStudent.find({
            user_id: id
        }).populate({
            path: 'user_id course_id',
            select: '-password -location -age'
        });

        if(!enrolledUser_courses){
            return res.status(404).json({
                message: 'No courses found for this student'
            });
        }

        res.status(201).json({
            message: 'Success',
            response: enrolledUser_courses
        });
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

const studentsInThisCouse = async(req, res) => {
    try{
        const { id } = req.params;

        const checkUserID = await EnrolledStudent.findOne({course_id: id});
        if(!checkUserID){
            return res.status(404).json({
                message: 'Student does not exist'
            });
        }

        const enrolledUser_courses = await EnrolledStudent.find({
            course_id: id
        }).populate({
            path: 'user_id',
            select: '-password -location -age'
        });

        if(!enrolledUser_courses){
            return res.status(404).json({
                message: 'No courses found for this student'
            });
        }

        res.status(201).json({
            message: 'Success',
            response: enrolledUser_courses
        });
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
  }

module.exports = { enroll, getEnrolledStudentByID, studentsInThisCouse}