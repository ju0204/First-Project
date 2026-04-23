import React, { useEffect, useMemo } from 'react';
import CompanyTabs from './companyTabs';
import './result.css';

/** 원본 데이터 */
const rawItems = [
  // 산불방지급수시설
  { date: '2026.01', text: '전남 강진군 주작산자연휴양림', tag: '전남 강진군' },
  { date: '2026.01', text: '전남 광양시 백운사 사찰', tag: '전남 광양시' },

  { date: '2025.11', text: '전북 고창군 국립제2치유센터', tag: '전북 고창군' },
  { date: '2025.10', text: '서울시 수도방위사령부', tag: '서울시 관악구' },

  { date: '2024.12', text: '전남 진도군 운림산림욕장', tag: '전남 진도군' },
  { date: '2024.12', text: '서울시 서대문구 인왕산 일원', tag: '서울시 서대문구' },
  { date: '2024.12', text: '경남 김해시 목재문화박물관', tag: '경남 김해시' },

  { date: '2024.06', text: '충북 음성군 백야자연휴양림', tag: '충북 음성군' },
  { date: '2024.04', text: '경기도 군포시 수리사 사찰', tag: '경기도 군포시' },

  { date: '2023.12', text: '전남 강진군 주작산자연휴양림', tag: '전남 강진군' },
  { date: '2023.12', text: '충북 괴산군 성불산자연휴양림', tag: '충북 괴산군' },

  { date: '2023.11', text: '전남 순천시 순천자연휴양림', tag: '전남 순천시' },
  { date: '2023.11', text: '전남 광양시 백운산자연휴양림', tag: '전남 광양시' },
  { date: '2023.11', text: '전남 화순군 한천자연휴양림', tag: '전남 화순군' },

  { date: '2023.08', text: '충남 금산군 신안사 사찰', tag: '충남 금산군' },
  { date: '2023.08', text: '충남 금산군 보석사 사찰', tag: '충남 금산군' },

  { date: '2022.12', text: '전남 고흥군 팔영산치유의숲', tag: '전남 고흥군' },
  { date: '2022.09', text: '전북 완주군 원등사 사찰', tag: '전북 완주군' },
  { date: '2022.08', text: '충북 청주시 옥화자연휴양림', tag: '충북 청주시' },
  { date: '2021.12', text: '충남 청양군 먹거리타운', tag: '충남 청양군' },
  { date: '2021.12', text: '충남 청양군 고추마을센터', tag: '충남 청양군' },
  { date: '2021.12', text: '전북 김제시 청룡사 사찰', tag: '전북 김제시' },

  { date: '2021.11', text: '전남 화순군 개천사 사찰', tag: '전남 화순군' },

  { date: '2021.10', text: '경기도 용인시 용인자연휴양림', tag: '경기도 용인시' },

  { date: '2021.07', text: '경기도 수원시 용화사 사찰', tag: '경기도 수원시' },

  { date: '2021.06', text: '충북 음성군 수레의산자연휴양림', tag: '충북 음성군' },

  { date: '2021.05', text: '경남 거제시 숲소리공원', tag: '경남 거제시' },
  { date: '2020.12', text: '경남 함양군 대봉산휴양밸리', tag: '경남 함양군' },

  { date: '2020.11', text: '충남 청양군 칠갑산자연휴양림', tag: '충남 청양군' },
  { date: '2020.11', text: '경기도 수원시 봉녕사 사찰', tag: '경기도 수원시' },

  { date: '2020.09', text: '충남 서산시 망일사 사찰', tag: '충남 서산시' },

  { date: '2020.08', text: '경기도 안양시 서울대학교수목원', tag: '경기도 안양시' },

  { date: '2020.06', text: '충북 증평군 좌구산자연휴양림', tag: '충북 휴양공업사원소' },

  { date: '2020.05', text: '충북 보은군 알프스자연휴양림', tag: '충북 보은군' },

  { date: '2019.10', text: '경기도 안성시 서운산자연휴양림', tag: '경기도 안성시' },
  { date: '2019.10', text: '전남 해남군 가학산자연휴양림', tag: '전남 해남군' },

  { date: '2019.09', text: '전남 고흥군 마복산국제체험장', tag: '전남 고흥군' },

  { date: '2019.06', text: '경기도 과천시 관악산 일원', tag: '경기도 과천시' },

  { date: '2019.01', text: '경기도 안성시 청룡사 사찰', tag: '경기도 안성시' },

  { date: '2018.12', text: '서울시 관악구 관음사 사찰', tag: '서울시 관악구' },
];

/** 연도 → 월별로 그룹핑 (월 오름차순) */
function groupByYearMonth(items) {
  const byYear = items.reduce((acc, it) => {
    const y = it.date.slice(0, 4);
    (acc[y] = acc[y] || []).push(it);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a)); // 최신연도 우선

  return years.map((year) => {
    const list = byYear[year];
    const byMonth = list.reduce((acc, it) => {
      const m = it.date.split('.')[1]; // 'MM'
      (acc[m] = acc[m] || []).push(it);
      return acc;
    }, {});
    const months = Object.keys(byMonth).sort(); // '01'...'12'
    const rows = months.map((m) => ({ month: m, items: byMonth[m] }));
    return { year, rows };
  });
}

export default function Result() {
  const grouped = useMemo(() => groupByYearMonth(rawItems), []);

  // 스크롤 인뷰 애니메이션 (월 row의 카드 묶음 단위)
  useEffect(() => {
    const targets = document.querySelectorAll('.tl-cards');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <CompanyTabs title="회사 연혁" />

      <section className="history-wrap">
        <header className="history-head">
          <h2 className="result-title">회사 연혁</h2>
          <p className="result-sub">대건이앤에스의 성장 과정을 소개합니다</p>
        </header>

        <div className="timeline">
          {grouped.map((group) => (
            <div className="tl-year-group" key={group.year}>
              {/* 연도 배지 */}
              <div className="tl-year">
                <span className="tl-year-badge">{group.year}</span>
              </div>

              {/* 월별 Row들 */}
              <ol className="tl-list">
                {group.rows.map((row, idx) => {
                  // 월 단위 줄(행). 좌/우 교차 배치
                  const side = idx % 2 === 0 ? 'left' : 'right';
                  return (
                    <li className="tl-row" key={`${group.year}-${row.month}`}>
                      {/* 왼쪽 컬럼 */}
                      <div className="tl-col left">
                        {side === 'left' && (
                          <div className={`tl-cards left`}>
                            {row.items.map((it, i) => (
                              <article className="tl-card" key={i}>
                                <div className="tl-tag">{it.tag}</div>
                                <p className="tl-text">{it.text}</p>
                              </article>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 중앙(세로 라인 + 월 뱃지 + 도트) */}
                      <div className="tl-col center">
                        <span className="tl-dot" aria-hidden />
                        <span className="tl-month-badge">{row.month}</span>
                      </div>

                      {/* 오른쪽 컬럼 */}
                      <div className="tl-col right">
                        {side === 'right' && (
                          <div className={`tl-cards right`}>
                            {row.items.map((it, i) => (
                              <article className="tl-card" key={i}>
                                <div className="tl-tag">{it.tag}</div>
                                <p className="tl-text">{it.text}</p>
                              </article>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
