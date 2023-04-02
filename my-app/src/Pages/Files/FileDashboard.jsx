import NavBar from "../../Component/NavBar";
import File from '../../Component/File'
import './file.css';
import { useEffect, useState } from "react";
import axios from "axios";
const Files = () => {
    const token = localStorage.getItem('token');
    const [ response, setResponse ] = useState([]);

    const fetchFiles = async() => {
        await axios({
            method: 'GET',
            url: 'http://localhost:5000/file/list',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            setResponse(res.data.response);
            // console.log(res.data.response);
        }).catch(err => {
            console.error(err);
        });
    }

    useEffect(()=> {
        fetchFiles();
    }, []);
    return(
        <div className='dashboard-bg'>
            <NavBar/>
            <div className='file-box-container'>
                <div className='file-flexbox-container'>
                    {response.map((res)=> {
                        return <File file_name={res.file_name} url={res.file_content}/>
                    })}
                   
                </div>
            </div>
       </div>
    );
}
export default Files