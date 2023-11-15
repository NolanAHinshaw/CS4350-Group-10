import React, { useState } from 'react';
import './UserProfile.css';
import ChangePasswordPopup from './ChangePasswordPopup';
import DeleteAccountPopup from './DeleteAccountPopup';
import DeleteFeedbackPopup from './DeleteFeedbackPopup';
import EditFeedbackForm from './EditFeedbackForm';

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  });
  
  const [feedbackHistory, setFeedbackHistory] = useState([
    {
      subject: 'Feedback Subject',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      subject: 'Feedback Subject',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      subject: 'Feedback Subject',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ]);

  const [isChangePasswordPopupVisible, setIsChangePasswordPopupVisible] = useState(false);
  const [isDeleteAccountPopupVisible, setIsDeleteAccountPopupVisible] = useState(false);
  const [isDeleteFeedbackPopupVisible, setIsDeleteFeedbackPopupVisible] = useState(false);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);
  const [isEditFeedbackFormVisible, setIsEditFeedbackFormVisible] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);


  const showEditFeedbackForm = (feedback) => {
    setCurrentFeedback(feedback);
    setIsEditFeedbackFormVisible(true);
  };

  const hideEditFeedbackForm = () => {
    setIsEditFeedbackFormVisible(false);
  };

  const saveFeedback = (updatedFeedback) => {
    // Logic to save the updated feedback
    console.log('Feedback updated:', updatedFeedback);
    hideEditFeedbackForm();
  };
  const showDeleteFeedbackPopup = (feedbackId) => {
    setSelectedFeedbackId(feedbackId);
    setIsDeleteFeedbackPopupVisible(true);
  };

  const hideDeleteFeedbackPopup = () => {
    setIsDeleteFeedbackPopupVisible(false);
  };

  const confirmDeleteFeedback = () => {
    // Logic to delete the feedback using selectedFeedbackId
    console.log('Feedback deleted:', selectedFeedbackId);
    hideDeleteFeedbackPopup();
  };


  const toggleChangePasswordPopup = () => {
    setIsChangePasswordPopupVisible(!isChangePasswordPopupVisible);
  };

  const toggleDeleteAccountPopup = () => {
    setIsDeleteAccountPopupVisible(!isDeleteAccountPopupVisible);
  };


  return (
    <div className="user-profile">
      {isChangePasswordPopupVisible && (
        <ChangePasswordPopup onClose={toggleChangePasswordPopup} />
      )}
       {isDeleteAccountPopupVisible && (
        <DeleteAccountPopup onClose={toggleDeleteAccountPopup} />
      )}
      {isDeleteFeedbackPopupVisible && (
        <DeleteFeedbackPopup
          onClose={hideDeleteFeedbackPopup}
          onConfirm={confirmDeleteFeedback}
        />
      )}
      {isEditFeedbackFormVisible && (
        <EditFeedbackForm
          onClose={hideEditFeedbackForm}
          feedback={currentFeedback}
          onSave={saveFeedback}
        />
      )}
      <section className="welcome-section">
        <h1>WELCOME, {user.firstName.toUpperCase()}!</h1>
        <button onClick={toggleChangePasswordPopup}>Change Password</button>
        <div>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
        </div>
      </section>
      
      <section className="feedback-history-section">
        <h2>YOUR FEEDBACK HISTORY</h2>
        {feedbackHistory.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <h3>{feedback.subject}</h3>
            <p>{feedback.content}</p>
            <div className="feedback-actions">
              <button onClick={showEditFeedbackForm}>Edit</button>
              <button onClick={() => showDeleteFeedbackPopup(feedback.id)}>Delete</button>
            </div>
          </div>
        ))}
        <button>Load More</button>
      </section>
      
      <section className="account-management-section">
        <h2>ACCOUNT MANAGEMENT</h2>
        <button onClick={toggleDeleteAccountPopup}>Delete Account</button>
      </section>
    </div>
  );
};

export default UserProfile;


