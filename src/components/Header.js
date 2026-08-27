import React from 'react';
import './Header.css';
import DevOpsLogo from '../assets/devops-logo.png';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="hero">
      <div className="hero-content">
        <img src={DevOpsLogo} alt="DevOps" className="hero-image" />
        <h1 className="hero-title">ADN Technologies Limited</h1>
        <p className="hero-subtitle">ADN Group</p>
        <p className="hero-subtitle-2">TRANSFORMING THE EXPERIENCE</p>
        <p className="hero-date">{today}</p>
        <p className="hero-subtitle-2">Theme: Continuous Integration and Continuous Deployment, Tnaks</p>
      </div>
      <footer className="hero-footer">
        &copy; {new Date().getFullYear()} IIT-JU Project. All rights reserved.
      </footer>
    </div>
  );
};

export default Header;