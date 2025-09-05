// src/pages/road/Road.jsx
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import "./road.css";

export default function Road() {
  useEffect(() => {
    const GMAPS_KEY =
      process.env.REACT_APP_GOOGLE_MAPS_KEY || "AIzaSyAB7yEi5uXfLi6ztbwBIGu7YIjQCkkrFcY"; 

    const init = () => {
      const { google } = window;
      const container = document.getElementById("map");
      if (!container || !google?.maps) return;

      const center = { lat: 37.481210, lng: 126.882823 };

      const map = new google.maps.Map(container, {
        center,
        zoom: 16,
        // mapId: "YOUR_MAP_ID", // 스타일 맵을 쓰면 주석 해제
      });

      const marker = new google.maps.Marker({
        position: center,
        map,
        title: "SK트윈타워 B동 504호",
      });

      const info = new google.maps.InfoWindow({
        content:
          `<div style="line-height:1.4">
            <strong>이플래닛</strong><br/>
            서울시 금천구 가산동 345-9<br/>
            SK트윈타워 B동 504호
          </div>`,
      });

      marker.addListener("click", () => info.open({ anchor: marker, map }));
    };

    // 이미 로드되어 있으면 바로 초기화
    if (window.google?.maps) {
      init();
    } else {
      // 중복 로드 방지
      let s = document.querySelector('script[data-google-sdk="true"]');
      if (!s) {
        s = document.createElement("script");
        s.async = true;
        s.defer = true;
        s.setAttribute("data-google-sdk", "true");
        s.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&language=ko&region=KR`;
        s.onload = init;
        s.onerror = () =>
          console.error("Google Maps SDK 로드 실패: 키/도메인(HTTP referrer) 제한 확인");
        document.head.appendChild(s);
      } else {
        s.addEventListener("load", init, { once: true });
      }
    }
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
