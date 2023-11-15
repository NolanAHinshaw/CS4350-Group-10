// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import styles from './InsertFeedbackModal.module.css';
import Modal from '@mui/material/Modal';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function InsertFeedbackModal({openModal, setOpenModal}){
    const feedbackOptions = ['Materials', 'Professors', 'General Info', 'Recommendations']

    const handleFeedbackFormChanges = () => {
        //IMPLEMENT FUNCTIONALITY HERE FOR HANDLING THE INPUT FORM CHANGES
    };

    //FUNCTION FOR LOADING OPTIONS IN FEEDBACK TYPE DROPDOWN
    const loadDropdownMenu = (dropdownItems) => {
        return dropdownItems?.map(menuItem => (
            <option value={menuItem} key={menuItem} onClick={handleFeedbackFormChanges}>
                {menuItem}
            </option>
        ));
    };

    return(
        <Modal open={openModal} onClose={()=>setOpenModal(false)} className={styles['modal-background-listener']}>
            <div className={styles['insert-feedback-modal']}>
                <h2>Add Your Feedback</h2>
                <hr/>
                <form className={styles['insert-feedback-form']}>
                    <div className={styles['input-field-section']}>
                        <label>Subject Title</label>
                        <input type='text' name='Feedback Subject'placeholder='Enter your feedback title here . . .' onChange={handleFeedbackFormChanges} required/>
                    </div>
                    <div className={styles['input-field-section']}>
                        <label>What Kind Of Feedback?</label>
                        <select name="userType" className={styles['dropdown-menu']} onChange={handleFeedbackFormChanges}>
                            {loadDropdownMenu(feedbackOptions)}
                        </select>
                    </div>
                    <div className={styles['input-field-section']}>
                        <label>Attach Files / Image Here </label>
                        <input type='file' name='Feedback Subject'placeholder='Enter last name' onChange={handleFeedbackFormChanges} required/>
                    </div>
                    <div className={styles['input-field-section']}>
                        <label>Add Link Here</label>
                        <input type='url' name='Feedback Subject'placeholder='Enter your link here' onChange={handleFeedbackFormChanges} required/>
                    </div>
                    <div className={styles['input-field-section']}>
                        <label>How Would You Rate This Course?</label>
                        <input type='number' name='Feedback Subject'placeholder='Enter your feedback rating here . . . (Scale of 1-5)' onChange={handleFeedbackFormChanges} required/>
                    </div>
                    <div className={styles['input-field-section']}>
                        <label>Your Feedback</label>
                        <input type='text' name='Feedback Subject'placeholder='Enter your feedback here . . .' onChange={handleFeedbackFormChanges} required/>
                    </div>
                    <input type='submit' className={styles['feedback-submit-button']} value='SUBMIT'/>
                </form>
            </div>
        </Modal>
    );
}


export default React.memo(InsertFeedbackModal);