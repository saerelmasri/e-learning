const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const cors = require('cors');
app.use(cors());

const authRoute = require('./Routes/auth.route');
app.use('/auth', authRoute);

const courseRoute = require('./Routes/course.route');
app.use('/course', courseRoute);

const enrollRoute = require('./Routes/enrollStudent.route');
app.use('/enroll', enrollRoute);

const fileRoute = require('./Routes/file.route');
app.use('/file', fileRoute);

app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }

    next();
});

app.listen((process.env.PORT), (err)=>{
    console.log('Listening in port', process.env.PORT);
    require('./config/db.connection');
});
