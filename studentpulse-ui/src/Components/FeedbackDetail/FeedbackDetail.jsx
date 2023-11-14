// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './FeedbackDetail.module.css';
import upvoteArrow from '../../Images/up-arrow-outline.svg';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function FeedbackDetail(){

    return(
        <div className={styles['feedback-component']}>
            {/**TO DO: REPLACE ALL PLACEHOLDER TEXT WITH ACTUAL IMPORTED VALUES FROM BACKEND AXIOS CALL */}
            <h3>Feedback Subject</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor sed 
                do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do 
                eiusmod tempor sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor sed do eiusmod tempor sed do eiusmod tempor
            </p>
            <div className={styles['voting-section']}>
                <button className={styles['upvoting-arrows']}><img src={upvoteArrow} alt='upvote arrow'/>65</button>
                <button className={styles['downvoting-arrows']}><img src={upvoteArrow} alt='downvote arrow'/>24</button>
            </div>
        </div>
    );
}


export default React.memo(FeedbackDetail);