import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "./road.css";

function Road() {
  useEffect(() => {
    // 카카오맵 API가 로드될 때 실행
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(37.481210, 126.882823), // 회사 위치 (위도, 경도)
          level: 3, // 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(37.481210, 126.882823);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map); // 지도에 마커 표시
      }
    };

    // 스크립트가 로드되었는지 확인 후 실행
    //!!!!!!!앱키 index.html 것도 바꿔야함!!! 
    if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    } else {
      const script = document.createElement("script");
      //!!!!!!!앱키 index.html 것도 바꿔야함!!! 
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=29f03c7b54622c8d9a8c60c20cd7e7e0&autoload=false";
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(loadKakaoMap);
      };
      document.head.appendChild(script);
    }

    // Intersection Observer를 사용하여 애니메이션 트리거
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const elements = document.querySelectorAll('.road-details');
    elements.forEach((el) => observer.observe(el));


  }, []);

  return (
    <div>
      <div className="contact-container">
        <h2 className="road-title">오시는 길</h2>
        <div className="map-container">
          <div id="map" className="map"></div>
        </div>
        <div className="road-info">
          <div className="road-details">
            <span className="road-label">주소</span>
            <span className="road-name">
              서울시 금천구 가산동 345-9 SK트윈타워 B동 504호
            </span>
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

export default Road;
