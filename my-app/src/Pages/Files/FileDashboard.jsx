import NavBar from "../../Component/NavBar";
import File from '../../Component/File'
import './file.css';
const Files = () => {
    return(
        <div className='dashboard-bg'>
            <NavBar/>
            <div className='file-box-container'>
                <div className='file-flexbox-container'>
                    <File file_name={'Intro to Programming Syllabus'}/>
                   
                </div>
            </div>
       </div>
    );
}
export default Files