const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen((process.env.PORT), (err)=>{
    console.log('Listening in port', process.env.PORT);
    require('./config/db.connection');
});
