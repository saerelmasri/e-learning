import NavBar from "../../Component/NavBar";
import CourseEnrolled from "../../Component/EnrolledCourse";
import './enrolled.css'
import axios from "axios";

const EnrolledCourse = () => {
    //const [ response, setResponse ] = useState([]);
    const token = localStorage.getItem('token');


    const fetchCourses = async() => {
        await axios({
            method:'GET',
            url: 'http://localhost:5000/enroll/enrollById/',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            //console.log(res.response['id']);
            //setResponse(res.data.courses)
        }).catch(err => {
            console.error(err);
        })
    }

    // useEffect(()=>{
    //     fetchCourses()
    // }, []);

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