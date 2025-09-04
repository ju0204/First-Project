// import React, { useState } from 'react';
import React from 'react';
import './companyTabs.css';
// import { Link, Route, useLocation } from 'react-router-dom';

const CompanyTabs = () => {
  // const location = useLocation();

  // const getActiveTab = () => {
  //   if (location.pathname.includes('work')) return 'work';
  //   if (location.pathname.includes('result')) return 'result';
  //   return 'about';
  // };
  // const activeTab = getActiveTab();

  return (
    <div className="tabs-container">
      {/* === 배경 이미지 + 중앙 텍스트만 표시 === */}
      <div className="background-image">
        <div className="centered-text">대건이엔에스</div>
      </div>

      {/* === 탭 UI 전부 비활성화 === */}
      {/*
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
      */}
    </div>
  );
};

export default CompanyTabs;
