import React from 'react';
import './Header.css';
import DevOpsLogo from '../assets/devops-logo.svg';

const Header = () => {
  return (
    <div className="hero">
      <img src={DevOpsLogo} alt="DevOps" className="hero-image" />
      <h1 className="hero-title">Mamunur Rashid DevOps Skills Radar</h1>
      <p className="hero-description">
        Technology Assessment & Adoption Framework
      </p>
    </div>
  );
};

export default Header;