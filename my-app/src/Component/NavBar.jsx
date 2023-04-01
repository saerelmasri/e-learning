import Button from '../Component/Button';
const NavBar = () => {
    return(
        <nav>
                <div className='nav-links-container'>
                    <h3>Discover</h3>
                    <h3>Enrolled Course</h3>
                    <h3>Files</h3>
                </div>
                <div className='nav-btn-continer'>
                    <Button title={'Log Out'}/>
                </div>
            </nav>
    );
}
export default NavBar