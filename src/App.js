// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HomeSection />
        </div>
    );
}

export default App;
