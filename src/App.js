import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import WeddingDetails from './pages/WeddingDetails';
import RSVPPage from './pages/RSVPPage';
import SubmitSuccess from './components/SubmitSuccess'; // Import the new component
import GuestVerification from './components/GuestVerification';
import Footer from './components/Footer';
import './styles/Layout.css';

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
                <Route path="/RSVPPage" element={<RSVPPage />} />
                <Route path="/submit-success" element={<SubmitSuccess />} /> {/* New Route */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
