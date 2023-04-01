    import { useState } from 'react';
    import Button from '../../Component/Button';
    import Input from '../../Component/Input';
    import Label from '../../Component/Label';
    import {useNavigate} from 'react-router-dom';
    import axios from 'axios';

    const Register = () => {
        localStorage.clear();
        const [firstName, setFirstName ]= useState('');
        const [lastName, setLastName ]= useState('');
        const [age, setAge ]= useState('');
        const [location, setLocation ]= useState('');
        const [email, setEmail ]= useState('');
        const [password, setPassword ]= useState('');
        const [confirmPassword, setConfirmPassword ]= useState('');
        const navigator = useNavigate();
        const loginNavigate = () => {
            navigator('/login');
        }

        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "age": age,
            "location": location,
            "email": email,
            "password": password,
        }

        const handle_submit = () => {

            if(firstName === "" && lastName === "" && age === "" && location === "" && email === "" && password === "" && confirmPassword === ""){
                console.log('All fields are required');
            }else{
                if(password !== confirmPassword){
                    console.log('Passwords do not match');
                }else{
                    
                    axios({
                        method: 'post',
                        url: 'http://localhost:5000/auth/register',
                        data: data
                    }).then(res => {
                        localStorage.setItem('token',res.data.token);
                        window.location.href="http://localhost:3000/dashboard"; 
                    }).catch(err => {
                        console.error('Error: ', err);
                    });
                }
            }
        }

        return(
            <div className="form-bg">
                <div className="form-box-container">
                    <div className='form-box-img'></div>
                    <div className='form-box-input-container'>
                        <div className='form-box-content'>
                            <h1>Register</h1>
                            <form>
                                <Label labelName={'First Name'}/>
                                <br/>
                                <Input inputType={"text"} 
                                        input={(e) => {setFirstName(e.target.value)}} 
                                        value={firstName}/>
                                <br />
                                <Label labelName={'Last Name'}/>
                                <br/>
                                <Input inputType={"text"} 
                                        input={(e) => {setLastName(e.target.value)}} 
                                        value={lastName}/>
                                <br />
                                <Label labelName={'Age'}/>
                                <br/>
                                <Input inputType={"number"}
                                        input={(e) => {setAge(e.target.value)}} 
                                        value={age}/>
                                <br />
                                <Label labelName={'Location'}/>
                                <br/>
                                <Input inputType={"text"}
                                        input={(e) => {setLocation(e.target.value)}} 
                                        value={location}/>
                                <br />
                                <Label labelName={'Email'}/>
                                <br/>
                                <Input inputType={"email"}
                                        input={(e) => {setEmail(e.target.value)}} 
                                        value={email}/>
                                <br />
                                <Label labelName={'Password'}/>
                                <br/>
                                <Input inputType={"password"}
                                        input={(e) => {setPassword(e.target.value)}} 
                                        value={password}/>
                                <br />
                                <Label labelName={'Confirm Password'}/>
                                <br/>
                                <Input inputType={"password"}
                                        input={(e) => {setConfirmPassword(e.target.value)}} 
                                        value={confirmPassword}/> 
                            </form>
                            <h2 className='link' onClick={loginNavigate}>You already have an account?</h2>
                            <div className='btn-container'>
                                <Button title={'Register'} action={handle_submit}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
    export default Register;