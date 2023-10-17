// IMPORTS ---------------------------------------------------------------------------------------------------------------
import './DefaultNavBar.css';
import { Link } from 'react-router-dom';


// MAIN NAV-BAR FUNCTION -------------------------------------------------------------------------------------------------
export default function DefaultNavBar(){
    return(
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='navbar-content-landinglink'>
                    <Link to='/'> Student Pulse </Link>
                </div>

                <div className='navbar-content-rightlinks'>
                    <Link to=''> LOGIN </Link>
                    <Link to=''> REGISTER </Link>
                </div>
            </div>
        </div>
    );
};