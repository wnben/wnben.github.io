import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import WeddingDetails from './pages/WeddingDetails';
import GuestVerification from './components/GuestVerification';

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) {
    return <GuestVerification onVerified={setIsVerified} />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wedding-details" element={<WeddingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
