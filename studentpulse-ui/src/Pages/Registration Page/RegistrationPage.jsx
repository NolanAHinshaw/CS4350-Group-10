// IMPORTS ---------------------------------------------------------------------------------------------------------------
import './RegistrationPage.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import PulseLogo from '../../Images/LogoVector.svg';
import GradCapIcon from '../../Images/grad-cap.svg';


// MAIN REGISTER PAGE FUNCTION -------------------------------------------------------------------------------------------------
function RegistrationPage(){
    const [error, setError] = useState({});
    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        userType: "Student" //default value
    });

    const handleRegisterFormSubmit = () => {
        console.log(registerForm)
        //place registration functionality here
    };

    return(
        <div className='register-page'>
            <div className='hero-image'>
                <div className='hero-text'>
                    <h2> Boost Your Academic Excellence With Student Pulse </h2>
                    <p> Prioritizing student productivity, collaboration on real-time feedback, and personalized recommendations !</p>
                    <img src={  GradCapIcon } alt='Graduation Cap Icon'/>
                </div>
            </div>

            <div className='register-page-content'>
                <img src={ PulseLogo } alt='Student Pulse Logo' className='logo-vector'></img>
                <h1>Create Your Account</h1>

                <RegistrationForm registerForm = {registerForm} setRegisterForm = {setRegisterForm} error = {error} setError = {setError}/>
        
                <button className='register-page-button' onClick={handleRegisterFormSubmit}> SIGN UP </button>
                <p>Already Have An Account? <Link to='/login' className='sign-in-link'> Login </Link></p>
            </div>
        </div>
    );
}


export default React.memo(RegistrationPage);