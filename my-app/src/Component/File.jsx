const File = ({file_name, url}) => {
    const viewFile = () => {
        window.location.href= `http://localhost:5000/${url}`; 
    }

    const downloadFile = (file) => {
        const blob = new Blob([file], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = file_name;
        link.href = url;
        link.click();
    }
    return(
        <div className='file-component'>
            <div className='file-component-text-box'>
                <h1>{file_name}</h1>
            </div>
            <div className='file-component-btn-box'>
                <button className='file-btn' onClick={viewFile}>View File</button>
                <button className='file-btn' onClick={() => downloadFile(`http://localhost:5000/${url}`)}>Download File</button>
            </div>
        </div>
    );
}
export default File