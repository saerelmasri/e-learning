import axios from "axios";
const token = localStorage.getItem('token');


const Course = ({ id, course_code, course_title, course_instructor }) => {
    console.log(id);
    const enrollUser = async() => {
        console.log(localStorage.getItem('id'));
        const data = {
            "course_id":id,
            "user_id": localStorage.getItem('id')
        }
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/enroll/enrollStudent',
            data: data,
            headers:{
                'Authorization': token
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err.response.data);
        }); 
    }
    return(
        <div className='course-component'>
            <div className='course-component-text-box'>
                <h1>{course_code}</h1>
                <h2>{course_title}</h2>
                <h2>{course_instructor}</h2>
            </div>
            <div className='course-component-btn-box'>
                <button className='enroll-btn' onClick={enrollUser}>Enroll Course</button>
            </div>
        </div>
    );
}
export default Course