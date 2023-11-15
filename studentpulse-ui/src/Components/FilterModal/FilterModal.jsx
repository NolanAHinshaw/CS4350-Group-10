// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './FilterModal.module.css';


// FILTER FORM SECTION  -------------------------------------------------------------------------------------------------
function FilterModal({openModal}){
    return(
        openModal ?
        <div className={styles['filter-modal']}>
            <p><strong>QUICK GUIDE</strong></p>
            <p>After you have entered your filters, click on the search button to get results.</p>
        </div>
        :
        <></>
    );
}


export default React.memo(FilterModal);