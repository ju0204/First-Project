import React, { useEffect } from 'react';
import CompanyTabs from './companyTabs';
import CreativeIcon from '../image/creative.png';
import HarmonyIcon from '../image/harmony.png';
import GrowthIcon from '../image/growth.png';
import './about.css';

/* 핵심가치 데이터: 기존 그대로 */
const VALUES_3B = [
  {
    key: '창의',
    icon: CreativeIcon,
    en: '창의',
    ko: '새로운 도전',
    ko2: '지식과 독창성',
    punch: '안전하고 튼튼한',
    desc:
      '축적된 노하우와 전문지식으로 독창적인 기술력을 결합하여 안전하고 효율적인 최적의 솔루션을 제공합니다.',
  },
  {
    key: '조화',
    icon: HarmonyIcon,
    en: '조화',
    ko: '상호존중',
    ko2: '자연과 공존',
    punch: '상호간의 든든한',
    desc:
      '구성원 및 파트너십 간의 상호존중과 배려를 바탕으로 사람과 자연이 조화롭게 서로 공존할 수 있는 관계를 만들어 갑니다.',
  },
  {
    key: '성장',
    icon: GrowthIcon,
    en: '성장',
    ko: '의지와 열정',
    ko2: '지속가능',
    punch: '자연과의 반듯한',
    desc:
      '성장의 원동력은 뜨거운 열정입니다. 불굴의 의지로 한계를 돌파하며, 사회와 환경에 기여하는 지속가능한 기업으로 거듭나겠습니다.',
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
      <CompanyTabs title="경영이념" />

      {/* 히어로(좌 텍스트 / 우 이미지) */}
      {/* <section className="about-hero reveal-on-scroll">
        <div className="hero-copy">
          <div className="hero-eyebrow">회사소개</div>
          <h2 className="hero-title">
            <span>We Will</span><br />
            <span>Make It Possible</span>
          </h2>
          <h3 className="hero-subtitle">산불 소화시설 및 재해 방지 전문 기업</h3>
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
      </section> */}

      {/* ===== 핵심가치 섹션 (그대로) ===== */}
  
  <div className="about-page-title-wrap">
    <h2 className="about-page-title">경영이념</h2>
  </div>

  <section className="vision-section reveal-on-scroll">
    <div className="vision-head">
      <p className="vision-eyebrow">VISION</p>
      <h2 className="vision-title">비전</h2>
    </div>

    <div className="vision-box">
      <p className="vision-text">
        " 창의적인 도전으로 지속 가능한 성장 속에 자연과 사람이 조화롭게 공존할 수 있는 세상을 만들어갑니다 "
      </p>
    </div>
  </section>



  <section className="values-wrap">
  
    <div className="vision-head">
      <p className="vision-eyebrow">Core Values</p>
      <h2 className="vision-title">핵심가치</h2>
  </div>

  <div className="values-grid">
    {VALUES_3B.map(v => (
      <article
        key={v.key}
        className={`value-card ${v.key} reveal-on-scroll`}
        aria-label={v.en}
      >
        <div className={`value-circle ${v.key}`} aria-hidden="true">
          <img src={v.icon} alt="" className="value-icon" />
          <div className="value-en">{v.en}</div>
        </div>

        <div className="value-text">
          {/* <p className="value-punch">{v.punch}</p> */}
          <p className="value-ko">{v.ko}</p>
          <p className="value-ko">{v.ko2}</p>
          <p className="value-desc">{v.desc}</p>
        </div>
      </article>
    ))}
  </div>
</section>

    </div>
  );
}
