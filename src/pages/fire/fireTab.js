import React, { useState } from 'react';
import './fireTab.css';
import { Link, Route, useLocation } from 'react-router-dom';

const CompanyTabs = () => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.includes('repair')) return 'repair';
    return 'install';
  };

  const activeTab = getActiveTab();

  return (
    <div className="tabs-container">
      <div className="background-image">
        <div className="centered-text">사업소개</div>
      </div>
      <ul className="tabs">
        <li className={activeTab === 'install' ? 'active' : ''}>
          <Link to="/install">설치사업</Link>
        </li>
        <li className={activeTab === 'repair' ? 'active' : ''}>
          <Link to="/repair">유지보수</Link>
        </li>
      </ul>
    </div>
  );
};

export default CompanyTabs;
