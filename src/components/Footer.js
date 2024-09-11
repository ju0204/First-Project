import React from 'react';
import { Link } from 'react-router-dom';
import DG from './photo/DG1.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={DG} alt="대건이엔에스" />
        </div>
        {/* <div className="footer-links">
          <a><Link to="/about">회사소개</Link></a>
          <a href="#">개인정보취급방침</a>
          <a href="#">이용약관</a>
        </div> */}
        <div className="company-info">
        <div className="company-details">
            <span className="company-label">회사명</span>
            <span className="company-name">대건이엔에스</span>
        </div>
        <div className="company-details">
            <span className="company-label">대표 전화</span>
            <span className="company-name">02-???</span>
        </div>
        <div className="company-details">
            <span className="company-label">이메일</span>
            <span className="company-name">@gmail.com</span>
        </div>
        </div>
        <div className="address-info">
            <div className="company-details">
                <span className="company-label">대표자명</span>
                <span className="company-name">박정이</span>
            </div>
            <div className="company-details">
                <span className="company-label">주소</span>
                <span className="company-name">서울특별시 어쩌고 저쩌고 1동 101호</span>
            </div>
            <div className="company-details">
            <span className="company-label">휴무일</span>
            <span className="company-name">주말, 공휴일</span>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 D&G ens All Rights Reserved</p>
        <p className="designed">designed by DESIGNART</p>
      </div>
    </footer>
  );
};

export default Footer;
