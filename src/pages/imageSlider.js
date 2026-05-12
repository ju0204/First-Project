import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  {
    src: require('../pages/image/slide1.png'),
    overline: "SAFEGUARDING LIVES & FORESTS",
    title: "산불재해 전문기업",
    description: "대건이앤에스는 산불소화시설의 설계 자문부터 시공, 유지보수까지 현장에 맞는 전문 솔루션을 제공합니다.",
    href: "/contact"
  },
  {
    src: require('../pages/image/slide2.png'),
    overline: "PROFESSIONAL TECHNOLOG",
    title: "전문 기술로 구축하는 산불소화시설",
    description: "축적된 기술력과 꼼꼼한 현장 관리를 통해 산불 예방과 초기 대응을 위한 시설을 안정적으로 구축합니다.",
    href: "/business/install"
  },
  {
    src: require('../pages/image/slide3.png'),
    overline: "EXPERT MAINTENANCE & CONSULTING",
    title: "유지보수/점검과 전문 컨설팅",
    description: "현장별 시설 상태와 운영 환경을 고려하여 효율적인 유지관리와 현장에 맞는 전문적인 컨설팅을 제안합니다.",
    href: "/business/maintenance"
  },
];

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" aria-label="다음 슬라이드"
      className={`arrow next ${className || ''}`} onClick={onClick}>
      <ArrowForwardIosIcon className="arrow-icon"/>
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" aria-label="이전 슬라이드"
      className={`arrow prev ${className || ''}`} onClick={onClick}>
      <ArrowBackIosIcon className="arrow-icon"/>
    </button>
  );
}

export default function ImageSlider() {
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    cssEase: 'ease-in-out',
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_cur, next) => setActive(next),
  };

  return (
    <div className="slider-container" role="region" aria-label="프로모션 슬라이드">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className={`slide ${active === idx ? 'is-active' : ''}`}>
            <img src={img.src} alt={img.title} className="slider-image" />
            <div className="scrim" aria-hidden="true" />

            {/* 정중앙 고정 레이어 */}
            <div className="text-container center">
              <div className="text-box">
                {img.overline && <span className="overline">{img.overline}</span>}
                <h1 className="headline">{img.title}</h1>
                {img.description && <p className="desc">{img.description}</p>}
                {img.cta && (
                  <a className="cta" href={img.href || '#'}>
                    {img.cta}
                    <ArrowForwardIosIcon style={{marginLeft:8, fontSize:18}} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
