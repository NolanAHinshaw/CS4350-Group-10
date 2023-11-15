import React, { useState } from 'react';
import "./DeleteAccountPopup.css"

const DeleteAccountPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here for deleting the account
    console.log('Account deletion requested for:', email);
  };

  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose} />
      <div className="popup">
        <div className="popup-header">
          <h2>DELETE YOUR ACCOUNT</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <label>Enter Your Email To Begin Process</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Your Email Here . . ."
              required
            />
          </div>
          <p>Are you sure you want to delete your Student Pulse Account?<br/>This is a PERMANENT action!</p>
          <button type="submit" className="delete-account-button">Delete Account</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;