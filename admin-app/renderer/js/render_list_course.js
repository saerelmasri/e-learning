const JWT_TOKEN = window.localStorage.getItem('token');

const fetchCourses = async() => {
    await fetch('http://localhost:5000/course/allCourses', {
        method: 'get',
        headers: {
            'Authorization': JWT_TOKEN,
            Accept: 'application.json',
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        return res.json();
    }).then(data => {
        const courses = data['courses'];
        courses.forEach(course => {
            const markup = `<div class="class-component">
                <h1>${course['course_name']}</h1>
                <button class="class-btn" data-id="${course['_id'] }">View Class</button>
            </div>`
            const element = document.createRange().createContextualFragment(markup);
            document.querySelector(".container-courses").appendChild(element);
        });
        const view_students = document.querySelectorAll(".class-btn");
        view_students.forEach((btn) => {
            btn.addEventListener("click", () => {
                const courseID = btn.getAttribute("data-id");
                window.localStorage.setItem('course_id',courseID);
                window.location.href = 'details.html';
            });
        });
    }).catch(err => {
        console.error(err);
    });
}

fetchCourses();

document.querySelector('#addCourse').onclick = () => {
    window.location.href = 'deashboard.html';
}
document.querySelector('#listClass').onclick = () => {
    window.location.href = 'list_courses.html';
}
document.querySelector('#addFile').onclick = () => {
    window.location.href = 'files.html';
}