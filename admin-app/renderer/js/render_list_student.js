
const JWT_TOKEN = window.localStorage.getItem('token');
const COURSE_ID = window.localStorage.getItem('course_id');

const fetchStudents = async() => {
    await fetch(`http://localhost:5000/enroll/students/${COURSE_ID}`,{
        method: 'GET', 
        headers: {
            'Authorization': JWT_TOKEN,
            Accept: 'application.json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        //console.log(data['response'][0]['user_id']['first_name']);
        const users = data['response'];
        users.forEach(user => {
            const user_obj = user['user_id'];
            const markup = `<div class="student-component">
                <h2>${user_obj['first_name']}</h2>
                <h2>${user_obj['last_name']}</h2>
                <h2>${user_obj.email}</h2>
                </div>`
            const element = document.createRange().createContextualFragment(markup);
            document.querySelector(".container-courses-students").appendChild(element);
        });
    })
}
fetchStudents();

document.querySelector('#addCourse').onclick = () => {
    window.location.href = 'deashboard.html';
    window.localStorage.removeItem('course_id');
}
document.querySelector('#listClass').onclick = () => {
    window.location.href = 'list_courses.html';
    window.localStorage.removeItem('course_id');
}
document.querySelector('#returnAction').onclick = () => {
    window.location.href = 'list_courses.html';
    window.localStorage.removeItem('course_id');
}
document.querySelector('#addFile').onclick = () => {
    window.location.href = 'files.html';
    window.localStorage.removeItem('course_id');
}
