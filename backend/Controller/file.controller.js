const File = require('../Model/file.model');

const addFile = async(req, res) => {
    try{
        const { file_name } = req.body
        const newFile = new File();
        newFile.file_name = file_name;
        if(req.file){
            newFile.file_content = req.file.path
        }
        await newFile.save();
        res.status(201).json({
            message: 'File Added Successfully'
        });
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

module.exports = addFile