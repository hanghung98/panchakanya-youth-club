import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/1.jpg'; // Import the image

const AboutUs = () => {
    return (
        <div className="container">
            <h2>About Us</h2>
            <div className="about-content">
                <img src={aboutImage} alt="About Us" className="1" />
                
                <p>We are a community-driven youth club committed to...</p>
            </div>
        </div>
    );
};

export default AboutUs;
