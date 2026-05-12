import React from 'react';
import './companyTabs.css';

const CompanyTabs = ({
  subtitle = 'COMPANY',
  title = '대건이엔에스',
}) => {
  return (
    <div className="tabs-container">
      <div className="background-image">
        <div className="title-box">
          <p className="tab-subtitle">{subtitle}</p>
          <h1 className="tab-title">{title}</h1>

          
        </div>
      </div>
    </div>
  );
};

export default CompanyTabs;