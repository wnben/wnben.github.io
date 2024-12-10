import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GuestVerification from './components/GuestVerification';
import HomeEn from './pages/en/Home';
import OurStoryEn from './pages/en/OurStory';
import GalleryEn from './pages/en/Gallery';
import WeddingDetailsEn from './pages/en/WeddingDetails';
import RSVPPageEn from './pages/en/RSVPPage';
import HomeZh from './pages/zh/Home';
import OurStoryZh from './pages/zh/OurStory';
import GalleryZh from './pages/zh/Gallery';
import WeddingDetailsZh from './pages/zh/WeddingDetails';
import RSVPPageZh from './pages/zh/RSVPPage';
import './styles/Layout.css';

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        {isVerified && <Navbar />} {/* Only show Navbar if verified */}
        <Routes>
          <Route path="/" element={<Navigate to="/verification" />} />
          <Route path="/verification" element={<GuestVerification onVerified={() => setIsVerified(true)} />} />
          {/* English Routes */}
          <Route path="/en/home" element={isVerified ? <HomeEn /> : <Navigate to="/verification" />} />
          <Route path="/en/our-story" element={isVerified ? <OurStoryEn /> : <Navigate to="/verification" />} />
          <Route path="/en/wedding-details" element={isVerified ? <WeddingDetailsEn /> : <Navigate to="/verification" />} />
          <Route path="/en/gallery" element={isVerified ? <GalleryEn /> : <Navigate to="/verification" />} />
          <Route path="/en/RSVPPage" element={isVerified ? <RSVPPageEn /> : <Navigate to="/verification" />} />
          {/* Chinese Routes */}
          <Route path="/zh/home" element={isVerified ? <HomeZh /> : <Navigate to="/verification" />} />
          <Route path="/zh/our-story" element={isVerified ? <OurStoryZh /> : <Navigate to="/verification" />} />
          <Route path="/zh/wedding-details" element={isVerified ? <WeddingDetailsZh /> : <Navigate to="/verification" />} />
          <Route path="/zh/gallery" element={isVerified ? <GalleryZh /> : <Navigate to="/verification" />} />
          <Route path="/zh/RSVPPage" element={isVerified ? <RSVPPageZh /> : <Navigate to="/verification" />} />
        </Routes>
        {isVerified && <Footer />} {/* Only show Footer if verified */}
      </Router>
    </LanguageProvider>
  );
};

export default App;
