import React from 'react';
import './Header.css';
import DevOpsLogo from '../assets/devops-logo.svg';

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
        <h1 className="hero-title">ADN Group</h1>
        <p className="hero-subtitle">ADN Technologies Limited</p>
        <p className="hero-subtitle-2">Technology Assessment & Adoption Framework| This my my night</p>
        <p className="hero-date">{today}</p>
      </div>
      <footer className="hero-footer">
        &copy; {new Date().getFullYear()} IIT JU
      </footer>
    </div>
  );
};

export default Header;