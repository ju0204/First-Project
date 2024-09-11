import React, { useEffect, useRef } from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer'
import './result.css';

function Result() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <div>
      <CompanyTabs />
      <div className="result-container">
        <h2 className="result-title">회사 실적</h2>
        <div className="result-content">
          <div className="result-section slide-in-left" ref={section1Ref}>
            <h3 className="section-title">산불방지급수시설</h3>
            <ul className="result-list">
              <li>
                <span className="result-date">2012.08</span>
                <span className="result-text">국립산림과학원 홍릉시험림 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2012.09</span>
                <span className="result-text">경남 함양군 국유림관리소 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2012.11</span>
                <span className="result-text">경북 봉화군 경제림육성단지 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2012.11</span>
                <span className="result-text">경북 울진군 금강송군락지 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2013.01</span>
                <span className="result-text">부산 해운대구 재송지구 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2013.02</span>
                <span className="result-text">경남 진주시 월아산지구 산불방지급수시설 설치</span>
              </li>
              <li>
                <span className="result-date">2013.03</span>
                <span className="result-text">경남 밀양시 대법사지구 산불방지급수시설 설치</span>
              </li>
              {/* 다른 항목들도 동일한 구조로 변경 */}
            </ul>
          </div>
          <div className="result-section slide-in-right" ref={section2Ref}>
            <h3 className="section-title">산불진화용 포 소화약제</h3>
            <ul className="result-list">
              <li>
                <span className="result-date">2012.02</span>
                <span className="result-text">산림항공본부 및 각 지역 산림항공 관리소 납품</span>
              </li>
              <li>
                <span className="result-date">2013.03</span>
                <span className="result-text">산림항공본부 및 각 지역 산림항공 관리소 납품</span>
              </li>
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

export default Result;
