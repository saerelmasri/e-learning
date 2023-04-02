import NavBar from "../../Component/NavBar";
import CourseEnrolled from "../../Component/EnrolledCourse";
import './enrolled.css'
import axios from "axios";
import { useState, useEffect } from 'react';

const EnrolledCourse = () => {
    const [ response, setResponse ] = useState([]);
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('id');

    const fetchCourses = async() => {
        await axios({
            method:'GET',
            url: `http://localhost:5000/enroll/enrollById/${userID}`,
            headers: {
                'Authorization': token
            }
        }).then(res => {
            const courses = res.data.response.map(enrollment => enrollment.course_id);
            setResponse(courses);
        }).catch(err => {
            console.error(err);
        })
    }

    useEffect(()=>{
        fetchCourses()
    }, []);

    return(
        <div className="dashboard-bg">
            <NavBar/>
            <div className="enrolled-course-box-container">
                <div className="enrolled-course-flexbox-container">
                    {response.map((res) => {
                        return <CourseEnrolled course_code={res.course_code} course_name={res.course_name} course_instructor={res.course_instructor} />

                    })}

                </div>
            </div>
        </div>
    );
}
export default EnrolledCourse