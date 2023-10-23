const db = require("../app");
const bcrypt = require('bcrypt');
const bcrypt_work_factor = process.env.BCRYPT_WORK_FACTOR;

class User{
    //FUNCTION TO SEND ONLY GENERAL INFORMATION ABOUT THE USER BACK TO FRONTEND RATHER THAN INCLUDING PERTINENT INFORMATION LIKE PW
    static makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userType: user.userType,
        }
    }

    //FUNCTION TO LOGIN A USER AFTER AUTHENTICATION CORRECT USERNAME AND PASSWORD
    static async login(credentials)
    {
        //Make sure that request body includes all necessary information: email and password
        //If certain required fields are missing, then send back a bad request error with informaiton of the missing fields
        const requiredFields = ['email', 'password'];
        requiredFields.forEach((field) => {
            if(!credentials?.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request`);
            }
        });

        //Authenticate the user and make sure that the user actually exist within the database (identify by email)
        //If user exists, check to see if given password matches the hashed password in the database
        //If so, return that user information
        const existingUser = await User.fetchUserByEmail(credentials.email);
        if(existingUser)
        {
            const isValid = await bcrypt.compare(credentials.password, existingUser.password);
            if(isValid){
                return User.makePublicUser(existingUser);
            }
        }

        //If user is not found or wrong password/email is given, send back an unauthorization error
        throw new UnauthorizedError('Invalid email and password combination! Try again.')
    }

    //FUNCTION TO REGISTER A USER INTO THE DATABASE GIVEN FIRSTNAME, LASTNAME, EMAIL, PASSWORD, AND USERTYPE
    static async register(credentials)
    {
        //Make sure that request body includes all necessary information: firstName, lastName, password, email, userType
        //If certain required fields are missing, then send back a bad request error with informaiton of the missing fields
        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'userType'];
        requiredFields.forEach((field) => {
            if(!credentials.hasOwnProperty(field))
            {
                throw new BadRequestError(`Missing ${field} in request`)
            }
        })

        //Check to make sure a valid email is being inputted;
        //If the email is missing an @, then throw an error for invalid emails
        if(credentials.email.indexOf('@') <= 0)
        {
            throw new BadRequestError('Invalid Email! Enter a valid email.');
        }

        //Assure that duplicate information does not exist within the database.
        //If an email already exists, then throw a bad request error detailing that a duplicate email was inputted
        const existingUser = await User.fetchUserByEmail(credentials.email);
        if(existingUser)
        {
            throw new BadRequestError(`Duplicate email: ${credentials.email}! Login or register with new email.`);
        }

        //To protect pertinent user infromation, hash the password within the database
        //Lower the given email to ensure that duplicate emails are not inputted
        const hashedPW = await bcrypt.hash(credentials.password, bcrypt_work_factor);
        const lowercaseEmail = credentials.email.toLowerCase();

        //Insert all user information in the database and display the information back to the user including the hashed password
        const results = await db.query(`
            INSERT INTO users(firstName, lastName, email, password, userType)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, firstName, lastName, email, password, userType
        `, [credentials.firstName, credentials.lastName, lowercaseEmail, hashedPw, credentials.userType]);

        const user = results.rows[0];
        return User.makePublicUser(user);
    }

    //FUNCTION TO RETURN AN EXISTING USER BY EMAIL
    static async fetchUserByEmail(email){
        //If no email was provided to check for existing user, throw an error
        if(!email){
            throw new BadRequestError('No email provided! Try again.');
        }

        //Find the matching user email within the database and lowercase it
        const query = 'SELECT * FROM users where email = $1';
        const results = await db.query(query, [email.toLowerCase()]);

        //Return existing user
        const user = results.rows[0];
        return user;
    }
}

module.exports = User;