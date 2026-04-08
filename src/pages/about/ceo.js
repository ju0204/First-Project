// src/pages/about/CeoMessage.jsx
import React from "react";
import Footer from "../../components/Footer";
import CompanyTabs from './companyTabs';
import "./ceo.css";

/** 필요하면 여기 텍스트만 바꿔서 사용하세요 */
const COMPANY_KR = "대건이앤에스";
const CEO_NAME = "박 정 이"; // 예시 이름

export default function CeoMessage() {
  return (
    <div>
        <CompanyTabs />

      <section className="ceo-wrap">
        <div className="ceo-eyebrow">CEO MESSAGE</div>

        <h1 className="ceo-title">
          안전하고 튼튼함을 기초로
        </h1>
        <h2 className="ceo-subtitle">
          자연과 균형을 맞추며 고객의 기대에 답하겠습니다. 
        </h2>

        <div className="ceo-body">
          <p>안녕하십니까?</p>
          <p>
            대건이앤에스는 <strong>시간의 소중함</strong>을 초심으로 삼아
    오늘의 일에 충실하고 약속된 일정과 기준을 지키며 더 나은 미래를 향해 나아갑니다.
    모든 의사결정은 <strong>안전하고 튼튼함</strong>을 기준으로 삼아
    설계·시공·검수 전 과정에 일관되게 적용합니다.
          </p>
          <p>
            다년간의 축적된 전문 기술력과 풍부한 노하우를 바탕으로,
    기본에 충실한 절차와 품질로 <strong>정직하고 성실한 시공</strong>을 약속드립니다.
    처음부터 끝까지 약속을 지키는 태도로 결과로 보이겠습니다.
          </p>
          <p>
             <strong>안전하고 튼튼함</strong>을 기초로, 자연과 균형을 맞추어 가며
    작은 선택 하나까지 신중히 결정하겠습니다.
    고객의 기대에 부응할 수 있도록 끝까지 책임을 다하겠습니다. 감사합니다.
          </p>
        </div>

        <div className="ceo-sign">
          <div className="sign-company">(주){COMPANY_KR} 대표이사</div>
          <div className="sign-name">{CEO_NAME}</div>
        </div>

        {/* 워터마크(선택): 이미지가 없으면 그냥 안 보입니다. */}
        <figure className="ceo-watermark" aria-hidden="true">
          {/* /public/img/ 경로에 ceo-building.png 넣으면 자동 노출 */}
          <img src="/img/ceo-building.png" alt="" />
        </figure>

        {/* 점자 무늬 데코(선택) */}
        <i className="ceo-dots" aria-hidden="true" />
      </section>

      <Footer />
    </div>
  );
}
