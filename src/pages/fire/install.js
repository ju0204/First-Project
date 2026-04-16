import React, { useMemo, useState, useEffect } from "react";
import './install.css';
import FireTab from './fireTab';

const RECORDS = [
  { id: 1, year: 2018, month: 3, site: "관음사 사찰", location: "서울", projectType: "사찰 공사", period: "2018-03~2018-06", client: "관악구청", contractor: "도원건설", image: "https://picsum.photos/seed/rec-1/800/600", images: ["https://picsum.photos/seed/rec-1-1/800/600","https://picsum.photos/seed/rec-1-2/800/600","https://picsum.photos/seed/rec-1-3/800/600"] },
  { id: 2, year: 2018, month: 5, site: "청룡사 사찰", location: "경기", projectType: "전기 공사", period: "2018-05~2018-08", client: "안성시청", contractor: "산림조합", image: "https://picsum.photos/seed/rec-2/800/600", images: ["https://picsum.photos/seed/rec-2-1/800/600","https://picsum.photos/seed/rec-2-2/800/600"] },
  { id: 3, year: 2019, month: 2, site: "서운산 자연휴양림", location: "경기", projectType: "조성 공사", period: "2019-02~2019-09", client: "안성시청", contractor: "산림조합", image: "https://picsum.photos/seed/rec-3/800/600", images: ["https://picsum.photos/seed/rec-3-1/800/600","https://picsum.photos/seed/rec-3-2/800/600"] },
  { id: 4, year: 2019, month: 3, site: "테스트 공사 4", location: "서울", projectType: "조경 공사", period: "2019-03~2019-07", client: "서울시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-4/800/600", images: ["https://picsum.photos/seed/rec-4-1/800/600","https://picsum.photos/seed/rec-4-2/800/600"] },
  { id: 5, year: 2020, month: 1, site: "테스트 공사 5", location: "부산", projectType: "전기 공사", period: "2020-01~2020-06", client: "부산시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-5/800/600", images: ["https://picsum.photos/seed/rec-5-1/800/600","https://picsum.photos/seed/rec-5-2/800/600"] },
  { id: 6, year: 2020, month: 4, site: "테스트 공사 6", location: "대전", projectType: "시설 공사", period: "2020-04~2020-09", client: "대전시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-6/800/600", images: ["https://picsum.photos/seed/rec-6-1/800/600","https://picsum.photos/seed/rec-6-2/800/600"] },
  { id: 7, year: 2021, month: 2, site: "테스트 공사 7", location: "인천", projectType: "조성 공사", period: "2021-02~2021-08", client: "인천시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-7/800/600", images: ["https://picsum.photos/seed/rec-7-1/800/600","https://picsum.photos/seed/rec-7-2/800/600"] },
  { id: 8, year: 2021, month: 5, site: "테스트 공사 8", location: "광주", projectType: "조경 공사", period: "2021-05~2021-10", client: "광주시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-8/800/600", images: ["https://picsum.photos/seed/rec-8-1/800/600","https://picsum.photos/seed/rec-8-2/800/600"] },
  { id: 9, year: 2022, month: 3, site: "테스트 공사 9", location: "울산", projectType: "전기 공사", period: "2022-03~2022-09", client: "울산시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-9/800/600", images: ["https://picsum.photos/seed/rec-9-1/800/600","https://picsum.photos/seed/rec-9-2/800/600"] },
  { id: 10, year: 2022, month: 7, site: "테스트 공사 10", location: "세종", projectType: "시설 공사", period: "2022-07~2022-12", client: "세종시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-10/800/600", images: ["https://picsum.photos/seed/rec-10-1/800/600","https://picsum.photos/seed/rec-10-2/800/600"] },
  { id: 11, year: 2023, month: 1, site: "테스트 공사 11", location: "경기", projectType: "조경 공사", period: "2023-01~2023-06", client: "경기도청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-11/800/600", images: ["https://picsum.photos/seed/rec-11-1/800/600","https://picsum.photos/seed/rec-11-2/800/600"] },
  { id: 12, year: 2023, month: 4, site: "테스트 공사 12", location: "강원", projectType: "조성 공사", period: "2023-04~2023-10", client: "강원도청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-12/800/600", images: ["https://picsum.photos/seed/rec-12-1/800/600","https://picsum.photos/seed/rec-12-2/800/600"] },
  { id: 13, year: 2024, month: 2, site: "테스트 공사 13", location: "제주", projectType: "전기 공사", period: "2024-02~2024-08", client: "제주시청", contractor: "테스트건설", image: "https://picsum.photos/seed/rec-13/800/600", images: ["https://picsum.photos/seed/rec-13-1/800/600","https://picsum.photos/seed/rec-13-2/800/600"] },
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
      <FireTab />

      <div className="install-content-wrap">
        {/* 1번째 섹션 */}
        <section className="install-section install-section-first">
          <div className="install-first-text">
            <h2 className="install-first-title">제조부문</h2>

            <p className="install-first-summary">
              파라텍은 1973년, 대한민국 소방안전의 시작과 함께 설립된 회사로
              <br />
              국내 최초로 스프링클러를 개발, 생산 및 인증을 받았습니다.
            </p>

            <p className="install-first-description">
              현재, 파라텍의 제품은 국내 인증은 물론 UL/FM 등 해외인증을 취득하여 대한민국의 소방제품 분야를 선도하고 있습니다.
              <br />
              우수한 품질을 인정받아 여의도 IFC, 인천공항 및 삼성전자 등 국내 유수의 랜드마크 및 기반 시설에 제품을 납품하고 있습니다.
            </p>
          </div>
        </section>

        {/* 2번째 섹션 */}
        <section className="install-section install-section-second">
            <div className="install-process-grid">
                <div className="install-process-item">
                <div className="install-process-icon">🔧</div>
                <h3 className="install-process-title">제안 · 컨설팅</h3>
                <div className="install-process-divider">
                    <span className="install-process-number">1</span>
                </div>
                <ul className="install-process-list">
                    <li>고객 환경 분석 및 요구사항 검토</li>
                    <li>현장 여건에 맞는 기초 제안</li>
                </ul>
                </div>

                <div className="install-process-item">
                <div className="install-process-icon">📐</div>
                <h3 className="install-process-title">설계 · 엔지니어링</h3>
                <div className="install-process-divider">
                    <span className="install-process-number">2</span>
                </div>
                <ul className="install-process-list">
                    <li>시공 전 설계 검토 및 계획 수립</li>
                    <li>환경에 맞는 구조 설계 진행</li>
                </ul>
                </div>

                <div className="install-process-item">
                <div className="install-process-icon">📋</div>
                <h3 className="install-process-title">인 · 허가</h3>
                <div className="install-process-divider">
                    <span className="install-process-number">3</span>
                </div>
                <ul className="install-process-list">
                    <li>관련 절차 검토 및 행정 대응</li>
                    <li>업무 진행에 필요한 문서 정리</li>
                </ul>
                </div>

                <div className="install-process-item">
                <div className="install-process-icon">🏗️</div>
                <h3 className="install-process-title">시공 · 설치</h3>
                <div className="install-process-divider">
                    <span className="install-process-number">4</span>
                </div>
                <ul className="install-process-list">
                    <li>현장 일정에 맞춘 시공 수행</li>
                    <li>품질 기준에 따른 설치 진행</li>
                </ul>
                </div>

                <div className="install-process-item">
                <div className="install-process-icon">✅</div>
                <h3 className="install-process-title">점검 · 유지관리</h3>
                <div className="install-process-divider">
                    <span className="install-process-number">5</span>
                </div>
                <ul className="install-process-list">
                    <li>설치 후 점검 및 성능 확인</li>
                    <li>지속적인 유지관리 지원</li>
                </ul>
                </div>
            </div>
            </section>

        {/* 세번째 섹션 */}
        <section className="intro-section intro-section-third">
          <div className="intro-third-records">
            <h3 className="intro-third-records-title">사 업 실 적</h3>
            <p className="intro-third-records-sub">주요 수행 현장</p>

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
              <p><b>공사기간 </b>{selected.period}</p>

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