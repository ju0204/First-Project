import React, { useState } from 'react';
import './companyTabs.css';
import { Link, Route, useLocation } from 'react-router-dom';

const CompanyTabs = () => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.includes('work')) return 'work';
    if (location.pathname.includes('result')) return 'result';
    return 'about';
  };

  const activeTab = getActiveTab();

  return (
    <div className="tabs-container">
      <div className="background-image">
        <div className="centered-text">회사소개</div>
      </div>
      <ul className="tabs">
        <li className={activeTab === 'about' ? 'active' : ''}>
          <Link to="/about">회사소개</Link>
        </li>
        <li className={activeTab === 'work' ? 'active' : ''}>
          <Link to="/work">조직도</Link>
        </li>
        <li className={activeTab === 'result' ? 'active' : ''}>
          <Link to="/result">실적</Link>
        </li>
      </ul>
    </div>
  );
};

export default CompanyTabs;
