import { useState } from 'react';
import Button from '../../Component/Button';
import Input from '../../Component/Input';
import Label from '../../Component/Label';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Toastify from 'toastify-js';

const Login = () => {
    const navigator = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 

    const registerNavigate = () => {
        navigator('/registration');
    }

    const data = {
        "email": email,
        "password": password
    }

    const handle_submit = () => {
        if(email === "" && password === ""){
            alertFail('All fields are required');
        }else{
            axios({
                method: 'POST',
                url: 'http://localhost:5000/auth/login',
                data: data
            }).then(res => {
                localStorage.setItem('token',res.data.token);
                window.location.href="http://localhost:3000/dashboard";
            }).catch(err => {
                alertFail(err.response.data['message']);
            });
        }
        
    }
    return(
        <div className="form-bg">
            <div className="form-box-container">
                <div className='form-box-img'></div>
                <div className='form-box-input-container'>
                    <div className='form-box-content'>
                        <h1>Log In</h1>
                        <form>
                            <Label labelName={'Email'}/>
                            <br/>
                            <Input inputType={"email"}
                                    input={(e) => {setEmail(e.target.value)}}
                                    value={email}/>
                            <br />
                            <Label labelName={'Password'}/>
                            <br/>
                            <Input inputType={"password"}
                                    input={(e)=>{setPassword(e.target.value)}}
                                    value={password}/>
                        </form>
                        <h2 className='link' onClick={registerNavigate}>You don't have an account?</h2>
                        <div className='btn-container'>
                            <Button title={'Log In'} action={handle_submit}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
const alertFail = (message) => {
    Toastify({
        text: message,
        duration: 3000,
        close: false,
        style: {
          background: "red",
          color: 'white',
          textAlign: 'center'
        },
        onClick: function(){}
      }).showToast();
}
export default Login;