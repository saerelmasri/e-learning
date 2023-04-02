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
            status: 201,
            message: 'File Added Successfully'
        });
    }catch(err){
        res.status(500).json({
            status: 500,
            message: 'Server Error'
        });
    }
}

const removeFile = async (req, res) => {
    try{
        const { id } = req.params;
        await File.findByIdAndDelete(id);
        res.status(201).json({
            message: 'File Deleted Successfully'
        });
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

const listOfFiles = async(req, res) => {
    try{
        const files = await File.find();
        if(files.length === 0){
            return res.status(404).json({
                status: 404,
                message: 'Not files found'
            });
        }
        res.status(201).json({
            status: 201,
            message: 'Success',
            response: files
        });
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        })
    }
}
const getFileByID = async(req, res) => {
    try{
        const { id } = req.params;
        const file = await File.findById({_id: id});
        if(!file){
            return res.status(404).json({
                status: 404,
                message: 'File does not exist'
            });
        }
        res.status(201).json({
            status: 201,
            message: 'Success',
            response: file
        });
    }catch(err){
        console.error(err);
    }
}

module.exports = { addFile, removeFile, listOfFiles, getFileByID }