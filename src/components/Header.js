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
        <h1 className="hero-title">Institute of Information Technology</h1>
        <p className="hero-subtitle">Jahangirnagar University</p>
        <p className="hero-subtitle-2">Savar, Dhaka-1342, Bangladesh. 18 August 2026, Today</p>
        <p className="hero-date">{today}</p>
      </div>
      <footer className="hero-footer">
        &copy; {new Date().getFullYear()} IIT-JU Project. All rights reserved.
      </footer>
    </div>
  );
};

export default Header;