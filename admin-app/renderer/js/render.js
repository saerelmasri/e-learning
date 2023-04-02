document.addEventListener('DOMContentLoaded', function(e){
})

const adminEmail = document.querySelector('#email');
const adminPassword = document.querySelector('#password');
document.querySelector('#loginAction').onclick = (e) => {
    e.preventDefault();
    if(adminEmail.value === '' || adminPassword.value === ''){
        alertError('Please Provide all required fields');
    }
    fetch('http://localhost:5000/auth/login', {
        method: 'post',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': adminEmail.value,
            'password': adminPassword.value
        })
    }).then((res) => {
        return res.json();
    }).then(data => {
        console.log(data);
        if(data.status === 201){
            alertSuccess("Login Successffully");
            window.localStorage.setItem('token', data['token']);
            window.location.href = 'deashboard.html';
        }else{
            alertError(data['message']);
        }
    }).catch(err => {
        console.error(err);
    });
    
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