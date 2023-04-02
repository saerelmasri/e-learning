const course_code = document.querySelector('#courseCode');
const course_name = document.querySelector('#courseName');
const instructor = document.querySelector('#courseInstructor');
//const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjk5ODU1NzJhNDhjZTdmNDNiMjAzZiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjgwNDY1Njk0fQ.f6szTgqWb3UbFtEmUIPMW8T4ZVJQSRlVOQhfWH3PpcY';
const JWT_TOKEN =window.localStorage.getItem('token');

document.querySelector('#addCourseAction').onclick = (e) => {
    e.preventDefault();
    if(course_code.value === '' || course_name.value === '' || instructor.value === ''){
        alertError('Please provide all the required fields');
    } else {
        const body = JSON.stringify({
            "course_code": course_code.value,
            "course_name": course_name.value,
            "instructor": instructor.value
        });
        console.log(body);
        fetch('http://localhost:5000/course/addCourse', {
            method: 'post',
            headers: {
                'Authorization': JWT_TOKEN,
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: body
        })
        .then((res) => {
            return res.json();
        }).then(data => {
            console.log(data);
            const status = data['status'];
            if(status === 201){
                alertSuccess(data['message']);
            }else{
                alertError(data['message']);
            }
        }).catch(err => {
            console.error(err);
        });
    }
}
const alertError = (message) => {
    Toastify.showToast({
        text: message,
        duration: 5000,
        close: false,
        style: {
          background: 'red',
          color: 'white',
          textAlign: 'center'
        }
    });
}
const alertSuccess = (message) => {
    console.log(message);
    Toastify.showToast({
        text: message,
        duration: 5000,
        close: false,
        style: {
          background: 'green',
          color: 'white',
          textAlign: 'center'
        }
    });
}

document.querySelector('#addCourse').onclick = () => {
    window.location.href = 'deashboard.html';
}
document.querySelector('#listClass').onclick = () => {
    window.location.href = 'list_courses.html';
}
document.querySelector('#addFile').onclick = () => {
    window.location.href = 'deashboard.html';
}