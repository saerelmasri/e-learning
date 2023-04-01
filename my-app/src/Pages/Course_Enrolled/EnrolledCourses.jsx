import NavBar from "../../Component/NavBar";
import CourseEnrolled from "../../Component/EnrolledCourse";
import './enrolled.css'

const EnrolledCourse = () => {
    return(
        <div className="dashboard-bg">
            <NavBar/>
            <div className="enrolled-course-box-container">
                <div className="enrolled-course-flexbox-container">
                    <CourseEnrolled course_code={'CSI 201'} course_name={'Intro to Programming'} course_instructor={'Charbel Boustany'} />
                </div>
            </div>
        </div>
    );
}
export default EnrolledCourse