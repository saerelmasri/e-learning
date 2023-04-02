
import NavBar from '../../Component/NavBar';
import Course from '../../Component/Course';
import './dashboard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [ response, setResponse ] = useState([]);
    const token = localStorage.getItem('token');


    const fetchCourses = async() => {
        await axios({
            method:'GET',
            url: 'http://localhost:5000/course/allCourses',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            setResponse(res.data.courses)
            console.log(res.data.courses);
        }).catch(err => {
            console.error(err);
        })
    }
    const getId = async() => {
        await axios({
            method:'GET',
            url: 'http://localhost:5000/auth/getByToken',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            localStorage.setItem('id',res.data.response['id']);
        }).catch(err => {
            console.error(err);
        })
    }
    getId();

    useEffect(()=>{
        fetchCourses()
    }, []);

    return(
       <div className='dashboard-bg'>
            <NavBar/>
            <div className='course-box-container'>
                <div className='course-flexbox-container'>
                    {response.map((res) => {
                        return <Course id={res._id} course_code={res.course_code} course_title={res.course_name} course_instructor={res.instructor}/>
                    })}
                </div>
            </div>
       </div>
    );
}
export default Dashboard