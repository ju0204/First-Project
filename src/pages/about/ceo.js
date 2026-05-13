// src/pages/about/CeoMessage.jsx
import React from "react";
import CompanyTabs from './companyTabs';
import DasanImage from '../image/dasan.png';
import "./ceo.css";

const CEO_NAME = "박 정 이";

export default function CeoMessage() {
  return (
    <div>
      <CompanyTabs title="인사말" category="회사소개" />

      <section className="ceo-wrap">
        <h2 className="ceo-title">인사말</h2>

        <div className="ceo-layout">
          <figure className="ceo-photo">
            <img src={DasanImage} alt="대건이앤에스 관련 이미지" />
          </figure>

          <div className="ceo-content">
            <div className="ceo-head-copy">
              <p className="ceo-lead">
                산불재해로부터 안전한 세상을 만드는 재해전문기업 <br/>
                <span className="ceo-accent">대건이앤에스</span>입니다.
              </p>
            </div>

            <div className="ceo-body">
              <p>
                안녕하십니까?
              </p>
              <p>
                대건이앤에스는 산불소화시설 설치 전문 기업으로서, 사람과 자연의 조화로운 공간을 최우선 가치로 추구합니다.
              </p>
              <p>
                '<span className="p-best">최고의 기술력이 최고의 안전을 만든다</span>'는 확실한 신념을 가지고 있습니다. 오랜 기간 축적해 온 독보적인 기술력을 바탕으로 스마트한 산불 예방 및 초기진화 시스템 구축에 앞장서고 있습니다.
              </p>
              <p>
                지속 가능한 자연을 보존하고 미래 세대에게 물려줄 소중한 환경을 보호한다는 공익적 사명감을 잊지 않고, 공공의 안전을 실현한다는 자부심을 바탕으로, 정직과 신뢰를 통해, 고객에게 항상 최선을 다하는 기업이 될 것을 약속 드립니다.
              </p>
            </div>

            <div className="ceo-sign">
              <span className="sign-company"> 대표</span>
              <span className="sign-name">{CEO_NAME}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}