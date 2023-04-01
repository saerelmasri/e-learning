const File = ({file_name, actionView, actionDownload}) => {
    return(
        <div className='file-component'>
            <div className='file-component-text-box'>
                <h1>{file_name}</h1>
            </div>
            <div className='file-component-btn-box'>
                <button className='file-btn' onClick={actionView}>View File</button>
                <button className='file-btn' onClick={actionDownload}>Download File</button>
            </div>
        </div>
    );
}
export default File