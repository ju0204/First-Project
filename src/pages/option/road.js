// src/pages/road/Road.jsx
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import "./road.css";

export default function Road() {
  useEffect(() => {
    // 하드코딩한 JavaScript 키 (테스트앱/본앱 확인해서 넣기)
    const APP_KEY = "90f666eba87650bf36e03427b0d1aaa5";

    const init = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const center = new kakao.maps.LatLng(37.481210, 126.882823);
        const map = new kakao.maps.Map(container, { center, level: 3 });
        new kakao.maps.Marker({ position: center }).setMap(map);
      });
    };

    // 이미 SDK가 준비됐다면 바로 초기화
    if (window.kakao?.maps) {
      init();
    } else {
      // 중복 로드 방지
      let s = document.querySelector('script[data-kakao-sdk="true"]');
      if (!s) {
        s = document.createElement("script");
        s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`;
        s.async = true;
        s.setAttribute("data-kakao-sdk", "true");
        s.onload = init;
        s.onerror = () =>
          console.error("Kakao SDK 로드 실패: 키/도메인 등록 확인");
        document.head.appendChild(s);
      } else {
        s.addEventListener("load", init, { once: true });
      }
    }

    // 등장 애니메이션
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".road-details").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="road-page">
      <div className="contact-container">
        <h2 className="road-title">오시는 길</h2>

        <div className="map-container">
          <div id="map" className="map" />
        </div>

        <div className="road-info">
          <div className="road-details">
            <span className="road-label">주소</span>
            <span className="road-name">서울시 금천구 가산동 345-9 SK트윈타워 B동 504호</span>
          </div>
          <div className="road-details">
            <span className="road-label">전화</span>
            <span className="road-name">070-8221-8503</span>
          </div>
          <div className="road-details">
            <span className="road-label">팩스</span>
            <span className="road-name">02-979-2785</span>
          </div>
          <div className="road-details">
            <span className="road-label">E-mail</span>
            <span className="road-name">eplanet99@korea.com</span>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
