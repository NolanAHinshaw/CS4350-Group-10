// IMPORTS ---------------------------------------------------------------------------------------------------------------
import styles from './DefaultNavBar.module.css';
import { Link } from 'react-router-dom';
import PulseLogo from '../../Images/StudentPulseLogo.svg';
//import SearchIcon from '../../Images/search-icon.svg';
//import ProfileIcon from '../../Images/profile-icon.svg';
//import CalendarIcon from '../../Images/calendar-icon-W.svg';


// MAIN NAV-BAR FUNCTION -------------------------------------------------------------------------------------------------
export default function DefaultNavBar(){
    return(
        <>
        <div className={styles['navbar']}>
            <div className={styles['navbar-content']}>
                <div className={styles['navbar-content-landinglink']}>
                    <Link to='/'><img src={ PulseLogo } alt='Student Pulse Logo'></img></Link>
                </div>

                <div className={styles['navbar-content-rightlinks']}>
                    <Link to='/login' className={styles['login-button']}> Login </Link>
                    <Link to='/register' className={styles['register-button']}> Register </Link>
                </div>
            </div>
        </div>
        {/* <div className={styles['navbar']}>
            <div className={styles['navbar-content']}>
                <div className={styles['navbar-content-landinglink']}>
                    <Link to='/'><img src={ PulseLogo } alt='Student Pulse Logo'></img></Link>
                </div>

                <div className={styles['navbar-content-centerlinks']}>
                    <Link to='/schedule' className={styles['navbar-links']}><img src={CalendarIcon} alt='calendar icon'/>Your Schedule</Link>
                    <Link to='/search-courses' className={styles['navbar-links']}><img src={SearchIcon} alt='search icon'/>Course Search</Link>
                    <Link to='/profile' className={styles['navbar-links']}><img src={ProfileIcon} alt='profile icon'/>Your Profile</Link>
                </div>

                <div className={styles['navbar-content-rightlinks']}>
                    <Link to='/' className={styles['login-button']}> Log Out </Link>
                </div>                
            </div>
        </div> */}
        </>
    );
};