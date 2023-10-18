// IMPORTS ---------------------------------------------------------------------------------------------------------------
import './DefaultNavBar.css';
import { Link } from 'react-router-dom';
import PulseLogo from '../../Images/StudentPulseLogo.svg';


// MAIN NAV-BAR FUNCTION -------------------------------------------------------------------------------------------------
export default function DefaultNavBar(){
    return(
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='navbar-content-landinglink'>
                    <Link to='/'><img src={ PulseLogo } alt='Student Pulse Logo'></img></Link>
                </div>

                <div className='navbar-content-rightlinks'>
                    <Link to='' className='login-button'> Login </Link>
                    <Link to='/register' className='register-button'> Register </Link>
                </div>
            </div>
        </div>
    );
};