// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './IndividualCoursePage.module.css';
import BackArrow from '../../Images/right-arrow-icon.svg';
import StarRating from '../../Images/filled-star-icon.svg';
import SadFace from '../../Images/sad-face-icon.svg';
import AddIcon from '../../Images/add-icon.svg';
import FeedbackDetail from '../../Components/FeedbackDetail/FeedbackDetail';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function IndividualCoursePage(){
    const navigate = useNavigate();
    const dropdownFilterItems = ['Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

    //FUNCTION FOR LOADING OPTIONS IN USER IDENTIFICATION DROPDOWN
    const loadDropdownMenu = (dropdownItems) => {
        return dropdownItems?.map(menuItem => (
            <option value={menuItem} key={menuItem} onClick={handleFilterSelection}>
                {menuItem}
            </option>
        ));
    };

    //FUNCTION FOR DISPLAYING NEW FILTERED FEEDBACK RESULTS WHEN FILTER SELECTION MADE
    const handleFilterSelection = () => {
        //IMPLEMENT FILTER FUNCTIONALITY HERE
        console.log('whoopdescoop');
    };

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
                    <div className={styles['course-feedback-header-right']}>
                        <div className={styles['dropdown-field']}>
                            <label> FILTER: </label>
                            <select name="userType" className={styles['dropdown-menu']} onChange={handleFilterSelection}>
                                {loadDropdownMenu(dropdownFilterItems)}
                            </select>
                        </div>
                        <button><img src={AddIcon} alt='Add Feedback Icon'/>Add Feedback</button>
                    </div>
                </div>
                {/* <div className={styles['course-feedback-content-empty']}>
                    <img src={SadFace} alt='Sad Error Face'/>
                    <p className={styles['course-feedback-empty']}>
                        WHOOPS! <br />
                        No feedback available just yet. Try again later or add your own feedback!
                    </p>
                </div> */}
                <div className={styles['course-feedback-content']}>
                    <FeedbackDetail />
                    <FeedbackDetail />
                    <button className={styles['feedback-load-button']}>Read More</button>
                </div>
            </div>
        </div>
    );
}


export default React.memo(IndividualCoursePage);