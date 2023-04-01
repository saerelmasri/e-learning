
const User = require('../Model/user.model');
const jwt = require('jsonwebtoken');
const { use } = require('../Routes/file.route');

const register = async(req, res) => {
    try{    
        const {first_name, last_name, age, location, email, password, role} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            res.status(409).json({
                message: 'Email Already Exist'
            });
        }
        const user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.age = age;
        user.location = location;
        user.email = email;
        user.password = password;
        user.role = role;
        await user.save();

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
        }, process.env.JWT_SECRET);

        res.status(201).json({
            message: 'User Registered successfully',
            token: token
        });
    }catch(err){
        res.status(500).json({
            message: err
        });
    }  
}

const login = async(req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        //If the email doesn't exist
        if(!user){
            res.status(404).json({
                message: 'Invalid Credentials'
            });
        }
        const isMatch = user.matchPassword(password);
        if(!isMatch){
            res.status(404).json({
                message: 'Invalid Credentials'
            });
        }
        const token = jwt.sign({
            id: user._id,
            email: user.email,
        }, process.env.JWT_SECRET);

        res.status(201).json({
            token
        })
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const getUserByToken = (req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        res.status(201).json({
            message: 'Success',
            response: decode
        })

    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

module.exports = {register, login, getUserByToken}