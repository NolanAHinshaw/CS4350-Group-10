// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React, {useState} from 'react';
import styles from './CourseSearchPage.module.css';
import SearchIcon from '../../Images/search-icon-grey.svg';
import InfoIcon from '../../Images/info-icon.svg';
import FilterForm from './FilterForm';
import FilterModal from '../../Components/FilterModal/FilterModal';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function CourseSearchPage(){
    const [openModal, setOpenModal] = useState(false);
    const handleFormSubmit = () => {
        console.log('whoop di scoop')
        //HANDLE THE FORM SUBMISSIONS WHETHER THIS BE FROM SEARCH FIELD OR FROM THE FILTERS
    };

    const handleFormInputChanges = () => {
        //IMPLEMENT FUNCTIONALITY FOR WHENEVER AUSER ENTERS SOMETHING IN THE SEARCH BAR
    };


    return(
        <div className={styles['course-search-page']}>
            <h1>Search For A Course</h1>

            <form action='' onSubmit={handleFormSubmit} className={styles['search-name-form']}>
                <div className={styles['search-form-input-section']}>
                    <img src={SearchIcon} alt='search icon'/>
                    <input type='search' className={styles['search-form-input']} name='searchInput' placeholder='Enter a Course Name' onChange={handleFormInputChanges} />
                </div>
                <input type='submit' className={styles['search-form-button']} value='SEARCH'/>
            </form>

            <div className={styles['search-info-section']}>
                <div className={styles['filter-form-section']}>
                    <div className={styles['filter-form-header']}>
                        <h2>FILTERS : </h2>
                        <button onMouseMove={() => setOpenModal(true)} onMouseOut={() => setOpenModal(false)}><img src={InfoIcon} alt='info icon'/></button>
                        <FilterModal openModal={openModal}/>
                    </div>
                    <FilterForm />
                </div>
                <div className={styles['course-list-section']}>
                    <h2>Your Search Results</h2>
                </div>
            </div>
        </div>
    );
}


export default React.memo(CourseSearchPage);