
const CourseEnrolled = ({course_code, course_name, course_instructor, action}) => {
    return(
        <div className="enrolled-course-component">
            <div className="enrolled-course-text-box">
                <h1>{course_code}</h1>
                <h2>{course_name}</h2>
                <h2>{course_instructor}</h2>
            </div>
            <div className="enrolled-course-btn-box">
                <button onClick={action}>Drop Course</button>
            </div>
        </div>
    );
}
export default CourseEnrolled