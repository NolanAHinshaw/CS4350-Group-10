// IMPORTS ---------------------------------------------------------------------------------------------------------------
import styles from './RegistrationPage.module.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import PulseLogo from '../../Images/LogoVector.svg';
import GradCapIcon from '../../Images/grad-cap.svg';

import SuccessToast from '../../Components/SuccessToast/SuccessToast';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// MAIN REGISTER PAGE FUNCTION -------------------------------------------------------------------------------------------------
function RegistrationPage(){
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [open, setOpen] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        userType: "Student" //default value
    });

    const handleRegisterFormSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerForm);
        await setOpen(true);
        //navigate('/dashboard');
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
        <div className={styles['register-page']}>
            <div className={styles['hero-image']}>
                <div className={styles['hero-text']}>
                    <h2> Boost Your Academic Excellence With Student Pulse </h2>
                    <p> Prioritizing student productivity, collaboration on real-time feedback, and personalized recommendations !</p>
                    <img src={  GradCapIcon } alt='Graduation Cap Icon'/>
                </div>
            </div>

            <div className={styles['register-page-content']}>
                <img src={ PulseLogo } alt='Student Pulse Logo' className={styles['logo-vector']}></img>
                <h1>Create Your Account</h1>

                <RegistrationForm registerForm = {registerForm} setRegisterForm = {setRegisterForm} error = {error} setError = {setError} handleFormSubmit={handleRegisterFormSubmit}/>
                {error && <p className={styles['error-text']}>{error.form}</p>}
                <p>Already Have An Account? <Link to='/login' className='sign-in-link'> Login </Link></p>
            </div>

            <SuccessToast open={open} setOpen={setOpen} message='Woohoo, You have successfully registered!'/>
        </div>
    );
}


export default React.memo(RegistrationPage);