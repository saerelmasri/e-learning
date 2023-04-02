const fileName = document.querySelector('#fileName');
const fileContent = document.querySelector('#fileContent');
const JWT_TOKEN = window.localStorage.getItem('token');

document.querySelector('#addFileAction').onclick = () => {
    if(fileName.value === '' || fileContent.value === ''){
        alertError('All fields are required');
    }

    const selectedFiles = [...fileContent.files];

    const reader = new FileReader();
    reader.readAsText(selectedFiles[0]);

    reader.onload = () => {
        const content = reader.result;
        const jsonData = JSON.stringify({
            "file_name": fileName.value,
            "content": content
        });

        fetch('http://localhost:5000/file/addFile',{
            method: 'POST',
            headers: {
                'Authorization': JWT_TOKEN,
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: jsonData
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        });
    };
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
    window.location.href = 'files.html';
}
document.querySelector('#logoutAction').onclick = () => {
    window.localStorage.clear();
    window.location.href = 'index.html';
}
