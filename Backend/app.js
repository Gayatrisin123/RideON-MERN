const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors'); 
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res) =>{
    res.send('hello world');
});
app.use('users', userRoutes);
module.exports = app;