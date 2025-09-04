import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  {
    src: require('../pages/image/forest-fire.jpg'),
    overline: "MAINTENANCE & SUPPORT",
    title: "전문적인 유지보수 서비스",
    description: "정기적인 점검과 신속한 대응으로 시설의 최적 상태를 유지합니다.",
    cta: "서비스 문의",
    href: "/contact"
  },
  {
    src: require('../pages/image/forest.jpg'),
    overline: "INSTALLATION",
    title: "산불소화시설 설치사업",
    description: "산불의 예방과 초기 진화를 위해 맞춤형 시설을 설계·시공합니다.",
    cta: "자세히 보기",
    href: "/business/install"
  },
  {
    src: require('../pages/image/forest2.jpg'),
    overline: "MAINTENANCE",
    title: "산불소화시설 유지보수",
    description: "이상 징후를 조기에 발견하고 신속 보수로 가동률을 높입니다.",
    cta: "유지보수 안내",
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
