import React, { useMemo, useState, useEffect } from "react";
import CompanyTabs from './companyTabs';
import Footer from "../../components/Footer";
import "./record.css";

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

export default function ConstructionRecords() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";   
  } else {
    document.body.style.overflow = "auto";     
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selected]);

  const PER_PAGE = 12;

  

  /** 정렬만 유지 (최신순) */
  const sorted = useMemo(() => {
    return RECORDS.slice().sort(
      (a, b) => b.year - a.year
    );
  }, []);

  /** 페이지 계산 */
  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));

  const current = useMemo(
    () => sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [sorted, page]
  );

  /** 3x3 유지 */
  const paddedItems = useMemo(() => {
    const need = Math.max(0, PER_PAGE - current.length);
    if (need === 0) return current;

    const ghosts = Array.from({ length: need }, (_, i) => ({
      id: `ghost-${page}-${i}`,
      __ghost: true,
    }));

    return [...current, ...ghosts];
  }, [current, page]);

  

  return (
    <div>
      <CompanyTabs />

      <section className="rec-wrap">
        <h2 className="rec-title">공 사 실 적</h2>
        <p className="rec-sub">주요 수행 현장</p>


        {/* 카드 */}
        <div className="rec-grid">
          {paddedItems.map((r) =>
            r.__ghost ? (
              <article className="rec-card ghost" key={r.id} />
            ) : (
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
                    {r.year}.{String(r.month || 1).padStart(2, '0')}
                  </p>

                  {/* + 아이콘 */}
                  <span className="rec-plus">+</span>
                </div>
              </article>
            )
          )}
        </div>

        {/* 페이지네이션 */}
        <div className="rec-pagination">
          <button
            className="pg-arrow"
            onClick={() => setPage(1)}
          >
            {'<<'}
          </button>

          <button
            className="pg-arrow"
            onClick={() => setPage(Math.max(1, page - 1))}
          >
            {'<'}
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
            {'>'}
          </button>

          <button
            className="pg-arrow"
            onClick={() => setPage(totalPages)}
          >
            {'>>'}
          </button>
        </div>
      </section>

      {/* 모달 */}
      {selected && (
        <div className="rec-modal" onClick={() => setSelected(null)}>
          <div className="rec-modal-inner" onClick={(e) => e.stopPropagation()}>

            <button
              className="modal-x"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            {/* 왼쪽 (이미지) */}
            <div className="modal-right">
              <img src={selected.image} alt="" />
            </div>

            {/* 오른쪽 (정보) */}
            <div className="modal-left">
              <h2>{selected.site}</h2>
              <hr />

              <p><b>위치 </b> {selected.location}</p>
              <p><b>사업명 </b> {selected.projectType}</p>
              <p><b>공사기간 </b> {selected.period}</p>

              <hr />

              <h3>현장사진</h3>
              <div className="modal-gallery">
                {selected.images?.map((img, i) => (
                  <img key={i} src={img} alt="" />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}