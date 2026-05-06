import React, { useMemo, useState, useEffect } from "react";
import './install.css';
import Contract from '../image/contract.png';
import Repair from '../image/repair.png';
import Management from '../image/management.png';
import FireTab from './fireTab';

  const introImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80';

const RECORDS = [
  { id: 1, year: 2026, month: 1, site: "전남 강진군 주작산자연휴양림", location: "전남 강진군", projectType: "산불소화시설", period: "2026-01", image: "/images/performance/2026/2026-1-1.jpg", images: ["/images/performance/2026/2026-1-2.jpg","/images/performance/2026/2026-1-3.jpg"] },
  { id: 2, year: 2026, month: 1, site: "전남 광양시 백운사 사찰", location: "전남 광양시", projectType: "산불소화시설", period: "2026-01", image: "/images/performance/2026/2026-2-1.jpg", images: ["/images/performance/2026/2026-2-2.jpg","/images/performance/2026/2026-2-3.jpg"] },
  { id: 3, year: 2025, month: 11, site: "전북 고창군 국립제2치유센터", location: "전북 고창군", projectType: "산불소화시설", period: "2025-11", image: "/images/performance/2025/2025-1-1.jpg", images: ["/images/performance/2025/2025-1-2.jpg"] },
  { id: 4, year: 2025, month: 10, site: "서울시 수도방위사령부", location: "서울시 관악구", projectType: "산불소화시설", period: "2025-10", image: "/images/performance/2025/2025-2-1.jpg", images: [] },
  { id: 5, year: 2024, month: 12, site: "전남 진도군 운림산림욕장", location: "전남 진도군", projectType: "산불소화시설", period: "2024-12", image: "/images/performance/2024/2024-1-1.jpg", images: ["/images/performance/2024/2024-1-2.jpg","/images/performance/2024/2024-1-3.jpg"] },
  { id: 6, year: 2024, month: 12, site: "서울시 서대문구 인왕산 일원", location: "서울시 서대문구", projectType: "산불소화시설", period: "2024-12", image: "/images/performance/2024/2024-2-1.jpg", images: ["/images/performance/2024/2024-2-2.jpg","/images/performance/2024/2024-2-3.jpg"] },
  { id: 7, year: 2024, month: 12, site: "경남 김해시 목재문화박물관", location: "경남 김해시", projectType: "산불소화시설", period: "2024-12", image: "/images/performance/2024/2024-3-1.jpg", images: ["/images/performance/2024/2024-3-2.jpg","/images/performance/2024/2024-3-3.jpg"] },
  { id: 8, year: 2024, month: 6, site: "충북 음성군 백야자연휴양림", location: "충북 음성군", projectType: "산불소화시설", period: "2024-06", image: "/images/performance/2024/2024-4-1.jpg", images: ["/images/performance/2024/2024-4-2.jpg","/images/performance/2024/2024-4-3.jpg"] },
  { id: 9, year: 2024, month: 4, site: "경기도 군포시 수리사 사찰", location: "경기도 군포시", projectType: "산불소화시설", period: "2024-04", image: "/images/performance/2024/2024-5-1.jpg", images: ["/images/performance/2024/2024-5-2.jpg","/images/performance/2024/2024-5-3.jpg"] },
  { id: 10, year: 2023, month: 12, site: "전남 강진군 주작산자연휴양림", location: "전남 강진군", projectType: "산불소화시설", period: "2023-12", image: "/images/performance/2023/2023-1-1.jpg", images: ["/images/performance/2023/2023-1-2.jpg","/images/performance/2023/2023-1-3.jpg"] },
  { id: 11, year: 2023, month: 12, site: "충북 괴산군 성불산자연휴양림", location: "충북 괴산군", projectType: "산불소화시설", period: "2023-12", image: "/images/performance/2023/2023-2-1.jpg", images: ["/images/performance/2023/2023-2-2.jpg","/images/performance/2023/2023-2-3.jpg"] },
  { id: 12, year: 2023, month: 11, site: "전남 순천시 순천자연휴양림", location: "전남 순천시", projectType: "산불소화시설", period: "2023-11", image: "/images/performance/2023/2023-3-1.jpg", images: ["/images/performance/2023/2023-3-2.jpg","/images/performance/2023/2023-3-3.jpg"] },
  { id: 13, year: 2023, month: 11, site: "전남 광양시 백운산자연휴양림", location: "전남 광양시", projectType: "산불소화시설", period: "2023-11", image: "/images/performance/2023/2023-4-1.jpg", images: ["/images/performance/2023/2023-4-2.jpg","/images/performance/2023/2023-4-3.jpg"] },
  { id: 14, year: 2023, month: 11, site: "전남 화순군 한천자연휴양림", location: "전남 화순군", projectType: "산불소화시설", period: "2023-11", image: "/images/performance/2023/2023-5-1.jpg", images: ["/images/performance/2023/2023-5-2.jpg","/images/performance/2023/2023-5-3.jpg"] },
  { id: 15, year: 2023, month: 8, site: "충남 금산군 신안사 사찰", location: "충남 금산군", projectType: "산불소화시설", period: "2023-08", image: "/images/performance/2023/2023-6-1.jpg", images: ["/images/performance/2023/2023-6-2.jpg","/images/performance/2023/2023-6-3.jpg"] },
  { id: 16, year: 2023, month: 8, site: "충남 금산군 보석사 사찰", location: "충남 금산군", projectType: "산불소화시설", period: "2023-08", image: "/images/performance/2023/2023-7-1.jpg", images: ["/images/performance/2023/2023-7-2.jpg","/images/performance/2023/2023-7-3.jpg"] },
  { id: 17, year: 2022, month: 12, site: "전남 고흥군 팔영산치유의숲", location: "전남 고흥군", projectType: "산불소화시설", period: "2022-12", image: "/images/performance/2022/2022-1-1.jpg", images: ["/images/performance/2022/2022-1-2.jpg","/images/performance/2022/2022-1-3.jpg"] },
  { id: 18, year: 2022, month: 9, site: "전북 완주군 원등사 사찰", location: "전북 완주군", projectType: "산불소화시설", period: "2022-09", image: "/images/performance/2022/2022-2-1.jpg", images: ["/images/performance/2022/2022-2-2.jpg","/images/performance/2022/2022-2-3.jpg"] },
  { id: 19, year: 2022, month: 8, site: "충북 청주시 옥화자연휴양림", location: "충북 청주시", projectType: "산불소화시설", period: "2022-08", image: "/images/performance/2022/2022-3-1.jpg", images: ["/images/performance/2022/2022-3-2.jpg","/images/performance/2022/2022-3-3.jpg"] },
  { id: 20, year: 2021, month: 12, site: "충남 청양군 먹거리타운", location: "충남 청양군", projectType: "산불소화시설", period: "2021-12", image: "/images/performance/2021/2021-1-1.jpg", images: ["/images/performance/2021/2021-1-2.jpg","/images/performance/2021/2021-1-3.jpg"] },
  { id: 21, year: 2021, month: 12, site: "충남 청양군 고추마을센터", location: "충남 청양군", projectType: "산불소화시설", period: "2021-12", image: "/images/performance/2021/2021-2-1.jpg", images: ["/images/performance/2021/2021-2-2.jpg","/images/performance/2021/2021-2-3.jpg"] },
  { id: 22, year: 2021, month: 12, site: "전북 김제시 청룡사 사찰", location: "전북 김제시", projectType: "산불소화시설", period: "2021-12", image: "/images/performance/2021/2021-3-1.jpg", images: ["/images/performance/2021/2021-3-2.jpg","/images/performance/2021/2021-3-3.jpg"] },
  { id: 23, year: 2021, month: 11, site: "전남 화순군 개천사 사찰", location: "전남 화순군", projectType: "산불소화시설", period: "2021-11", image: "/images/performance/2021/2021-4-1.jpg", images: ["/images/performance/2021/2021-4-2.jpg","/images/performance/2021/2021-4-3.jpg"] },
  { id: 24, year: 2021, month: 10, site: "경기도 용인시 용인자연휴양림", location: "경기도 용인시", projectType: "산불소화시설", period: "2021-10", image: "/images/performance/2021/2021-5-1.jpg", images: ["/images/performance/2021/2021-5-2.jpg","/images/performance/2021/2021-5-3.jpg"] },
  { id: 25, year: 2021, month: 7, site: "경기도 수원시 용화사 사찰", location: "경기도 수원시", projectType: "산불소화시설", period: "2021-07", image: "/images/performance/2021/2021-6-1.jpg", images: ["/images/performance/2021/2021-6-2.jpg","/images/performance/2021/2021-6-3.jpg"] },
  { id: 26, year: 2021, month: 6, site: "충북 음성군 수레의산자연휴양림", location: "충북 음성군", projectType: "산불소화시설", period: "2021-06", image: "/images/performance/2021/2021-7-1.jpg", images: ["/images/performance/2021/2021-7-2.jpg","/images/performance/2021/2021-7-3.jpg"] },
  { id: 27, year: 2021, month: 5, site: "경남 거제시 숲소리공원", location: "경남 거제시", projectType: "산불소화시설", period: "2021-05", image: "/images/performance/2021/2021-8-1.jpg", images: ["/images/performance/2021/2021-8-2.jpg","/images/performance/2021/2021-8-3.jpg"] },
  { id: 28, year: 2020, month: 12, site: "경남 함양군 대봉산휴양밸리", location: "경남 함양군", projectType: "산불소화시설", period: "2020-12", image: "/images/performance/2020/2020-1-1.jpg", images: ["/images/performance/2020/2020-1-2.jpg","/images/performance/2020/2020-1-3.jpg"] },
  { id: 29, year: 2020, month: 11, site: "충남 청양군 칠갑산자연휴양림", location: "충남 청양군", projectType: "산불소화시설", period: "2020-11", image: "/images/performance/2020/2020-2-1.jpg", images: ["/images/performance/2020/2020-2-2.jpg","/images/performance/2020/2020-2-3.jpg"] },
  { id: 30, year: 2020, month: 11, site: "경기도 수원시 봉녕사 사찰", location: "경기도 수원시", projectType: "산불소화시설", period: "2020-11", image: "/images/performance/2020/2020-3-1.jpg", images: ["/images/performance/2020/2020-3-2.jpg","/images/performance/2020/2020-3-3.jpg"] },
  { id: 31, year: 2020, month: 9, site: "충남 서산시 망일사 사찰", location: "충남 서산시", projectType: "산불소화시설", period: "2020-09", image: "/images/performance/2020/2020-4-1.jpg", images: ["/images/performance/2020/2020-4-2.jpg","/images/performance/2020/2020-4-3.jpg"] },
  { id: 32, year: 2020, month: 8, site: "경기도 안양시 서울대학교수목원", location: "경기도 안양시", projectType: "산불소화시설", period: "2020-08", image: "/images/performance/2020/2020-5-1.jpg", images: ["/images/performance/2020/2020-5-2.jpg","/images/performance/2020/2020-5-3.jpg"] },
  { id: 33, year: 2020, month: 6, site: "충북 휴양공원사업소 좌구산자연휴양림", location: "충북 휴양공원사업소", projectType: "산불소화시설", period: "2020-06", image: "/images/performance/2020/2020-6-1.jpg", images: ["/images/performance/2020/2020-6-2.jpg","/images/performance/2020/2020-6-3.jpg"] },
  { id: 34, year: 2020, month: 5, site: "충북 보은군 알프스자연휴양림", location: "충북 보은군", projectType: "산불소화시설", period: "2020-05", image: "/images/performance/2020/2020-7-1.jpg", images: ["/images/performance/2020/2020-7-2.jpg","/images/performance/2020/2020-7-3.jpg"] },
  { id: 35, year: 2019, month: 10, site: "경기도 안성시 서운산자연휴양림", location: "경기도 안성시", projectType: "산불소화시설", period: "2019-10", image: "/images/performance/2019/2019-1-1.jpg", images: ["/images/performance/2019/2019-1-2.jpg","/images/performance/2019/2019-1-3.jpg"] },
  { id: 36, year: 2019, month: 10, site: "전남 해남군 가학산자연휴양림", location: "전남 해남군", projectType: "산불소화시설", period: "2019-10", image: "/images/performance/2019/2019-2-1.jpg", images: ["/images/performance/2019/2019-2-2.jpg","/images/performance/2019/2019-2-3.jpg"] },
  { id: 37, year: 2019, month: 9, site: "전남 고흥군 마복산목재체험장", location: "전남 고흥군", projectType: "산불소화시설", period: "2019-09", image: "/images/performance/2019/2019-3-1.jpg", images: ["/images/performance/2019/2019-3-2.jpg","/images/performance/2019/2019-3-3.jpg"] },
  { id: 38, year: 2019, month: 6, site: "경기도 과천시 관악산 일원", location: "경기도 과천시", projectType: "산불소화시설", period: "2019-06", image: "/images/performance/2019/2019-4-1.jpg", images: ["/images/performance/2019/2019-4-2.jpg"] },
  { id: 39, year: 2019, month: 1, site: "경기도 안성시 청룡사 사찰", location: "경기도 안성시", projectType: "산불소화시설", period: "2019-01", image: "/images/performance/2019/2019-5-1.jpg", images: ["/images/performance/2019/2019-5-2.jpg","/images/performance/2019/2019-5-3.jpg"] },
  { id: 40, year: 2018, month: 12, site: "서울시 관악구 관음사 사찰", location: "서울시 관악구", projectType: "산불소화시설", period: "2018-12", image: "/images/performance/2018/2018-1-1.jpg", images: ["/images/performance/2018/2018-1-2.jpg","/images/performance/2018/2018-1-3.jpg"] },

];

export default function IntroPage() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  const PER_PAGE = 8;

  const sorted = useMemo(() => {
    return RECORDS.slice().sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.month - a.month;
    });
  }, []);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));

  const current = useMemo(() => {
    return sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  }, [sorted, page]);
  return (
    <div className="install-page">
      <FireTab title="시공·실적" />

      <div className="install-content-wrap">
        {/* 1번째 섹션 */}
        <section className="install-section intro-section-first">
        <div className="install-visual">
          <img src={introImage} alt="일반설비 소개 이미지" />
        </div>

        <div className="install-content">
          <p className="install-subtitle">SOLUTIONS</p>
          <h2 className="install-title">산불소화시설 시공 솔루션</h2>
          <p className="install-description">
            소중한 재산과 인명,산림자원을 산불로부터 보호하고 직접적인 진화와 예방으로 지켜냅니다.
          </p>
        </div>
      </section>

        {/* 2번째 섹션 */}
        <section className="install-section install-section-second">
          <div className="install-process-wrap">
            <p className="install-process-heading">시공 솔루션</p>
            <div className="install-process-grid">
              <div className="install-process-item">
                <div className="install-process-icon">
                  <img src={Contract} alt="견적, 계약 아이콘" className="install-process-icon-img" />
                </div>
                <h3 className="install-process-title">견적·계약</h3>
                <div className="install-process-divider">
                  <span className="install-process-number">1</span>
                </div>
                <ul className="install-process-list">
                  <li>합리적이고 현실적인 비용산출</li>
                  <li>자연 훼손 최소화 방안 제시</li>
                </ul>
              </div>

              <div className="install-process-item">
                <div className="install-process-icon">
                  <img src={Repair} alt="시공 아이콘" className="install-process-icon-img" />
                </div>
                <h3 className="install-process-title">시공</h3>
                <div className="install-process-divider">
                  <span className="install-process-number">2</span>
                </div>
                <ul className="install-process-list">
                  <li>수년간의 기술 노하우로 전문 인력 시공</li>
                  <li>안전우선과 무하자시공</li>
                </ul>
              </div>

              <div className="install-process-item">
                <div className="install-process-icon">
                  <img src={Management} alt="사후관리 아이콘" className="install-process-icon-img" />
                </div>
                <h3 className="install-process-title">사후관리</h3>
                <div className="install-process-divider">
                  <span className="install-process-number">3</span>
                </div>
                <ul className="install-process-list">
                  <li>철저한 전문인력의 시설운영관리</li>
                  <li>최적의 성능발휘를 위한 차별화된 서비스 제공</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 세번째 섹션 */}
        <section className="intro-section intro-section-third">
          <div className="intro-third-records">
            <h3 className="intro-third-records-title">사업실적</h3>

            <div className="rec-grid intro-rec-grid">
              {current.map((r) => (
                <article
                  className="rec-card"
                  key={r.id}
                  onClick={() => setSelected(r)}
                >
                  <div className="rec-thumb">
                    <img src={r.image} alt={r.site} />
                  </div>

                  <div className="rec-info">
                    <h3 className="rec-name">{r.site}</h3>
                    <p className="rec-date">
                      {r.year}.{String(r.month || 1).padStart(2, "0")}
                    </p>
                    <span className="rec-plus">+</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="rec-pagination intro-rec-pagination">
              <button
                className="pg-arrow"
                onClick={() => setPage(1)}
              >
                {"<<"}
              </button>

              <button
                className="pg-arrow"
                onClick={() => setPage(Math.max(1, page - 1))}
              >
                {"<"}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`pg-num ${page === num ? "active" : ""}`}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))}

              <button
                className="pg-arrow"
                onClick={() => setPage(Math.min(totalPages, page + 1))}
              >
                {">"}
              </button>

              <button
                className="pg-arrow"
                onClick={() => setPage(totalPages)}
              >
                {">>"}
              </button>
            </div>
          </div>
        </section>
      </div>

      {selected && (
        <div className="rec-modal" onClick={() => setSelected(null)}>
          <div className="rec-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setSelected(null)}>
              ×
            </button>

            <div className="modal-right">
              <img src={selected.image} alt={selected.site} />
            </div>

            <div className="modal-left">
              <h2>{selected.site}</h2>
              <hr />

              <p><b>위치 </b>{selected.location}</p>
              <p><b>사업명 </b>{selected.projectType}</p>
              <p><b>공사시기 </b>{selected.period}</p>

              <hr />

              <h3>현장사진</h3>
              <div className="modal-gallery">
                {selected.images?.map((img, i) => (
                  <img key={i} src={img} alt={`${selected.site} ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}