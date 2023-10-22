const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

dotenv.config({ path: './.env'});
const ingredients = [
  {
      "id": "1",
      "item": "Bacon"
  },
  {
      "id": "2",
      "item": "Eggs"
  },
  {
      "id": "3",
      "item": "Milk"
  },
  {
      "id": "4",
      "item": "Butter"
  }
];
app.get('/ingredients', (req, res) => {
  res.send(ingredients);
})

app.get('/signup', (req, res) => {
  res.send(ingredients);
})

console.log(process.env.DATABASE_HOST);
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PW,
  database: process.env.DATABASE,
})
db.connect()
/* 
DATABASE INFO:
host: 104.62.84.241
port: 54622
username: root
password: StudentPulse420
database: users
*/

//sign up page
app.post('/signup', (req,res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const {name, email, password} = req.body;
  //try doing [...req.body] instead of [name,email,password]
  db.query(sql, [name,email,password], (err, data) => {
    if(err) {
      return res.json("Error");
    }
    return res.json(data);
  })
})

// //login page
app.post('/login', (req,res) => {
  const sql = "SELECT * FROM login WHERE `email` == ? AND `password` = ?";
  const {email, password} = req.body;
  db.query(sql, [email, password], (err, data) => {
    if(err) {
      return res.json("Error");
    }
    if(data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failure");
    }
  })
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