import React, { useEffect } from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer';
import './about.css';

/* 핵심가치 데이터: 기존 그대로 */
const VALUES_3B = [
  {
    key: 'base',
    en: 'Base',
    ko: '기초',
    punch: '안전하고 튼튼한',
    desc:
      '기본과 원칙을 지켜 신뢰할 수 있는 기반을 쌓고, 모든 사업의 출발점인 안전을 최우선으로 합니다.',
  },
  {
    key: 'belief',
    en: 'Belief',
    ko: '믿음',
    punch: '상호간의 든든한',
    desc:
      '고객·파트너·동료와의 약속을 지키며 협력의 신뢰를 구축하고 지속적인 성장을 도모합니다.',
  },
  {
    key: 'balance',
    en: 'Balance',
    ko: '균형',
    punch: '자연과의 반듯한',
    desc:
      '자연과 사람이 공존하는 조화를 추구하며 친환경적이고 지속가능한 해법을 실천합니다.',
  },
];

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('fade-in'));
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <CompanyTabs />

      {/* 히어로(좌 텍스트 / 우 이미지) */}
      <section className="about-hero reveal-on-scroll">
        <div className="hero-copy">
          <div className="hero-eyebrow">회사소개</div>
          <h2 className="hero-title">
            <span>We Will</span><br />
            <span>Make It Possible</span>
          </h2>
          <h3 className="hero-subtitle">산불 및 재해방지 전문기업</h3>
          <p className="hero-desc">
            저희 회사는 국립산림과학원으로부터 특허권을 이전받아 산불 및 재해방지 분야에서 전문성을 갖춘 기업입니다.
            산림청 기준에 적합한 산불방지 급수시설 설치와 산악지형에 적합한 산불 진화용 포 소화약제, 그리고 다양한 전문 장비를 취급하고 있습니다.
            또한, GIS 기반의 스마트폰용 산불관리 시스템 ‘SMART FIREMAN’을 개발하여 현대적 기술을 통해 효율적인 산불 관리를 지원하고 있습니다.
            저희는 중소기업 진흥공단으로부터 친환경성과 기술 평가에서 우수성을 인정받아 벤처확인기업으로 인증받았으며,
            소중한 인명을 보호하고 귀중한 산림자원을 지키기 위해 최선을 다하고 있습니다. 앞으로도 산림과 환경을 먼저 생각하며
            일등 기업이 되기 위해 지속적으로 노력하겠습니다.
          </p>
        </div>

        <figure className="hero-visual">
          <img className="hero-photo" src="/img/forest-fire.jpg" alt="산불 및 재해방지 이미지" />
          <i className="hero-accent" aria-hidden="true" />
        </figure>
      </section>

      {/* ===== 핵심가치 섹션 (그대로) ===== */}
      <section className="values-wrap">
  <h2 className="values-title reveal-on-scroll">경영 방침 : 3B</h2>

  <p className="values-subtitle reveal-on-scroll">
    넓고 푸른 하늘 아래 자연과 사람이 공존하는 세상을 만들기 위해
    <b> 대건이앤에스</b>는 <b>3B(Base, Belief, Balance)</b>를 핵심가치로 삼습니다.
  </p>

  <div className="values-grid">
    {VALUES_3B.map(v => (
      <article
        key={v.key}
        className={`value-card ${v.key} reveal-on-scroll`}
        aria-label={v.en}
      >
        <div className={`value-circle ${v.key}`} aria-hidden="true">
          <div className="value-en">{v.en}</div>
        </div>

        <div className="value-text">
          <p className="value-punch">{v.punch}</p>
          <h3 className="value-ko">{v.ko}</h3>
          <p className="value-desc">{v.desc}</p>
        </div>
      </article>
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
}
