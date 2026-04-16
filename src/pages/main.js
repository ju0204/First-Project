// Main.js
import React, { useEffect, useRef, useState } from 'react';
import ImageSlider from './imageSlider';
import './main.css';

function Main() {
  const [show, setShow] = useState(false);
  const bizRef = useRef(null);

  useEffect(() => {
    const current = bizRef.current;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShow(true);
      io.unobserve(entry.target);
    }, { threshold: 0.12 });

    if (current) io.observe(current);

    return () => {
      if (current) io.unobserve(current);
    };
  }, []);

  const items = [
    { key: 'install', label: '산불소화시설 설치', icon: 'flame' },
    { key: 'maintenance', label: '유지보수', icon: 'wrench' },
    { key: 'consulting', label: '전문 컨설팅', icon: 'shield' },

  ];

  const Icon = ({ name }) => {
    switch (name) {
      case 'flame':
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M14 3c1 2-1 3 0 5s4 3 4 7a6 6 0 1 1-12 0c0-3 2-5 4-7 1-2 0-3 1-5 1 1 2 2 3 5z" strokeLinecap="round" strokeLinejoin="round"/></svg>);
      case 'wrench':
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M14 7a4 4 0 1 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5z" strokeLinecap="round" strokeLinejoin="round"/></svg>);
      case 'shield':
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round"/></svg>);
      case 'drone':
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6h4M2 4l2 2-2 2M16 6h4M22 4l-2 2 2 2M8 18H4M2 16l2 2-2 2M20 18h-4M22 16l-2 2 2 2M9 12h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round"/></svg>);
      case 'cap':
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M3 10l9-4 9 4-9 4-9-4zm2 4v3c2.5 2 11.5 2 14 0v-3" strokeLinecap="round" strokeLinejoin="round"/></svg>);
      default:
        return (<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <rect x="3" y="5" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
          <rect x="13" y="5" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
          <rect x="3" y="11" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
          <rect x="13" y="11" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
          <rect x="8" y="17" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
        </svg>);
    }
  };

  return (
    <div>
      <ImageSlider />

      <section className={`section business ${show ? 'reveal show' : 'reveal'}`} ref={bizRef}>
        <div className="container">
          <div className="ba-top">
            <div className="ba-title-wrap">
              <h1 className="ba-title">사업분야</h1>
              <span className="ba-sub">Business Area</span>
            </div>
            {/* 링크로 전환 (필요한 경로로 href 교체) */}
            <a href="/business" className="ba-more" aria-label="사업분야 더 보기">view more +</a>
          </div>

          <div className="ba-headline">
            <h2>산불 및 재해방지 전문기업</h2>
            <p>
              저희 회사는 산불 및 재해방지 전문기업으로, 국립산림과학원으로부터 다수의
              특허권을 이전받아 산림 보호와 인명 안전에 기여하고 있습니다. 산불 방지
              급수시설, 포 소화약제, GIS 기반 산불관리 시스템 등을 제공하며, 기술 우수성을
              인정받은 벤처기업으로 소중한 인명을 보호하고 귀중한 산림자원을 지킬 것을
              약속드립니다.
            </p>
          </div>

          <ul className="ba-icons">
            {items.map(it => (
              <li className="ba-item" key={it.key}>
                <div className="ba-icon"><Icon name={it.icon} /></div>
                <div className="ba-label">{it.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
