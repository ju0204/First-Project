import React from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer';
import './work.css';

const DEPARTMENTS = [
  { name: '기획과', duties: ['업무체결', '사업추진', '현장지원'] },
  { name: '사업과', duties: ['공사/시공', '현장관리', '품질관리'] },
  { name: '재무과', duties: ['총무, 회계', '인사관리', '자재관리'] },
];

/** 데스크톱: 가로바 + 드롭라인 (픽셀 스냅) */
function OrgLinesDesktop({ count }) {
  const vbW = 1000;
  const trunk = 34;
  const drop = 44;
  const vbH = trunk + drop;
  const centers = Array.from({ length: count }, (_, k) => ((2 * k + 1) / (2 * count)) * vbW);
  const x1 = centers[0];
  const x2 = centers[count - 1];

  return (
    <svg
      className="org-svg desktop"
      viewBox={`0 0 ${vbW} ${vbH}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <line x1={vbW / 2} y1="0" x2={vbW / 2} y2={trunk} className="line" />
      <line x1={x1} y1={trunk} x2={x2} y2={trunk} className="line" />
      {centers.map((cx, i) => (
        <line key={i} x1={cx} y1={trunk} x2={cx} y2={vbH} className="line" />
      ))}
    </svg>
  );
}

/** 모바일: 중앙 세로 트렁크만 */
function OrgLinesMobile() {
  const w = 100;
  const trunk = 36; // 모바일 트렁크 길이
  return (
    <svg
      className="org-svg mobile"
      viewBox={`0 0 ${w} ${trunk}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <line x1={w / 2} y1="0" x2={w / 2} y2={trunk} className="line" />
    </svg>
  );
}

export default function Work() {
  return (
    <div>
      <CompanyTabs />

      <section className="org-wrap">
        <div className="org-head">
          <h2 className="ceo-pill">대표</h2>
          {/* 데스크톱용 선 */}
          <OrgLinesDesktop count={DEPARTMENTS.length} />
          {/* 모바일용 선 */}
          <OrgLinesMobile />
        </div>

        <ul className="org-grid">
          {DEPARTMENTS.map((dept) => (
            <li className="dept" key={dept.name}>
              <div className="dept-pill">{dept.name}</div>
              <ul className="duties">
                {dept.duties.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
