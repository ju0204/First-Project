import React from 'react';
import './optionTab.css';

const OptionTab = ({
  subtitle = 'OPTION',
  title = '페이지 제목',
  backgroundImage = '/src/pages/image/company.jpg',
}) => {
  return (
    <div className="option-tabs-container">
      <div
        className="option-background-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${backgroundImage})`,
        }}
      >
        <div className="option-title-box">
          <p className="option-tab-subtitle">{subtitle}</p>
          <h1 className="option-tab-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default OptionTab;