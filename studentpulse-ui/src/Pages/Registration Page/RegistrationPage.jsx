import './RegistrationPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../Images/registration-hero.png';
import PulseLogo from '../../Images/LogoVector.svg';

function RegistrationPage(){
    return(
        <div className='register-page'>
            <div className='hero-image'>
              {/* <img src={ heroImage } alt='Registration Page Hero'/> */}
              <h2></h2>
            </div>

            <div className='register-page-content'>
                <img src={ PulseLogo } alt='Student Pulse Logo' className='logo-vector'></img>
                <h1>Create Your Account</h1>
                <p>Add some kind of call to action message</p>

                <form action='' className='register-form'>
                    <div className='name-field'>
                        <div className='input-field-section'>
                            <label>First Name</label>
                            <input type='name' placeholder='Enter first name' required/>
                        </div>
                        <div className='input-field-section'>
                            <label>Last Name</label>
                            <input type='name' placeholder='Enter last name' required/>
                        </div>
                    </div>
                    <div className='input-field-section'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter email' required/>
                    </div>
                    <div className='input-field-section'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' required/>
                    </div>
                    <div className='input-field-section'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Enter password again' required/>
                    </div>
                </form>


                <button className='register-page-button'> SIGN UP </button>
                <p>Already Have An Account? <Link to='/login' className='sign-in-link'>Sign in </Link></p>
            </div>
        </div>
    );
}


export default React.memo(RegistrationPage);