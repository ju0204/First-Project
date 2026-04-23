import "./road.css";
import CompanyTabs from '../about/companyTabs';

export default function Road() {
  const EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.557408579193!2d127.14698249678952!3d37.6125742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb747bfd545a7%3A0xd9359f275409fd38!2z64uk7IKw7ZiE64yA7ZSE66as66-47Ja07Lqg7Y287Iqk66qw!5e0!3m2!1sko!2skr!4v1776332371959!5m2!1sko!2skr";

  
    return (
      
    <div className="road-page">
      <CompanyTabs title="오시는 길" />

      <div className="contact-container">
        <h2 className="road-title">오시는 길</h2>

        <div className="map-container">
          <iframe
            title="이플래닛 위치"
            src={EMBED_SRC}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="road-info">
          <div className="road-details">
            <span className="road-label">주소</span>
            <span className="road-name">
              경기도 남양주시 다산순환로20 다산현대프리미어캠퍼스 A동 1026호
            </span>
          </div>
          <div className="road-details">
            <span className="road-label">전화</span>
            <span className="road-name">02-979-2785</span>
          </div>
          <div className="road-details">
            <span className="road-label">E-mail</span>
            <span className="road-name">nam11060@naver.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}