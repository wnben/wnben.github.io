import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './GuestVerification.css';
import guestListData from '../data/guestlist.json';

const GuestVerification = ({ onVerified }) => {
  const { translations, setLanguage, language } = useLanguage();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [guestList, setGuestList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
      setError(translations.error.nameRequired);
      return;
    }

    if (!guestList.includes(trimmedName)) {
      setError(translations.error.notOnList);
    } else {
      setError('');
      onVerified();
      navigate(`/${language}/home`);
    }
  };

  return (
    <div className="verification-wrapper">
      <div className="verification-envelope-image"></div>
      <div className="verification-container">
        <div className="language-switcher">
          <button onClick={() => setLanguage('en')}>English</button>
          <button onClick={() => setLanguage('zh')}>中文</button>
        </div>
        <h2 className="verification-header">{translations.welcome}</h2>
        <p className="verification-subtext">{translations.enterName}</p>
        <form onSubmit={handleSubmit} className="verification-form">
          <input
            type="text"
            placeholder={translations.enterName}
            value={name}
            onChange={handleInputChange}
            className={`verification-input ${error ? 'input-error' : ''}`}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="verification-button">{translations.verify}</button>
        </form>
      </div>
    </div>
  );
};

export default GuestVerification;
