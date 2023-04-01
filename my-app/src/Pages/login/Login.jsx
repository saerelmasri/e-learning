import Button from '../../Component/Button';
import Input from '../../Component/Input';
import Label from '../../Component/Label';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigator = useNavigate();

    const registerNavigate = () => {
        navigator('/registration');
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
                            <Input inputType={"email"}/>
                            <br />
                            <Label labelName={'Password'}/>
                            <br/>
                            <Input inputType={"password"}/>
                        </form>
                        <a href="#" className='already-account' onClick={registerNavigate}>You don't have an account?</a>
                        <div className='btn-container'>
                            <Button title={'Log In'}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Login;