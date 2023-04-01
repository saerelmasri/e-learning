const Course = ({course_code, course_title, course_instructor, action}) => {
    return(
        <div className='course-component'>
            <div className='course-component-text-box'>
                <h1>{course_code}</h1>
                <h2>{course_title}</h2>
                <h2>{course_instructor}</h2>
            </div>
            <div className='course-component-btn-box'>
                <button className='enroll-btn' onClick={action}>Enroll Course</button>
            </div>
        </div>
    );
}
export default Course