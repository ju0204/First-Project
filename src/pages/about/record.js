import React, { useMemo, useState, useEffect } from "react";
import CompanyTabs from './companyTabs';
import Footer from "../../components/Footer";
import "./record.css";

/** 2018~2025만 포함, 임시 이미지(picsum) — 실제 이미지로 교체하세요 */
const RECORDS = [
  // 2018
  { id: 1,  year: 2018, region: "서울", client: "관악구청",  site: "관음사 사찰",         contractor: "㈜ 도원건설",       image: "https://picsum.photos/seed/rec-1/800/600" },
  { id: 2,  year: 2018, region: "경기", client: "안성시청",  site: "청룡사 사찰",         contractor: "안성시 산림조합",   image: "https://picsum.photos/seed/rec-2/800/600" },
  { id: 3,  year: 2018, region: "부산", client: "진구청",    site: "선암사 사찰",         contractor: "㈜ 풍림",          image: "https://picsum.photos/seed/rec-3/800/600" },

  // 2019
  { id: 4,  year: 2019, region: "경기", client: "안성시청",  site: "서운산자연휴양림",     contractor: "안성시 산림조합",   image: "https://picsum.photos/seed/rec-4/800/600" },
  { id: 5,  year: 2019, region: "전남", client: "고흥군청",  site: "마복산자연휴양림",     contractor: "고흥군 산림조합",   image: "https://picsum.photos/seed/rec-5/800/600" },
  { id: 6,  year: 2019, region: "전남", client: "해남군청",  site: "가학산자연휴양림",     contractor: "해남군 산림조합",   image: "https://picsum.photos/seed/rec-6/800/600" },

  // 2020
  { id: 7,  year: 2020, region: "경기", client: "수원시청",  site: "봉녕사 사찰",         contractor: "㈜ 프레코",        image: "https://picsum.photos/seed/rec-7/800/600" },
  { id: 8,  year: 2020, region: "경기", client: "안양시청",  site: "서울대학교수목원",     contractor: "㈜ 로만포레스트",   image: "https://picsum.photos/seed/rec-8/800/600" },
  { id: 9,  year: 2020, region: "충북", client: "증평군청",  site: "좌구산자연휴양림",     contractor: "㈜ 우일건설",       image: "https://picsum.photos/seed/rec-9/800/600" },
  { id: 10, year: 2020, region: "충북", client: "보은군청",  site: "알프스자연휴양림",     contractor: "㈜ 태웅이엔에스",   image: "https://picsum.photos/seed/rec-10/800/600" },
  { id: 11, year: 2020, region: "충남", client: "서산시청",  site: "망일사 사찰",         contractor: "㈜ 충남전력기술",   image: "https://picsum.photos/seed/rec-11/800/600" },
  { id: 12, year: 2020, region: "충남", client: "청양군청",  site: "칠갑산자연휴양림",     contractor: "청양 산림조합",     image: "https://picsum.photos/seed/rec-12/800/600" },
  { id: 13, year: 2020, region: "경남", client: "함양군청",  site: "대봉산 휴양밸리",      contractor: "함양 산림조합",     image: "https://picsum.photos/seed/rec-13/800/600" },

  // 2021
  { id: 14, year: 2021, region: "경남", client: "거제시청",  site: "숲소리공원",           contractor: "㈜ 엔셀",          image: "https://picsum.photos/seed/rec-14/800/600" },
  { id: 15, year: 2021, region: "충북", client: "음성군청",  site: "수레의산자연휴양림",   contractor: "㈜ 한송산림",       image: "https://picsum.photos/seed/rec-15/800/600" },
  { id: 16, year: 2021, region: "경기", client: "수원시청",  site: "용화사 사찰",         contractor: "플레잉마운틴스㈜", image: "https://picsum.photos/seed/rec-16/800/600" },
  { id: 17, year: 2021, region: "경기", client: "용인시청",  site: "용인자연휴양림",       contractor: "플레잉마운틴스㈜", image: "https://picsum.photos/seed/rec-17/800/600" },
  { id: 18, year: 2021, region: "전남", client: "화순군청",  site: "개천사 사찰",         contractor: "㈜우리산업",        image: "https://picsum.photos/seed/rec-18/800/600" },
  { id: 19, year: 2021, region: "전북", client: "김제시청",  site: "청룡사 사찰",         contractor: "지엘주식회사",       image: "https://picsum.photos/seed/rec-19/800/600" },
  { id: 20, year: 2021, region: "충남", client: "청양군청",  site: "고추문화마을",         contractor: "청양 산림조합",     image: "https://picsum.photos/seed/rec-20/800/600" },
  { id: 21, year: 2021, region: "충남", client: "청양군청",  site: "먹거리타운",           contractor: "청양 산림조합",     image: "https://picsum.photos/seed/rec-21/800/600" },

  // 2022
  { id: 22, year: 2022, region: "충북", client: "청주시청",  site: "옥화자연휴양림",       contractor: "청주 산림조합",     image: "https://picsum.photos/seed/rec-22/800/600" },
  { id: 23, year: 2022, region: "전북", client: "완주군청",  site: "원동사 사찰",         contractor: "(유)숲으로",        image: "https://picsum.photos/seed/rec-23/800/600" },
  { id: 24, year: 2022, region: "전남", client: "고흥군청",  site: "팔영산편백치유숲",     contractor: "㈜휴로드",          image: "https://picsum.photos/seed/rec-24/800/600" },

  // 2023
  { id: 25, year: 2023, region: "충남", client: "금산군청",  site: "신안사 사찰",         contractor: "경산종합건설",      image: "https://picsum.photos/seed/rec-25/800/600" },
  { id: 26, year: 2023, region: "충남", client: "금산군청",  site: "보석사 사찰",         contractor: "경산종합건설",      image: "https://picsum.photos/seed/rec-26/800/600" },
  { id: 27, year: 2023, region: "충북", client: "괴산군청",  site: "성불산자연휴양림",     contractor: "(유)대한",          image: "https://picsum.photos/seed/rec-27/800/600" },
  { id: 28, year: 2023, region: "전남", client: "순천시청",  site: "순천자연휴양림",       contractor: "㈜두창",            image: "https://picsum.photos/seed/rec-28/800/600" },
  { id: 29, year: 2023, region: "전남", client: "광양시청",  site: "백운산자연휴양림",     contractor: "광양시청",          image: "https://picsum.photos/seed/rec-29/800/600" },

  // 2024 (샘플)
  { id: 30, year: 2024, region: "강원", client: "홍천군청",  site: "용문산자연휴양림",     contractor: "홍천군 산림조합",   image: "https://picsum.photos/seed/rec-30/800/600" },
  { id: 31, year: 2024, region: "경기", client: "여주시청",  site: "강천섬 생태공원",       contractor: "여주시 산림조합",   image: "https://picsum.photos/seed/rec-31/800/600" },
  { id: 32, year: 2024, region: "경남", client: "거창군청",  site: "우두산자연휴양림",     contractor: "거창군 산림조합",   image: "https://picsum.photos/seed/rec-32/800/600" },

  // 2025 (샘플)
  { id: 33, year: 2025, region: "충남", client: "보령시청",  site: "대천해수욕장 수목원",   contractor: "보령시 산림조합",   image: "https://picsum.photos/seed/rec-33/800/600" },
  { id: 34, year: 2025, region: "경북", client: "포항시청",  site: "환호공원 치유숲",       contractor: "포항시 산림조합",   image: "https://picsum.photos/seed/rec-34/800/600" },
];

/** 드롭다운용 연도(2018~2025 역순) */
const YEARS = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => 2025 - i);

export default function ConstructionRecords() {
  const [yearMode, setYearMode] = useState("all"); // 'all' | 'select'
  const [selectedYear, setSelectedYear] = useState("");
  const [page, setPage] = useState(1);

  const PER_PAGE = 9;

  /** 필터 */
  const filtered = useMemo(() => {
    let list = RECORDS.slice().sort(
      (a, b) => b.year - a.year || a.region.localeCompare(b.region, "ko")
    );
    if (yearMode === "select" && selectedYear) {
      list = list.filter((r) => r.year === Number(selectedYear));
    }
    // 안전장치: 혹시라도 범위를 벗어난 연도는 제외
    return list.filter((r) => r.year >= 2018 && r.year <= 2025);
  }, [yearMode, selectedYear]);

  /** 페이지 계산 */
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = useMemo(
    () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [filtered, page]
  );

  /** 9칸 패딩(항상 3×3 유지) */
  const paddedItems = useMemo(() => {
    const need = Math.max(0, PER_PAGE - current.length);
    if (need === 0) return current;
    const ghosts = Array.from({ length: need }, (_, i) => ({
      id: `ghost-${page}-${i}`,
      __ghost: true,
    }));
    return [...current, ...ghosts];
  }, [current, page]);

  useEffect(() => setPage(1), [yearMode, selectedYear]);

  /** 페이지 버튼 그룹 */
  const visiblePages = useMemo(() => {
    const MAX = 7;
    if (totalPages <= MAX) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const start = Math.max(1, page - 3);
    const end = Math.min(totalPages, start + MAX - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  return (
    <div>
      <CompanyTabs />

      <section className="rec-wrap">
        <h2 className="rec-title">공사 실적</h2>
          <p className="rec-sub">2018–2025 주요 수행 현장</p>

        {/* 상단: 연도 필터 */}
        <div className="rec-controls">
          <div className="year-switch" role="tablist" aria-label="연도 필터">
            <button
              type="button"
              className={`ys-btn ${yearMode === "all" ? "active" : ""}`}
              onClick={() => { setYearMode("all"); setSelectedYear(""); }}
              aria-pressed={yearMode === "all"}
            >
              전체 연도
            </button>
            <button
              type="button"
              className={`ys-btn ${yearMode === "select" ? "active" : ""}`}
              onClick={() => setYearMode("select")}
              aria-pressed={yearMode === "select"}
            >
              연도 선택
            </button>

            {yearMode === "select" && (
              <select
                className="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                aria-label="연도 선택 드롭다운"
              >
                <option value="">연도 선택</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            )}
          </div>

          <div className="rec-count" aria-live="polite">
            총 <strong>{filtered.length}</strong>건
          </div>
        </div>

        {/* 3×3 이미지 카드: 오버레이 + 좌상단 뱃지 */}
        <div className="rec-grid">
          {filtered.length === 0 ? (
            <div className="rec-empty">표시할 실적이 없습니다.</div>
          ) : (
            paddedItems.map((r) =>
              r.__ghost ? (
                <article className="rec-card ghost" key={r.id} aria-hidden="true">
                  <div className="rec-thumb" />
                </article>
              ) : (
                <article className="rec-card" key={r.id} tabIndex={0}>
                  <div className="rec-thumb">
                    <img
                      src={r.image}
                      alt={`${r.site} 사진`}
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/seed/fallback/800/600";
                      }}
                      loading="lazy"
                    />
                    {/* 좌상단 뱃지 */}
                    <div className="rec-thumb-badges">
                      <span className="badge y">{r.year}</span>
                      <span className="badge r">{r.region}</span>
                    </div>
                    {/* Hover/Focus 오버레이 */}
                    <div className="rec-overlay">
                      <h3 className="ov-title">{r.site}</h3>
                      <p className="ov-line">{r.client}</p>
                      <p className="ov-sub">{r.region} · {r.year}</p>
                    </div>
                  </div>
                </article>
              )
            )
          )}
        </div>

        {/* 페이지네이션 */}
        <nav className="rec-pagination" aria-label="페이지 이동">
        {/* 처음(««) — 첫 페이지가 아니면 표시 */}
        {page > 1 && (
          <button
            type="button"
            className="pg-btn square first"
            onClick={() => setPage(1)}
            aria-label="처음 페이지로"
          />
        )}

        {/* 숫자들 */}
        {visiblePages[0] > 1 && <span className="pg-ellipsis">…</span>}
        {visiblePages.map((n) => (
          <button
            key={n}
            type="button"
            className={`pg-num ${n === page ? "active" : ""}`}
            onClick={() => setPage(n)}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
        {visiblePages[visiblePages.length - 1] < totalPages && <span className="pg-ellipsis">…</span>}

        {/* 끝(») — 마지막 페이지가 아니면 표시 */}
        {page < totalPages && (
          <button
            type="button"
            className="pg-btn square last"
            onClick={() => setPage(totalPages)}
            aria-label="마지막 페이지로"
          />
        )}
      </nav>


      </section>

      <Footer />
    </div>
  );
}
