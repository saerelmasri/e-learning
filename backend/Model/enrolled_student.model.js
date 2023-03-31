const mongoose = require('mongoose');

const enrolledStudentSchema = mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const EnrolledStudent = mongoose.model('EnrolledStudents', enrolledStudentSchema);
module.exports = EnrolledStudent;
