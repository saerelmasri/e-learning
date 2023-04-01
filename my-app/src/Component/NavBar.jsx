import Button from '../Component/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigator = useNavigate();

    const discoverNavigate = () => {
        navigator('/dashboard');
    }
    const courseNavigate = () => {
        navigator('/enrolled_courses');
    }
    const filesNavigate = () => {
        navigator('/files');
    }

    const logout = () => {
        localStorage.clear();
        window.location.href="http://localhost:3000/registration"; 
    }
    return(
        <nav>
                <div className='nav-links-container'>
                    <h3 onClick={discoverNavigate}>Discover</h3>
                    <h3 onClick={courseNavigate}>Enrolled Course</h3>
                    <h3 onClick={filesNavigate}>Files</h3>
                </div>
                <div className='nav-btn-continer'>
                    <Button title={'Log Out'} action={logout}/>
                </div>
            </nav>
    );
}
export default NavBar