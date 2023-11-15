const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});
const app = express();
const bcrypt = require('bcrypt-nodejs');
const port = 8000;
const queryDataRouter = require("./routes/query-data");

const router = express.Router()
const User = require('./services/userModels')

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/query-data", queryDataRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/home", (req, res) => {
  res.send({ message: "ok" });
});

app.get("/register", (req, res) => {
  res.send("register");
});

app.get("/signin", (req, res) => {
  res.send("signin");
});

//routes: 
/* 
  - signin and register
  - course with id (showing feedback/information for courses)
*/

// route: delete specific course (based on id inputted) --> should only be allowed to do based on role 
// (Student = shouldnt be able to delete; Professor = should be able to delete)
app.get("/course/:id/delete", (req, res) => {
  const {id} = req.params;
  res.send(`this is ${id} delete page`);
});

// route: specific course (based on id inputted)
app.get("/course/:id", (req, res) => {
  const {id} = req.params;
  res.send(`this is course: ${id} view page`);
});

// route: delete user profile (based on id inputted -> should only be able to delete your own profile)
app.get("/userprofile/:id/delete", (req, res) => {
  const {id} = req.params;
  res.send(`this is user profile: ${id} delete page`);
});

// route: edit user profile (based on id inputted)
app.patch("/userprofile/:id/edit", (req, res) => {
  const {id} = req.params;
  const {username, password} = req.body;
  res.json(`this is user profile: ${id} with username: ${username} & password: ${password} edit page`);
});

// route: view user profile (based on id inputted)
app.get("/userprofile/:id", (req, res) => {
  const {id} = req.params;
  res.send(`this is user profile: ${id} view page`);
});

// route: edit user feedback (based on id inputted using PATCH)
app.patch("/userfeedback/:id/edit", (req, res) => {
  const {id} = req.params;
  const {description, courseID} = req.body;
  res.send(`this is user feedback: ${id} with description: ${description} & courseID: ${courseID} edit page`);
});

// route: delete user feedback (based on id inputted)
app.get("/userfeedback/:id/delete", (req, res) => {
  const {id} = req.params;
  res.send(`this is user feedback: ${id} delete page`);
});

// route: view course feedback (based on id inputted)
app.get("/userfeedback/:id", (req, res) => {
  const {id} = req.params;
  res.send(`this is user feedback: ${id} view page`);
});


// route: user registration info (from form data -> frontend)
app.post("/register", async(req, res) => {
  try{
    const user = await User.register(req.body)
    return res.status(201).json({user: user})
  }
  catch(error){
    console.error(error)
    //next(error)
  }
  /*const {email, firstName, lastName} = req.body;

  if(!firstName || !lastName || !email) {
    return res.status(400).json("first name, last name, and email are incorrect");
  }
  else { 
    return res.status(200).json({email, firstName, lastName});
  }*/

  //Request will take in id, firstname, lastname, email, username, and password

  //Return the user when authenticated
});

// route: sign in
app.post("/signin", async(req, res) => {

  try{
    const user = await User.login(req.body)
    return res.status(201).json({user: user})
  }
  catch(error){
    console.error(error)
    //next(error)
  }
  
  // const {username, password} = req.body;

  // if(!username || !password) {
  //   return res.status(400).json("Username and password incorrect");
  // }
  // else { 
  //   return res.status(200).json({username, password});
  // }
});

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

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// db.end();