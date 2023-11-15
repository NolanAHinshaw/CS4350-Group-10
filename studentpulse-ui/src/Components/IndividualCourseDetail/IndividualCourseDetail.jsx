// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IndividualCourseDetail.module.css';
import RightArrow from '../../Images/right-arrow-icon.svg';
import FilledStar from '../../Images/filled-star-icon.svg';
import StarOutline from '../../Images/star-outline.svg';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function IndividualCourseDetail({courseName, courseId, description, rating, numOfFeedback}){

    return(
        <div className={styles['course-results-details']}>
            <div className={styles['details-header']}>
                <h3>{courseName}</h3>
                <Link to={'/search-courses/'+ courseId}><img src={RightArrow} alt='Right Arrow'/></Link>
            </div>
            <p>{description}</p>
            <div className={styles['details-footer']}>
                <div className={styles['details-footer-rating']}>
                    <img src={FilledStar} alt='Filled Star'/>
                    <img src={FilledStar} alt='Filled Star'/>
                    <img src={FilledStar} alt='Filled Star'/>
                    <img src={FilledStar} alt='Filled Star'/>
                    <img src={StarOutline} alt='Non-Filled Star'/>
                    <p>{rating}</p>
                </div>
                <p>Feedback : {numOfFeedback} posts</p>
            </div>
        </div>
    );
}


export default React.memo(IndividualCourseDetail);