import FireTab from './fireTab';

import Consulting1 from '../image/consulting1.png';
import Consulting2 from '../image/consulting2.png';
import Consulting3 from '../image/consulting3.png';

import './consulting.css';

export default function Consulting() {
  const introImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80';

  return (
    <div className="consulting-page">

    <FireTab title="전문컨설팅" />

    <div className="consulting-content-wrap">
      <section className="consulting-section consulting-section-first">
        <div className="consulting-visual">
          <img src={introImage} alt="일반설비 소개 이미지" />
        </div>

        <div className="consulting-content">
          <p className="consulting-subtitle">INSTALLATION LOCATIONS</p>
          <h2 className="consulting-title">컨설팅·제안</h2>

          <div className="consulting-description">
            <p>
                전문 기술력을 가진 업체와 만남은 중요한 시작입니다.<br/>
                수년간의 시공 노하우를 갖춘 저희는 현실적인 컨설팅 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="consulting-section consulting-section-second">
        <div className="consulting-strength-section-wrap">
          <h2 className="consulting-strength-heading">컨설팅 솔루션</h2>

          <div className="consulting-strength-wrap">
            <div className="consulting-strength-card">
              <div className="consulting-strength-icon">
                <img src={Consulting1} alt="시설물 점검 아이콘" className="consulting-strength-icon-img" />
              </div>
              <h3 className="consulting-strength-title">현장자문</h3>
              <ul className="consulting-strength-list">
                <li>정상작동 여부 판단</li>
                <li>월 1회 이상 정기점검</li>
                <li>년 2회 이상 정밀점검</li>
              </ul>
            </div>

            <div className="consulting-strength-card">
              <div className="consulting-strength-icon">
                <img src={Consulting2} alt="시설물 관리 아이콘" className="consulting-strength-icon-img" />
              </div>
              <h3 className="consulting-strength-title">타당성 분석</h3>
              <ul className="consulting-strength-list">
                <li>전문인력의 세심한 시설관리 요령 제공</li>
                <li>효율적인 운영관리 자문 및 노하우 제공</li>
              </ul>
            </div>

            <div className="consulting-strength-card">
              <div className="consulting-strength-icon">
                <img src={Consulting3} alt="유지보수 아이콘" className="consulting-strength-icon-img" />
              </div>
              <h3 className="consulting-strength-title">설계자문</h3>
              <ul className="consulting-strength-list">
                <li>전문인력의 철저한 유지보수</li>
                <li>체계적이고 효율적인 점검 및 수리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


        </div>
    </div>
  );
}
