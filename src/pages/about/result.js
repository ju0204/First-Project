import React, { useEffect, useMemo } from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer';
import './result.css';

/** 원본 데이터 */
const rawItems = [
  // 산불방지급수시설
  { date: '2012.08', text: '국립산림과학원 홍릉시험림 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2012.09', text: '경남 함양군 국유림관리소 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2012.11', text: '경북 봉화군 경제림육성단지 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2012.11', text: '경북 울진군 금강송군락지 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2013.01', text: '부산 해운대구 재송지구 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2013.02', text: '경남 진주시 월아산지구 산불방지급수시설 설치', tag: '산불방지급수시설' },
  { date: '2013.03', text: '경남 밀양시 대법사지구 산불방지급수시설 설치', tag: '산불방지급수시설' },

  // 산불진화용 포 소화약제
  { date: '2012.02', text: '산림항공본부 및 각 지역 산림항공 관리소 납품', tag: '산불진화용 포 소화약제' },
  { date: '2013.03', text: '산림항공본부 및 각 지역 산림항공 관리소 납품', tag: '산불진화용 포 소화약제' },
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
      <CompanyTabs />

      <section className="history-wrap">
        <header className="history-head">
          <h2 className="result-title">회사 연혁</h2>
          <p className="result-sub">안전소방의 성장 과정을 소개합니다</p>
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

      <Footer />
    </div>
  );
}
