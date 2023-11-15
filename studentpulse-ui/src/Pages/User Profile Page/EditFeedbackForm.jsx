import React, { useState } from 'react';
import "./EditFeedbackForm.css"

const EditFeedbackForm = ({ onClose, feedback, onSubmit }) => {
  // State for form fields, with initial values from the feedback prop
  const [subject, setSubject] = useState(feedback.subject);
  const [type, setType] = useState(feedback.type);
  const [attachment, setAttachment] = useState(feedback.attachment);
  const [link, setLink] = useState(feedback.link);
  const [content, setContent] = useState(feedback.content);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct the updated feedback object
    const updatedFeedback = { subject, type, attachment, link, content };
    onSubmit(updatedFeedback);
  };

  return (
    <div className="edit-feedback-form">
      <div className="form-overlay" onClick={onClose} />
      <div className="form-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>EDIT YOUR FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <label>Subject Title</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label>What Kind of Feedback?</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="general">General</option>
            {/* Add more options as needed */}
          </select>
          <label>Attach Files / Images Here</label>
          {/* File upload input would go here */}
          <label>Add Link Here</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <label>Your Feedback</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">SUBMIT EDIT</button>
        </form>
      </div>
    </div>
  );
};

export default EditFeedbackForm;
