// src/components/loaders/SquidGameLoader.jsx

import React from 'react';
import './SquidGameLoader.css';

const SquidGameLoader = () => {
  return (
    <div className="squid-loader">
      <div className="shape circle" />
      <div className="shape triangle" />
      <div className="shape square" />
    </div>
  );
};

export default SquidGameLoader;
