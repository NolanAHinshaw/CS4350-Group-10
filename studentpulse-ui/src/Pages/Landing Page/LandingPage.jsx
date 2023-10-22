import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage(){
    return(
        <div className='Landing'>
            <div className='landing-hero'>
                <div className='landing-hero-text'>
                    <h2>Maximize Your Academic Excellence With Student Pulse</h2>
                    <p>
                        Get organized For Success and boost your Productivity today! 
                        Explore all The features Student Pulse has to offer and explore 
                        real-time course feedback!
                    </p>
                    <Link to='/register' className='landing-action-button'> Get Started Now! </Link>
                </div>
            </div>
            <h1>hello world</h1>
        </div>
    );
}