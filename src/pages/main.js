// Main.js
import React from 'react';
import ImageSlider from './imageSlider';
import Consulting1Icon from './image/main1.png';
import Consulting2Icon from './image/main2.png';
import Consulting3Icon from './image/main3.png';
import Consulting4Icon from './image/main4.png';
import './main.css';

function Main() {
  const panels = [
    {
      key: 'fire',
      title: '산불소화시설',
      subtitle: 'Forest Fire Suppression Facilities',
      iconImage: Consulting1Icon,
      link: '/intro',
      className: 'panel-fire',
    },
    {
      key: 'maintenance',
      title: '시공·실적',
      subtitle: 'Construction Portfolio',
      iconImage: Consulting2Icon,
      link: '/install',
      className: 'panel-maintenance',
    },
    {
      key: 'consulting',
      title: '유지보수',
      subtitle: 'Maintenance Service',
      iconImage: Consulting3Icon,
      link: '/repair',
      className: 'panel-consulting',
    },
    {
      key: 'system',
      title: '전문컨설팅',
      subtitle: 'Professional Consulting',
      iconImage: Consulting4Icon,
      link: '/consulting',
      className: 'panel-system',
    },
  ];

  return (
    <div className="main-page">
      <ImageSlider />

      <section className="main-business-panels">
        {panels.map((panel) => (
          <div
            key={panel.key}
            className={`business-panel ${panel.className}`}
          >
            <div className="panel-content">
              <div className="panel-icon">
                <img
                  src={panel.iconImage}
                  alt=""
                  className="panel-icon-img"
                />
              </div>

              <h2>{panel.title}</h2>
              <p>{panel.subtitle}</p>

              <a
                href={panel.link}
                className="panel-arrow"
                aria-label={`${panel.title} 바로가기`}
              >
                ›
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Main;