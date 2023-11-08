const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = 3306;
const queryDataRouter = require("./routes/query-data");

// const login = require('./studentpulse-ui/src/Pages/Login Page/LoginPage');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "ok" });
});

app.use("/query-data", queryDataRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
// dotenv.config({ path: './.env'});

// const db = mysql.createConnection({
//   // host: process.env.DATABASE_HOST,
//   // port: process.env.DATABASE_PORT,
//   // username: process.env.DATABASE_USER,
//   // password: process.env.DATABASE_PW,
//   // database: process.env.DATABASE,
//   host: '104.62.84.241',
//   username: 'root',
//   password: 'StudentPulse420',
//   database: 'users',
// })
// db.connect()

// //sign up page
// app.post('/register', (req,res) => {
//   const sql = "INSERT INTO login (`id`,`firstname`,`lastname`, `email`, `password`) VALUES (?)";
//   const {id, firstname, lastname, email, password} = req.body;
//   //try doing [...req.body] instead of [name,email,password]
//   db.query(sql, [id, firstname,lastname, email, password], (err, data) => {
//     if(err) {
//       return res.json("Error");
//     }
//     return res.json(data);
//   })
// })

// // //login page
// app.post('/login', (req,res) => {
//   const sql = "SELECT * FROM login WHERE `username` == ? AND `password` = ?";
//   const {username, password} = req.body;
//   db.query(sql, [username, password], (err, data) => {
//     if(err) {
//       return res.json("Error");
//     }
//     if(data.length > 0) {
//       return res.json("Success");
//     } else {
//       return res.json("Failure");
//     }
//   })
// })

app.get('/register', (req, res) => {
  res.send('register'); ///Users/runitsnolan/Documents/CS4350-Group-10/studentpulse-ui/src/Pages/Login Page/LoginPage.jsx
})


app.get('/login', (req, res) => {
  res.send(login);
})

// routing for login pages and others should look like so: 
// (after routing we should look to redirect the data for POST)
// app.get('/login', (req, res) => {
// const {user, pass} = req.params -> get params from request in order to use
//   res.render(
//     <Login/>
//     )
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// db.end();