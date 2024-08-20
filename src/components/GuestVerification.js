import React, { useState, useEffect } from 'react';
import './GuestVerification.css';
import guestListData from '../data/guestlist.json';

const GuestVerification = ({ onVerified }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    // Load guest list from the imported JSON data
    setGuestList(guestListData.map(guest => guest.name));
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();

    if (trimmedName === '') {
      setError('Please enter your name.');
      return;
    }

    if (!guestList.includes(trimmedName)) {
      setError('Sorry, your name is not on the guest list.');
    } else {
      setError('');
      onVerified(true); // Notify the parent component that verification is successful
    }
  };

  return (
    <div className="verification-container">
      <h2 className="verification-header">Welcome to Our Wedding</h2>
      <p className="verification-subtext">Please verify your name to continue:</p>
      <form onSubmit={handleSubmit} className="verification-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
          className={`verification-input ${error ? 'input-error' : ''}`}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="verification-button">Verify</button>
      </form>
    </div>
  );
};

export default GuestVerification;
