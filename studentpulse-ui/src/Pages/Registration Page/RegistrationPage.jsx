import './RegistrationPage.css';
import { Link } from 'react-router-dom';
import heroImage from '../../Images/registration-hero.png';
import PulseLogo from '../../Images/StudentPulseLogo.svg';

export default function RegistrationPage(){
    return(
        <div className='register-page'>
            <div className='hero-image'>
                <img src={ heroImage } alt='Registration Page Hero'/>
            </div>


            <div className='register-page-content'>
                <img src={ PulseLogo } alt='Student Pulse Logo'></img>
                <h1>Create Your Account</h1>

                <form action='' className='register-form'>
                    <div className='name-field'>
                        <div className='input-field-section'>
                            <label>First Name</label>
                            <input type='name' placeholder='Enter first name' />
                        </div>
                        <div className='input-field-section'>
                            <label>Last Name</label>
                            <input type='name' placeholder='Enter last name' />
                        </div>
                    </div>
                    <div className='input-field-section'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter email'/>
                    </div>
                    <div className='input-field-section'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' />
                    </div>
                    <div className='input-field-section'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Enter password again' />
                    </div>
                </form>

                <button className='register-page-button'> SIGN UP </button>
                <p>Already Have An Account? <Link to='/login'>Sign in </Link></p>
            </div>
        </div>
    );
}