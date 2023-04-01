import Button from '../../Component/Button';
import Input from '../../Component/Input';
import Label from '../../Component/Label';
import './register.css'

const Register = () => {
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
                            <Input inputType={"text"}/>
                            <br />
                            <Label labelName={'Last Name'}/>
                            <br/>
                            <Input inputType={"text"}/>
                            <br />
                            <Label labelName={'Age'}/>
                            <br/>
                            <Input inputType={"number"}/>
                            <br />
                            <Label labelName={'Location'}/>
                            <br/>
                            <Input inputType={"text"}/>
                            <br />
                            <Label labelName={'Email'}/>
                            <br/>
                            <Input inputType={"email"}/>
                            <br />
                            <Label labelName={'Password'}/>
                            <br/>
                            <Input inputType={"password"}/>
                            <br />
                            <Label labelName={'Confirm Password'}/>
                            <br/>
                            <Input inputType={"password"}/> 
                        </form>
                        <a href="#" className='already-account'>You already have an account?</a>
                        <div className='btn-container'>
                            <Button title={'Register'}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Register;