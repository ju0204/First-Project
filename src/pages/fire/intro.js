import React from 'react';
import './intro.css';
import FireTab from './fireTab';

export default function Intro() {
  const introImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80';

  return (
    <div className="intro-page">

    <FireTab />

    <div className="intro-content-wrap">
      <section className="intro-section intro-section-first">
        <div className="intro-visual">
          <img src={introImage} alt="일반설비 소개 이미지" />
        </div>

        <div className="intro-content">
          <p className="intro-subtitle">GENERAL FACILITIES</p>
          <h2 className="intro-title">일반설비</h2>
          <p className="intro-description">
            공동주택, 교육문화시설, 종합병원, 업무시설 등 다양한 사업영역에서
            축적한 노하우와 전문 인력들을 바탕으로 도시의 공간에 새로운 가치를 더하고,
            보다 나은 환경을 만들기 위하여 끊임없이 노력하고 있습니다.
          </p>
        </div>
      </section>

      <section className="intro-section intro-section-second">
        <div className="intro-text-block">
            <h3 className="intro-second-title">
            소방은 <span>예방</span>이 시작입니다.
            </h3>

            <p className="intro-second-summary">
            크라운방재(주)는 다양한 건축물과 시설물의 소방시설이 정상적으로 작동되도록
            <span> 정기적인 점검, 유지보수, 개선 관리</span>를 체계적으로 수행합니다.
            </p>

            <p className="intro-second-description">
            소방시설 유지관리는 단순한 점검을 넘어, 생명을 보호하고 재산 피해를 최소화하는
            사전 예방의 핵심입니다.
            <br />
            당사는 관련 법령에 따른 정기점검(종합정밀점검/작동기능점검)은 물론, 고객 맞춤형
            점검 계획 수립과 데이터 기반의 위험 요소 분석을 통해 한 차원 높은 품질의
            서비스를 제공합니다.
            </p>
        </div>
        </section>


      <section className="intro-section intro-section-third">
        <h3 className="intro-third-title intro-third-title-desktop">
            산불소화시설이 필요한 곳
        </h3>

        <div className="intro-third-row">
            <div className="intro-third-visual">
            <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
                alt="산불소화시설 관련 이미지"
            />
            </div>

            <div className="intro-third-content">
            <h3 className="intro-third-title intro-third-title-mobile">
                산불소화시설이 필요한 곳
            </h3>

            <ul className="intro-third-list">
                <li>자연휴양림, 산림 및 목재 체험장</li>
                <li>시험림, 보호림 등 보호할 가치가 높은 산림</li>
                <li>농산촌 등 산림과 인접한 지역</li>
                <li>산불이 빈번하게 발생하는 지역</li>
                <li>대형산불로 확산될 우려가 큰 지역</li>
                <li>그 외 산불로 인해 재산상의 큰 피해가 예상되는 지역</li>
            </ul>
            </div>
        </div>
        </section>
        </div>
    </div>
  );
}