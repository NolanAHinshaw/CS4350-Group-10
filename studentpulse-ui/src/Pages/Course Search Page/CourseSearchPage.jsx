// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './CourseSearchPage.module.css';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function CourseSearchPage(){

    return(
        <div className={styles['course-search-page']}>
            This is the course search page!
        </div>
    );
}


export default React.memo(CourseSearchPage);