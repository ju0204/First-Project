// Main.js
import React, { useEffect, useRef, useState } from 'react';
import ImageSlider from './imageSlider'; // Adjust the import path as necessary
import Footer from '../components/Footer';
import './main.css';

function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutBoxRef.current) {
      observer.observe(aboutBoxRef.current);
    }

    return () => {
      if (aboutBoxRef.current) {
        observer.unobserve(aboutBoxRef.current);
      }
    };
  }, []);

  return (
    <div>
      <ImageSlider />
      <div 
        className={`about-box ${isVisible ? 'animate' : ''}`} 
        ref={aboutBoxRef}
      >
        <div className='about-img'></div>
        <div className='about-text'> 
          <h1>산불 및 재해방지 전문기업</h1>
          <p>저희 회사는 산불 및 재해방지 전문기업으로, 국립산림과학원으로부터 다수의 특허권을 이전받아 산림 보호와 인명 안전에 기여하고 있습니다.
            산불 방지 급수시설, 포 소화약제, GIS기반 산불관리 시스템 등을 제공하며, 기술 우수성을 인정받은 벤처기업으로 소중한 인명을 보호하고 귀중한 산림자원을 지킬 것을 약속드립니다.</p>
         </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
