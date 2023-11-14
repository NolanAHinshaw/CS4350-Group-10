// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './CourseSearchPage.module.css';
import filterOptions from '../../Services/filterOptions';


// FILTER FORM SECTION  -------------------------------------------------------------------------------------------------
function FilterForm(){
    const displayFilters = (filterSubject) => {
        return filterSubject?.map(filterOption => {
            return (
            <div key={filterSubject +'-'+ filterOption} className={styles['filter-checkboxes']}>
                <input type='checkbox' />
                <label>{filterOption}</label>
            </div>);
        });
    };

    return(
        <form>
            <div className={styles['form-filter-options']}>
                <h4>Department</h4>
                {displayFilters(filterOptions.Department)}
            </div>
            <div className={styles['form-filter-options']}>
                <h4>Subject</h4>
                {displayFilters(filterOptions.Subject)}
            </div>
            <div className={styles['form-filter-options']}>
                <h4>Degree</h4>
                {displayFilters(filterOptions.Degree)}
            </div>
        </form>
    );
}


export default React.memo(FilterForm);