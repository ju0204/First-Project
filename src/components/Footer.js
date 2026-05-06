import React from 'react';
import DG from './photo/DG1.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <p>
            <span>상호명 : 대건이앤에스</span>
            <span>주소 : 서울특별시 어쩌고 저쩌고 1동 101호</span>
          </p>

          <p>
            <span>대표자 : 박정이</span>
            <span>사업자등록번호 : 000-00-00000</span>
            <span>TEL : 02-000-0000</span>
          </p>

          <p>
            <span>FAX : 02-000-0000</span>
            <span>E-mail : @gmail.com</span>
          </p>

          <p className="copyright">
            COPYRIGHT(C) 대건이앤에스 ALL RIGHT RESERVED
          </p>
        </div>

        <div className="footer-logo">
          <img src={DG} alt="대건이앤에스" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;