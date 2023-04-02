
const File = ({file_name, content}) => {
    const viewFile = () => {
        window.open(`http://localhost:5000/${content}`, '_blank');
    }

    const downloadPdf = () => {
        const blob = new Blob([content], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', file_name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <div className='file-component'>
            <div className='file-component-text-box'>
                <h1>{file_name}</h1>
            </div>
            <div className='file-component-btn-box'>
                <button className='file-btn' onClick={viewFile}>View File</button>
                <button className='file-btn' onClick={downloadPdf}>Download File</button>
            </div>
        </div>
    );
}
export default File