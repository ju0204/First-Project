import FireTab from './fireTab';

import InspectIcon from '../image/solution1.png';
import ManageIcon from '../image/solution2.png';
import RepairIcon from '../image/solution3.png';

import './repair.css';

export default function Repair() {
  const introImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80';

  return (
    <div className="repair-page">

    <FireTab title="산불소화시설" />

    <div className="repair-content-wrap">
      <section className="repair-section repair-section-first">
        <div className="repair-visual">
          <img src={introImage} alt="일반설비 소개 이미지" />
        </div>

        <div className="repair-content">
          <p className="repair-subtitle">INSTALLATION LOCATIONS</p>
          <h2 className="repair-title">유지보수·점검</h2>

          <div className="repair-description">
            <p>
                산불소화시설은 중요시설물로 언제든 운영 가능한 상태여야 합니다.<br/>
                대건이앤에서는 국내 수준급의 유지관리 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="repair-section repair-section-second">
        <div className="repair-strength-section-wrap">
          <h2 className="repair-strength-heading">유지보수 솔루션</h2>

          <div className="repair-strength-wrap">
            <div className="repair-strength-card">
              <div className="repair-strength-icon">
                <img src={InspectIcon} alt="시설물 점검 아이콘" className="repair-strength-icon-img" />
              </div>
              <h3 className="repair-strength-title">시설물 점검</h3>
              <ul className="repair-strength-list">
                <li>정상작동 여부 판단</li>
                <li>월 1회 이상 정기점검</li>
                <li>년 2회 이상 정밀점검</li>
              </ul>
            </div>

            <div className="repair-strength-card">
              <div className="repair-strength-icon">
                <img src={ManageIcon} alt="시설물 관리 아이콘" className="repair-strength-icon-img" />
              </div>
              <h3 className="repair-strength-title">시설물 관리</h3>
              <ul className="repair-strength-list">
                <li>전문인력의 세심한 시설관리 요령 제공</li>
                <li>효율적인 운영관리 자문 및 노하우 제공</li>
              </ul>
            </div>

            <div className="repair-strength-card">
              <div className="repair-strength-icon">
                <img src={RepairIcon} alt="유지보수 아이콘" className="repair-strength-icon-img" />
              </div>
              <h3 className="repair-strength-title">유지보수</h3>
              <ul className="repair-strength-list">
                <li>전문인력의 철저한 유지보수</li>
                <li>체계적이고 효율적인 점검 및 수리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="repair-section repair-section-third">
        <div className="repair-policy-wrap">
          <h2 className="repair-policy-heading">체계적인 유지보수·점검이 필요할때</h2>

          <div className="repair-policy-grid">
            <div className="repair-policy-column left">
              <div className="repair-policy-card">
                <h3 className="repair-policy-title">전문인력의 정기적인 시설물 점검이 필요할때</h3>
              </div>

              <div className="repair-policy-card">
                <h3 className="repair-policy-title">상시 사용 가능한 최적의 상태를 유지하고 싶을때</h3>
              </div>

              <div className="repair-policy-card">
                <h3 className="repair-policy-title">시설 관리자의 유지관리 업무 부담을 줄이고 싶을때</h3>
              </div>
            </div>

            <div className="repair-policy-column right">
              <div className="repair-policy-card">
                <h3 className="repair-policy-title">절절한 범위의 점검 및 수리가 필요할때</h3>
              </div>

              <div className="repair-policy-card">
                <h3 className="repair-policy-title">신속하고 중요한 보수가 필요할때</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    </div>
  );
}
