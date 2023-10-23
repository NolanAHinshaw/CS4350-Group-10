const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql');
require('dotenv').config();

//DATABASE CONNECTION -----------------------------------
//Create Database Connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE,
});
//Connect to DB
db.connect((error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("My SQL Connected ....")
    }
})


//HTTP REQUEST ROUTES - APP USE -------------------------------------
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))
//APP USE - All authorization/registration routes including login, register, and me
const authRoutes = require('./Routes/auth');
app.use("/auth", authRoutes)


//SERVER LISTENER / HEALTH CHECK ----------------------------- 
app.listen('3001', () => {
    console.log('🚀 Server listening on port ' + process.env.PORT);
});

//Server Health Check
app.get('/', async(req,res,next) => {
    res.status(200).json({"ping":"pong"})
})

module.exports = db;