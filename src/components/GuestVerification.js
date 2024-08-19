import React, { useState } from 'react';
import guestList from '../guestList.json';

const GuestVerification = ({ onVerified }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleVerification = () => {
    const guestExists = guestList.some(guest => guest.name.toLowerCase() === name.toLowerCase());

    if (guestExists) {
      onVerified(true);
    } else {
      setError('Name not found in guest list. Please try again.');
    }
  };

  return (
    <div>
      <h1>Welcome to Our Wedding Website</h1>
      <p>Please enter your name to continue:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleVerification}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GuestVerification;
