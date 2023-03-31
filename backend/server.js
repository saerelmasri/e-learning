const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

const authRoute = require('./Routes/auth.route');
app.use('/auth', authRoute);

const courseRoute = require('./Routes/course.route');
app.use('/course', courseRoute);

const enrollRoute = require('./Routes/enrollStudent.route');
app.use('/enroll', enrollRoute);

app.listen((process.env.PORT), (err)=>{
    console.log('Listening in port', process.env.PORT);
    require('./config/db.connection');
});
