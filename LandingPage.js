//
import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>Paradise Nursery</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <button onClick={() => window.location.href='/products'}>Get Started</button>
        </div>
    );
};

export default LandingPage;