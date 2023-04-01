
import NavBar from '../../Component/NavBar';
import Course from '../../Component/Course';
import './dashboard.css'
const Dashboard = () => {
    const hello = () => {
        console.log('Hello');
    }
    return(
       <div className='dashboard-bg'>
            <NavBar/>
            <div className='course-box-container'>
                <div className='course-flexbox-container'>
                    <Course course_code={'CSI 201'} course_title={'Intro to Programming'} course_instructor={'Charbel Boustany'} action={hello}/>
                </div>
            </div>
       </div>
    );
}
export default Dashboard