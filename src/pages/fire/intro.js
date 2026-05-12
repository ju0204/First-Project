import React from 'react';
import './intro.css';
import Contract from '../image/contract.png';
import Intro2 from '../image/intro2.png';
import Intro3 from '../image/intro3.png';
import Repair from '../image/repair.png';
import Management from '../image/management.png';
import MainB1 from '../image/main-b1.jpg';
import Facility1 from '../image/intro31.jpg';
import Facility2 from '../image/intro4.jpg';
import Facility3 from '../image/intro33.jpg';
import FireTab from './fireTab';

export default function Intro() {
  const introImage = MainB1;

  return (
    <div className="intro-page">

    <FireTab title="산불소화시설" />

    <div className="intro-content-wrap">
      <section className="intro-section intro-section-first">
        <div className="intro-visual">
          <img src={introImage} alt="일반설비 소개 이미지" />
        </div>

        <div className="intro-content">
          <p className="intro-subtitle">INSTALLATION LOCATIONS</p>
          <h2 className="intro-title">산불소화시설설치장소</h2>

          <div className="intro-description">
            <ul className="intro-description-list">
              <li>자연휴양림, 목재 체험장</li>
              <li>농·산촌 산림 인접 지역</li>
              <li>산불이 빈번하게 발생하는 지역</li>
              <li>대형산불로 확산 우려가 큰 지역</li>
            </ul>

            <ul className="intro-description-list">
              <li>전통사찰, 군부대 등 산불 취약 지역</li>
              <li>국가 중요 시설물</li>
              <li>그 외 리조트 및 호텔 등 시설물</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2번째 섹션 */}
        <section className="intro-section intro-section-second">
          <div className="intro-process-wrap">
            <p className="intro-process-heading">시공 솔루션</p>

            <div className="intro-process-grid">
              <div className="intro-process-item">
                <div className="intro-process-icon">
                  <img src={Contract} alt="의뢰, 제안 아이콘" className="intro-process-icon-img" />
                </div>
                <h3 className="intro-process-title">의뢰·제안</h3>
                <div className="intro-process-divider">
                  <span className="intro-process-number">1</span>
                </div>
                <ul className="intro-process-list">
                  <li>설치효과 및 방향성 제시</li>
                  <li>자연 훼손 최소화 방안 제시</li>
                </ul>
              </div>

              <div className="intro-process-item">
                <div className="intro-process-icon">
                  <img src={Intro2} alt="검토 아이콘" className="intro-process-icon-img" />
                </div>
                <h3 className="intro-process-title">검토(수정)</h3>
                <div className="intro-process-divider">
                  <span className="intro-process-number">2</span>
                </div>
                <ul className="intro-process-list">
                  <li>관계법령 검토 및 지침 참고</li>
                  <li>타당성 여부 판단</li>
                </ul>
              </div>

              <div className="intro-process-item">
                <div className="intro-process-icon">
                  <img src={Intro3} alt="설계자문 아이콘" className="intro-process-icon-img" />
                </div>
                <h3 className="intro-process-title">설계자문</h3>
                <div className="intro-process-divider">
                  <span className="intro-process-number">3</span>
                </div>
                <ul className="intro-process-list">
                  <li>국내 수준급 역량의 설계자문</li>
                  <li>지침에 의한 핵심시설 설계자문</li>
                </ul>
              </div>

              <div className="intro-process-item">
                <div className="intro-process-icon">
                  <img src={Repair} alt="시공 아이콘" className="intro-process-icon-img" />
                </div>
                <h3 className="intro-process-title">시공</h3>
                <div className="intro-process-divider">
                  <span className="intro-process-number">4</span>
                </div>
                <ul className="intro-process-list">
                  <li>수년간의 시공 노하우로 효율적인 기술력 제공</li>
                  <li>안전 우선과 하자제로화 시공</li>
                </ul>
              </div>

              <div className="intro-process-item">
                <div className="intro-process-icon">
                  <img src={Management} alt="사후관리 아이콘" className="intro-process-icon-img" />
                </div>
                <h3 className="intro-process-title">사후관리</h3>
                <div className="intro-process-divider">
                  <span className="intro-process-number">5</span>
                </div>
                <ul className="intro-process-list">
                  <li>최적의 성능발휘를 위한 차별화된 사후관리</li>
                  <li>철저한 전문인력의 시설운영 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      <section className="intro-section intro-section-third">
        <div className="intro-third-wrap">
          <h2 className="intro-third-heading">중요 구성 시설물</h2>

          <div className="intro-third-box-group">
            <div className="intro-third-box">
              <div className="intro-third-left">
                <div className="intro-third-photo">
                  <img
                    src={Facility1}
                    alt="수관수막설비"
                  />
                </div>
              </div>

              <div className="intro-third-right">
                <p className="intro-third-right-title">수관수막설비</p>
                <ul className="intro-third-right-list">
                  <li>보호대상 시설물 주변 입목보다 높은 위치에서 360°로 회전하며 물을 분사할 수 있는 타워형 살수 장치</li>
                </ul>
              </div>
            </div>

            <div className="intro-third-box">
              <div className="intro-third-left">
                <div className="intro-third-photo">
                  <img
                    src={Facility2}
                    alt="기계실"
                  />
                </div>
              </div>

              <div className="intro-third-right">
                <p className="intro-third-right-title">기계설비</p>
                <ul className="intro-third-right-list">
                  <li>물탱크, 가압송수장치(펌프), 옥내외배관 등으로 구성된 기계 설비류</li>
                </ul>
              </div>
            </div>

            <div className="intro-third-box">
              <div className="intro-third-left">
                <div className="intro-third-photo">
                  <img
                    src={Facility3}
                    alt="산불진화용 급수전 및 관리로"
                  />
                </div>
              </div>

              <div className="intro-third-right">
                <p className="intro-third-right-title">기계실 / 관리로</p>
                <ul className="intro-third-right-list">
                  <li>산불소화시설 중요시설설비를 보호하기위한 가설건축물</li>
                  <li>수관수막설비과 그 부대시설의 운영, 관리를 위해 인력 및 장비가 원활하게 통행할 수 있도록 유지하는 통로</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    </div>
  );
}