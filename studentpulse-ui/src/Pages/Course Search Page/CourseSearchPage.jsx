// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './CourseSearchPage.module.css';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function CourseSearchPage(){

    return(
        <div className={styles['course-search-page']}>
            <h1>Search For A Course</h1>
        </div>
    );
}


export default React.memo(CourseSearchPage);