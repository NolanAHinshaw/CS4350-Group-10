import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import PencilIcon from '../../Images/pencil-icon.svg';
import CalendarIcon from '../../Images/calendar-icon.svg';
import DataIcon from '../../Images/data-icon.svg';

export default function LandingPage(){
    return(
        <div className={styles['Landing']}>
            <div className={styles['landing-hero']}>
                <div className={styles['landing-hero-text']}>
                    <h2>Maximize Your Academic Excellence With <span className={styles['hero-title']}>Student Pulse</span></h2>
                    <p>
                        Get organized For Success and boost your Productivity today! 
                        Explore all The features Student Pulse has to offer and explore 
                        real-time course feedback!
                    </p>
                    <Link to='/register' className={styles['landing-action-button']}> Get Started Now! </Link>
                </div>
            </div>

            <h2 className={styles['section-title']}>Empower Your Academic Journey</h2>
            <p className={styles['section-description']}> 
                Experience the power of real-time collaboration and feedback to elevate your productivity to new 
                heights. Join forces with others to learn more about courses that fit your interests, find your best
                matches, and get advice on how to succeed from your peers! Student Pulse offers these features and so much more! 
            </p>
            <div className={styles['feature-info-section']}>
                <div className={styles['feature-card']}>
                    <img src={PencilIcon} alt='feature icon' className={styles['feature-icon']}/>
                    <h3>Streamlined Feedback Submission</h3>
                    <p>
                        Prioritizes the ability for students to both view and leave their own feedback on different courses in terms of recommendations,
                        professor insights, materials to use in order to ace the course etc.
                    </p>
                </div>
                <div className={styles['feature-card']}>
                    <img src={CalendarIcon} alt='feature icon' className={styles['feature-icon']}/>
                    <h3>Productivity Management</h3>
                    <p>
                        Aims to streamline the process of course scheduling and possible calendar integrations so users can keep track of all their 
                        academic needs from our app! 
                    </p>
                </div>
                <div className={styles['feature-card']}>
                    <img src={DataIcon} alt='feature icon' className={styles['feature-icon']}/>
                    <h3>Data Driven Insights</h3>
                    <p>
                        Aims to employ advanced data analytics and visualizations that transforms course feedback into actionable goals based on
                        previous student feedback, general field interests, and academic progress.
                    </p>
                </div>
            </div>
            
        </div>
    );
}