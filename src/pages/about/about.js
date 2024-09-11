import React, { useEffect, useRef } from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer'
import './about.css';

function About() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport를 root로 설정
      rootMargin: '0px',
      threshold: 0.1 // 10%가 보이면 콜백 실행
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, options);

    if (imgRef.current) observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  

  return (
    <div>
      <div>
        <CompanyTabs />
      </div>
      <div
        className="about-about-img"
        ref={imgRef}
      ></div>
      <div
        className="about-about-text"
        ref={textRef}
      >
        <h1>산불 및 재해방지 전문기업</h1>
        <p>저희 회사는 국립산림과학원으로부터 특허권을 이전받아 산불 및 재해방지 분야에서 전문성을 갖춘 기업입니다. 
          산림청 기준에 적합한 산불방지 급수시설 설치와 산악지형에 적합한 산불 진화용 포 소화약제, 그리고 다양한 전문 장비를 취급하고 있습니다.
          또한, GIS 기반의 스마트폰용 산불관리 시스템인 'SMART FIREMAN'을 개발하여 현대적 기술을 통해 효율적인 산불 관리를 지원하고 있습니다.
          저희는 중소기업 진흥공단으로부터 친환경성과 기술 평가에서 우수성을 인정받아 벤처확인기업으로 인증받았으며, 
          소중한 인명을 보호하고 귀중한 산림자원을 지키기 위해 최선을 다하고 있습니다. 앞으로도 산림과 환경을 먼저 생각하며 일등 기업이 되기 위해 지속적으로 노력하겠습니다.</p>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
