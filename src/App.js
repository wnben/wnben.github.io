// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import OurStory from './sections/OurStory';
import Gallery from './sections/Gallery';
import TheWedding from './sections/TheWedding';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeSection />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/the-wedding" element={<TheWedding />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
