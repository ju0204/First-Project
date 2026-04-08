// src/pages/road/Road.jsx
import React from "react";
import Footer from "../../components/Footer";
import "./road.css";

export default function Road() {
  // 방법 A: 구글 지도 > 공유 > "지도 퍼가기"에서 복사한 src 붙여넣기
  // const EMBED_SRC = "https://www.google.com/maps/embed?pb=복사한_pb문자열";

  // 방법 B(빠른 대안): 위도/경도만으로 임베드 (키 불필요)
  const EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.0562993349213!2d127.07871487625256!3d37.671384872011586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb8ff340fb2e5%3A0xfa55d3b5ecb8c391!2z64-Z7J2A67mM65Sp!5e0!3m2!1sko!2skr!4v1757070343897!5m2!1sko!2skr";

  return (
    <div className="road-page">
      <div className="contact-container">
        <h2 className="road-title">오시는 길</h2>

        <div className="map-container">
          <iframe
            title="이플래닛 위치"
            src={EMBED_SRC}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "80%", height: "420px" }}
          />
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
