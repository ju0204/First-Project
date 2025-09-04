import React, { useMemo, useState } from "react";
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer';
import "./record.css";

/** 예시 데이터 — 필요한 만큼 추가하세요 */
const RECORDS = [
  { year: 2012, region: "경북", client: "영주국유림관리소", site: "대현리 보호림", contractor: "봉화군 산림조합" },
  { year: 2012, region: "경남", client: "거창군청",        site: "연수사 사찰",   contractor: "㈜ 대원설비" },

  { year: 2013, region: "서울", client: "서초구청",          site: "대성사 사찰",     contractor: "서울시 산림조합" },
  { year: 2013, region: "강원", client: "원주시청",          site: "치악산자연휴양림", contractor: "원주시 산림조합" },
  { year: 2013, region: "강원", client: "홍천국유림관리소",  site: "횡성 숲체원",     contractor: "횡성군 산림조합" },
  { year: 2013, region: "부산", client: "해운대구청",        site: "재송동 등산로",   contractor: "창원시 산림조합" },
  { year: 2013, region: "전북", client: "남원시청",          site: "자연생태문화공원", contractor: "남원시 산림조합" },
  { year: 2013, region: "경남", client: "합천군청",          site: "오도산자연휴양림",   contractor: "합천군 산림조합" },
  { year: 2013, region: "경남", client: "밀양시청",        site: "대법사 사찰",     contractor: "밀양시 산림조합" },
  { year: 2013, region: "경남", client: "진주시청",        site: "월아산보호림",     contractor: "㈜ 상담개발" }, // ← 상호 확인 한번만!

  { year: 2014, region: "경기", client: "여주시청",        site: "신륵사 사찰",     contractor: "㈜ 창성건설" },
  { year: 2014, region: "강원", client: "정선군청",        site: "도사곡자연휴양림", contractor: "정선군 산림조합" },
  { year: 2014, region: "충남", client: "보령시청",        site: "성주산자연휴양림", contractor: "보령시 산림조합" },
  { year: 2014, region: "전북", client: "무주국유림관리소", site: "덕유산자연휴양림", contractor: "무주군 산림조합" },
  { year: 2014, region: "경북", client: "포항시청",        site: "보경사 사찰",     contractor: "포항시 산림조합" },
    // 2014
  { year: 2014, region: "경북", client: "영양군청",        site: "흥림자연휴양림",   contractor: "㈜ 한동기업" }, // 이름 철자 한 번만 확인!

  // 2015
  { year: 2015, region: "경기", client: "경기도산림연구소", site: "축령산자연휴양림", contractor: "양주시 산림조합" },
  { year: 2015, region: "강원", client: "화천군청",        site: "화천 한옥학교",   contractor: "화천군 산림조합" },
  { year: 2015, region: "충남", client: "금산군청",        site: "대둔산자연휴양림", contractor: "㈜ 숲왕산림" },     // 상호 표기 확인 필요
  { year: 2015, region: "경남", client: "하동군청",        site: "구재봉자연휴양림", contractor: "하동군 산림조합" },
  { year: 2015, region: "경남", client: "함양군청",        site: "함양삼삼휴양밸리", contractor: "㈜ 거림" },
  { year: 2015, region: "경남", client: "함양국유림관리소", site: "남계편백휴양림",   contractor: "경남지역본부" },   // 소속 표기 확인 필요

  // 2016
  { year: 2016, region: "경기", client: "안산시청",        site: "바다향기 수목원",   contractor: "시흥시 산림조합" },
  { year: 2016, region: "강원", client: "춘천시청",        site: "의암리문화유적지", contractor: "춘천시 산림조합" },
  { year: 2016, region: "강원", client: "화천군청",        site: "화천중학교",       contractor: "화천군 산림조합" },
  { year: 2016, region: "전북", client: "부안군청",        site: "부안청소년수련원", contractor: "부안군 산림조합" },
  { year: 2016, region: "경남", client: "하동군청",        site: "칠불사 사찰",     contractor: "하동군 산림조합" },

  // 2017
  { year: 2017, region: "강원", client: "고성군청",        site: "간성중학교",       contractor: "고성군 산림조합" },
  { year: 2017, region: "경북", client: "군위군청",        site: "티시그린휴양림",   contractor: "군위군 산림조합" }, // 명칭 확인 필요
  { year: 2017, region: "경북", client: "칠곡군청",        site: "송정 자연휴양림",  contractor: "칠곡군 산림조합" },
  
    // 2018
  { year: 2018, region: "서울", client: "관악구청",  site: "관음사 사찰",       contractor: "㈜ 도원건설" },
  { year: 2018, region: "경기", client: "안성시청",  site: "청룡사 사찰",       contractor: "안성시 산림조합" },
  { year: 2018, region: "부산", client: "진구청",    site: "선암사 사찰",       contractor: "㈜ 풍림" },

  // 2019
  { year: 2019, region: "경기", client: "안성시청",  site: "서운산자연휴양림",   contractor: "안성시 산림조합" },
  { year: 2019, region: "전남", client: "고흥군청",  site: "마복산자연휴양림",   contractor: "고흥군 산림조합" },
  { year: 2019, region: "전남", client: "해남군청",  site: "가학산자연휴양림",   contractor: "해남군 산림조합" },

  // 2020
  { year: 2020, region: "경기", client: "수원시청",  site: "봉녕사 사찰",       contractor: "㈜ 프레코" },        // 상호 확인 한번만!
  { year: 2020, region: "경기", client: "안양시청",  site: "서울대학교수목원",   contractor: "㈜ 로만포레스트" },
  { year: 2020, region: "충북", client: "증평군청",  site: "좌구산자연휴양림",   contractor: "㈜ 우일건설" },
  { year: 2020, region: "충북", client: "보은군청",  site: "알프스자연휴양림",   contractor: "㈜ 태웅이엔에스" },  // 철자 확인 필요
  { year: 2020, region: "충남", client: "서산시청",  site: "망일사 사찰",       contractor: "㈜ 충남전력기술" },  // 상호 성격 확인 필요
  { year: 2020, region: "충남", client: "청양군청",  site: "칠갑산자연휴양림",   contractor: "청양 산림조합" },
  { year: 2020, region: "경남", client: "함양군청",  site: "대봉산 휴양밸리",    contractor: "함양 산림조합" },

  // 2021
  { year: 2021, region: "경남", client: "거제시청",  site: "숲소리공원",         contractor: "㈜ 엔셀" },          // 표기 불명확: 엔셀/엔샐? 확인 부탁!
  { year: 2021, region: "충북", client: "음성군청",  site: "수레의산자연휴양림", contractor: "㈜ 한송산림" },      // 상호 확인 필요
    // 2021
  { year: 2021, region: "경기", client: "수원시청",  site: "용화사 사찰",       contractor: "플레잉마운틴스㈜" },
  { year: 2021, region: "경기", client: "용인시청",  site: "용인자연휴양림",     contractor: "플레잉마운틴스㈜" },
  { year: 2021, region: "전남", client: "화순군청",  site: "개천사 사찰",       contractor: "㈜우리산업" },
  { year: 2021, region: "전북", client: "김제시청",  site: "청룡사 사찰",       contractor: "지엘주식회사" },
  { year: 2021, region: "충남", client: "청양군청",  site: "고추문화마을",       contractor: "청양 산림조합" },
  { year: 2021, region: "충남", client: "청양군청",  site: "먹거리타운",         contractor: "청양 산림조합" },

  // 2022
  { year: 2022, region: "충북", client: "청주시청",  site: "옥화자연휴양림",     contractor: "청주 산림조합" },
  { year: 2022, region: "전북", client: "완주군청",  site: "원동사 사찰",       contractor: "(유)숲으로" },
  { year: 2022, region: "전남", client: "고흥군청",  site: "팔영산편백치유숲",   contractor: "㈜휴로드" },

  // 2023
  { year: 2023, region: "충남", client: "금산군청",  site: "신안사 사찰",       contractor: "경산종합건설" },
  { year: 2023, region: "충남", client: "금산군청",  site: "보석사 사찰",       contractor: "경산종합건설" },
  { year: 2023, region: "충북", client: "괴산군청",  site: "성불산자연휴양림",   contractor: "(유)대한" },
  { year: 2023, region: "전남", client: "순천시청",  site: "순천자연휴양림",     contractor: "㈜두창" },
  { year: 2023, region: "전남", client: "광양시청",  site: "백운산자연휴양림",   contractor: "광양시청" },

];

export default function ConstructionRecords() {
  const [query, setQuery] = useState("");
  const [year, setYear]   = useState("all");
  const [sort, setSort]   = useState({ key: "year", dir: "desc" }); // asc/desc

  const years = useMemo(
    () => Array.from(new Set(RECORDS.map(r => r.year))).sort((a, b) => b - a),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = RECORDS.filter(r =>
      (year === "all" || r.year === Number(year)) &&
      (
        String(r.year).includes(q) ||
        r.region.toLowerCase().includes(q) ||
        r.client.toLowerCase().includes(q) ||
        r.site.toLowerCase().includes(q) ||
        r.contractor.toLowerCase().includes(q)
      )
    );

    list.sort((a, b) => {
      const k = sort.key;
      const dir = sort.dir === "asc" ? 1 : -1;
      const A = a[k], B = b[k];
      return typeof A === "number"
        ? (A - B) * dir
        : String(A).localeCompare(String(B), "ko") * dir;
    });

    return list;
  }, [query, year, sort]);

  // 필터링된 리스트 기준으로 각 연도의 rowSpan 계산
  const yearCounts = useMemo(() => {
    const m = {};
    filtered.forEach(r => (m[r.year] = (m[r.year] || 0) + 1));
    return m;
  }, [filtered]);

  const toggleSort = (key) =>
    setSort(s => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));

  const painted = {}; // 같은 연도 첫 행만 년도 셀 출력

  return (
    <div>
    <CompanyTabs />

    <section className="rec-wrap">
      <h2 className="rec-title">주요 공사 실적</h2>

      <div className="rec-controls">
        <input
          className="rec-search"
          placeholder="검색 (지역/발주처/현장명/시공처)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="rec-select" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="all">전체 연도</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <button
          className="rec-reset"
          onClick={() => { setQuery(""); setYear("all"); setSort({ key: "year", dir: "desc" }); }}
        >
          초기화
        </button>
        <div className="rec-count">{filtered.length}건</div>
      </div>

      <div className="rec-table-scroll">
        <table className="rec-table">
          <thead>
            <tr>
              <th onClick={() => toggleSort("year")}>
                년도 <i className={`sort ${sort.key === "year" ? sort.dir : ""}`} />
              </th>
              <th onClick={() => toggleSort("region")}>
                지역 <i className={`sort ${sort.key === "region" ? sort.dir : ""}`} />
              </th>
              <th onClick={() => toggleSort("client")}>
                발주처 <i className={`sort ${sort.key === "client" ? sort.dir : ""}`} />
              </th>
              <th onClick={() => toggleSort("site")}>
                현장명 <i className={`sort ${sort.key === "site" ? sort.dir : ""}`} />
              </th>
              <th onClick={() => toggleSort("contractor")}>
                시공처 <i className={`sort ${sort.key === "contractor" ? sort.dir : ""}`} />
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((r, i) => {
              const first = !painted[r.year];
              if (first) painted[r.year] = true;

              return (
                <tr key={`${r.year}-${r.site}-${i}`} data-year={r.year}>
                  {first && (
                    <td className="year-cell" rowSpan={yearCounts[r.year]}>
                      {r.year}
                    </td>
                  )}
                  <td data-label="지역">{r.region}</td>
                  <td data-label="발주처">{r.client}</td>
                  <td data-label="현장명">{r.site}</td>
                  <td data-label="시공처">{r.contractor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>


    <Footer />
    </div>
  );
}
