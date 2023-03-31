const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  course_code: {
    type: String,
    required: true
  },
  course_name: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    require: true
  }
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
