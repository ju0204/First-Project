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
        title: "산불 및 재해방지 전문기업",
        subtitle: "대건이엔에스",
        description: "소중한 인명을 보호하고 귀중한 산림자원을 지킬 것을 약속드립니다."
    },
    {
        src: require('../pages/image/forest.jpg'),
        title: "산불소화시설 설치사업",
        // subtitle: "자연의 품 속에서",
        description: "산불의 위험으로부터 직접적인 산불의 진화 및 예방을 목적으로 시설물을 설치합니다.",
        
    },
    {
        src: require('../pages/image/forest2.jpg'),
        title: "산불소화시설 유지보수",
        // subtitle: "생명의 숨결",
        description: "설물 기동에 이상이 발견될 때에는 정상 유지되도록 보수 가능한 업체를 선정하여 보수합니다."
    },
];

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next), // Update slide index
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon id="arrow-icon" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon id="arrow-icon" />
      </div>
    );
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`slide ${slideIndex === index ? 'animate' : ''}`}>
            <img src={image.src} alt={`Slide ${index}`} className="slider-image" />
            <div className="text-container">
              <h1 className={`slide-title ${slideIndex === index ? 'animate' : ''}`}>{image.title}</h1>
              <h2 className={`slide-subtitle ${slideIndex === index ? 'animate' : ''}`}>{image.subtitle}</h2>
              <p className={`slide-description ${slideIndex === index ? 'animate' : ''}`}>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;

