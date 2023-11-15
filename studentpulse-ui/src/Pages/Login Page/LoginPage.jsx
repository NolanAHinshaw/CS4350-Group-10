// IMPORTS ---------------------------------------------------------------------------------------------------------------
import './LoginPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import PulseLogo from '../../Images/LogoVector.svg';
import GradCapIcon from '../../Images/grad-cap.svg';


// MAIN REGISTER PAGE FUNCTION -------------------------------------------------------------------------------------------------
function LoginPage({user, setUser}){

    return(
        <div className='login-page'>
            <div className='hero-image'>
                <div className='hero-text'>
                    <h2> Boost Your Academic Excellence With Student Pulse </h2>
                    <p> Prioritizing student productivity, collaboration on real-time feedback, and personalized recommendations !</p>
                    <img src={  GradCapIcon } alt='Graduation Cap Icon'/>
                </div>
            </div>

            <div className='login-page-content'>
                <img src={ PulseLogo } alt='Student Pulse Logo' className='logo-vector'></img>
                <h1>Welcome Back!</h1>
                <h4>Login</h4>

                <LoginForm user={user} setUser={setUser}/>

                <p><Link to='/forgotpassword' className='sign-in-link'> Forgot Password? </Link></p>
            </div>
        </div>
    );
}


export default React.memo(LoginPage);


