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
            <span>주소 : 경기도 남양주시 다산순환로20 다산현대프리미어캠퍼스 A동 1026호</span>
          </p>

          <p>
            <span>대표자 : 박정이</span>
            <span>사업자등록번호 : 510-13-90993</span>
            <span>TEL : 02-979-2785</span>
          </p>

          <p>
            <span>E-mail : daens510@naver.com</span>
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