import './RegistrationPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PulseLogo from '../../Images/LogoVector.svg';
import GradCapIcon from '../../Images/grad-cap.svg';
import RegistrationForm from './RegistrationForm';

function RegistrationPage(){
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

                <RegistrationForm />

                <button className='register-page-button'> SIGN UP </button>
                <p>Already Have An Account? <Link to='/login' className='sign-in-link'>Sign in </Link></p>
            </div>
        </div>
    );
}


export default React.memo(RegistrationPage);