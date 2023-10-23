const express = require("express")
const router = express.Router()
const User = require("../models/user")

//POST REQUEST TO LOG A USER INTO THEIR ACCOUNT
router.post("/login", async (req,res,next) => {
    try
    {
        //Request will take in an username and password
        const user = await User.login(req.body)

        //Return the user when authenticated
        return res.status(200).json({user})
    } 
    catch(error)
    {
        next(error)
    }
})


//POST REQUEST TO REGISTER A USER TO THE DATABASE
router.post("/register", async (req,res,next) => {
    try
    {
        //Request will take in firstname, lastname, email, password, password confirmation, and user type
        const user = await User.register(req.body)

        //Return the user when authenticated
        return res.status(201).json({user})
    } 
    catch(error)
    {
        next(error)
    }
})

module.exports = router;