// IMPORTS ---------------------------------------------------------------------------------------------------------------
import './RegistrationPage.css';
import React from 'react';
import axios from 'axios';
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

    const handleRegisterFormSubmit = async () => {
        console.log(registerForm);
        /*
        REGISTRATION FUNCTIONALITY : 
        const {data, error} = await axios.post('http://localhost:3001/auth/register', registerForm);
        if(data){
            console.log(data);
            setError((error) => ({...error, form: null}))
        }
        if(error){
            setError((error) => ({...error, form: error}));
        }*/
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
                {error && <p className='error-text'>{error.form}</p>}
                <button className='register-page-button' onClick={handleRegisterFormSubmit}> SIGN UP </button>
                <p>Already Have An Account? <Link to='/login' className='sign-in-link'> Login </Link></p>
            </div>
        </div>
    );
}


export default React.memo(RegistrationPage);