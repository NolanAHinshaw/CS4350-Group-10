import React, { useState } from 'react';
import "./ChangePasswordPopup.css"

const ChangePasswordPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the password change logic here
  };

  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose} />
      <div className="popup">
        <div className="popup-header">
          <h2>CHANGE YOUR PASSWORD</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <label>Enter Your Email To Begin Process</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Here . . ."
              required
            />
            <button type="button" className="verify-button">Verify Email</button>
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your New Password Here . . ."
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter Your New Password Here . . ."
              required
            />
          </div>
          <button type="submit" className="change-password-button">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
