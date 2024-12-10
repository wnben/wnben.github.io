import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { translations, language } = useLanguage();

  // Determine the base path based on the current language
  const basePath = `/${language}`;

  return (
    <nav className="navbar-vertical">
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to={`${basePath}/home`}>{translations.navbar.home}</Link>
        </li>
        <li className="navbar-item">
          <Link to={`${basePath}/our-story`}>{translations.navbar.ourStory}</Link>
        </li>
        <li className="navbar-item">
          <Link to={`${basePath}/wedding-details`}>{translations.navbar.details}</Link>
        </li>
        <li className="navbar-item">
          <Link to={`${basePath}/gallery`}>{translations.navbar.gallery}</Link>
        </li>
        <li className="navbar-item">
          <Link to={`${basePath}/RSVPPage`}>{translations.navbar.rsvp}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;