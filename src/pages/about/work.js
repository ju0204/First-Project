import React from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer'
import './work.css'; 

function Work() {
  return (
    <div>
      <CompanyTabs />
      <div className="work-container">
        <div className="ceo-box">
          대표
          <div className="ceo-line"></div>
        </div>
        <div className="departments-container">
          <div className="horizontal-line"></div>
          <div className="department">
            <div className="vertical-line"></div>
            <div className="department-box">기획과</div>
            <ul className="department-list">
              <li className="department-item">업무체결</li>
              <li className="department-item">사업추진</li>
              <li className="department-item">현장지원</li>
            </ul>
          </div>
          <div className="department">
            <div className="vertical-line"></div>
            <div className="department-box">사업과</div>
            <ul className="department-list">
              <li className="department-item">공사/시공</li>
              <li className="department-item">현장관리</li>
              <li className="department-item">품질관리</li>
            </ul>
          </div>
          <div className="department">
            <div className="vertical-line"></div>
            <div className="department-box">재무과</div>
            <ul className="department-list">
              <li className="department-item">총무, 회계</li>
              <li className="department-item">인사관리</li>
              <li className="department-item">자재관리</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Work;
