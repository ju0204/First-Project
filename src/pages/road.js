import React, { useEffect } from 'react';
import Footer from '../components/Footer'
import './road.css'


function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=28342c70caab6310c13b7cc6d6f4c840&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 회사의 위도와 경도로 변경
          level: 3 // 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커를 표시할 위치 (회사의 위도, 경도 입력)
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        // 커스텀 오버레이에 표시할 내용 (HTML 요소로 작성)
        const content = `
          <div style="
            padding: 5px;
            background-color: white;
            border: 1px solid #000;
            border-radius: 4px;
            text-align: center;
            font-size: 14px;
            width: auto;
            max-width: 150px;
            word-wrap: break-word;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
          ">
            회사 위치
          </div>`;

        // 커스텀 오버레이 생성
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.5, // 가로 앵커 위치를 가운데로 조정
          yAnchor: 2.5 // 세로 앵커 위치 조정
        });

        // 지도에 커스텀 오버레이 표시
        customOverlay.setMap(map);
      });
    };
  
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
      <div className="contact-container" >
      <h2 className="road-title">오시는 길</h2>
      <div className="map-container">
        <div id="map" className="map"></div>
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
        <Footer/>
      </div>
    </div>
  );
}
  
  export default Contact;  
