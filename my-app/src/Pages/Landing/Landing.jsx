
import { useNavigate } from 'react-router-dom';
import './landing.css'

const Landing = () => {
    const navigator = useNavigate();
    const redirect = () => {
        navigator('/login');
    }
    return(
        <div className="header-container-landing">
            <div className='header-img-landing'>
                <div className='header-text'>
                    <h1>Boost your knownleadge today!</h1>
                    <p>What are you waiting for? Join us free today and start learning!</p>
                </div>
                <div className='header-landing-button-container'>
                    <button className='header-btn' onClick={redirect}> Join Us!</button>
                </div>
            </div>

        </div>
    );
}
export default Landing