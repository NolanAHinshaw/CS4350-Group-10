import React from 'react';
import "./DeleteFeedbackPopup.css"

const DeleteFeedbackPopup = ({ onClose, onConfirm }) => {
  return (
    <div className="delete-feedback-popup">
      <div className="popup-overlay" onClick={onClose} />
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>DELETE YOUR FEEDBACK</h2>
        <p>Are you sure you want to delete this feedback?</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm} className="confirm-button">YES</button>
          <button onClick={onClose} className="cancel-button">NO</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFeedbackPopup;
