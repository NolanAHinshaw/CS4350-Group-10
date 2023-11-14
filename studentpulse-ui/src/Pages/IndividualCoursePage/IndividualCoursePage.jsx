// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './IndividualCoursePage.module.css';
import BackArrow from '../../Images/right-arrow-icon.svg';
import StarRating from '../../Images/filled-star-icon.svg';
import SadFace from '../../Images/sad-face-icon.svg';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function IndividualCoursePage(){
    const navigate = useNavigate();

    return(
        <div className={styles['individual-course-page']}>
            <button className={styles['back-button']} onClick={() => {navigate('/search-courses')}}><img src={BackArrow} alt='Back Arrow Button'/>BACK TO SEARCH</button>
            <div className={styles['course-page-header']}>
                <div className={styles['course-page-header-content']}>
                    <h1>Name Of Course</h1>
                    <h2>Course Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor sed do eiusmod tempor 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor sed do eiusmod tempor 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor sed do eiusmod tempor
                    </p>
                </div>
                <div className={styles['course-page-header-rating']}>
                    <h2>RATING</h2>
                    <div className={styles['course-rating']}>
                        <img src={StarRating} alt='Star Rating'/>
                        <p>4.8</p>
                    </div>
                </div>
            </div>

            <h2 className={styles['course-sections-title']}>Available Course Sections</h2>
            <div  className={styles['course-sections']}>
                <p>
                    <strong>Section 4325 :</strong> <br/>
                    Monday - Wednesday <br />
                    10:00 am - 11:30am
                </p>
                <p>
                    <strong>Section 4325 :</strong> <br/>
                    Monday - Wednesday <br/>
                    10:00 am - 11:30am
                </p>
                <p>
                    <strong>Section 4325 :</strong> <br/>
                    Monday - Wednesday <br />
                    10:00 am - 11:30am
                </p>
            </div>

            <div className={styles['course-feedback-section']}>
                <div className={styles['course-feedback-header']}>
                    <h2>Course Feedback</h2>
                    <div>
                        <p>FILTER</p>
                        <button>Add Feedback</button>
                    </div>
                </div>
                <div className={styles['course-feedback-content-empty']}>
                    <img src={SadFace} alt='Sad Error Face'/>
                    <p className={styles['course-feedback-empty']}>
                        WHOOPS! <br />
                        No feedback available just yet. Try again later or add your own feedback!
                    </p>
                </div>
            </div>
        </div>
    );
}


export default React.memo(IndividualCoursePage);