import React from 'react';
import './SubmitSuccess.css';

const SubmitSuccess = () => {
    return (
        <div className="submit-success-container">
            <h1 className="submit-success-title">Thank You!</h1>
            <p className="submit-success-message">Your RSVP has been successfully submitted.</p>
        </div>
    );
};

export default SubmitSuccess;