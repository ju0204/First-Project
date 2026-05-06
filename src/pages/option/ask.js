// Ask.jsx
import React, { useRef, useState } from "react";
import OptionTab from "./optionTab";
import askBg from "../image/notice.png";
import "./ask.css";

function Ask() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = formRef.current;

    const company = f.elements["company"]?.value?.trim();
    const name = f.elements["from_name"]?.value?.trim();
    const phone = f.elements["from_phone"]?.value?.trim();
    const email = f.elements["from_email"]?.value?.trim();
    const subject = f.elements["subject"]?.value?.trim();
    const message = f.elements["message"]?.value?.trim();
    const agree = f.elements["agree"]?.checked;
    const honeypot = f.elements["website"]?.value;

    if (!agree) {
      setStatus({
        sending: false,
        ok: false,
        error: "개인정보 수집 및 이용에 동의해 주세요.",
      });
      return;
    }

    if (!name || !phone || !email || !subject || !message) {
      setStatus({
        sending: false,
        ok: false,
        error: "필수 항목을 모두 입력해 주세요.",
      });
      return;
    }

    try {
      setStatus({ sending: true, ok: false, error: "" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company,
          name,
          phone,
          email,
          subject,
          message,
          agree,
          honeypot,
        }),
      });

      const result = await res.json().catch(() => null);

      console.log("문의 API 응답:", result);

      if (!res.ok || result?.ok === false) {
        console.error("문의 API 실패:", result);
        throw new Error(result?.error || "send_failed");
      }

      setStatus({ sending: false, ok: true, error: "" });
      f.reset();

      alert("전송되었습니다. 빠르게 확인 후 연락드리겠습니다!");
    } catch (err) {
      console.error(err);
      setStatus({
        sending: false,
        ok: false,
        error: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      });
    }
  };

  return (
    <div className="ask-wrap">
      <OptionTab
        subtitle="CONTACT"
        title="문의하기"
        backgroundImage={askBg}
      />

      <section className="ask-title-area">
        <h1>
          <span>문의 사항</span>은 언제든지 연락 주세요
        </h1>
        <p>담당자가 확인 후 빠른 시일내에 회신드리겠습니다.</p>
      </section>

      <section className="form-area">
        <form ref={formRef} onSubmit={handleSubmit} aria-busy={status.sending}>
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            className="hp"
            aria-hidden="true"
          />

          <p className="required-guide">
            <span>*</span>표시는 필수입니다.
          </p>

          <div className="field">
            <label htmlFor="company">회사명</label>
            <input
              id="company"
              name="company"
              placeholder="회사명을 입력해 주세요."
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req" htmlFor="from_name">이름</label>
            <input
              id="from_name"
              name="from_name"
              placeholder="이름을 입력해 주세요."
              required
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req" htmlFor="from_phone">전화번호</label>
            <input
              id="from_phone"
              name="from_phone"
              type="tel"
              placeholder="010-0000-0000"
              required
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req" htmlFor="from_email">이메일</label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="example@email.com"
              required
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req" htmlFor="subject">제목</label>
            <input
              id="subject"
              name="subject"
              placeholder="문의 제목을 입력해 주세요."
              required
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req" htmlFor="message">내용</label>
            <textarea
              id="message"
              name="message"
              placeholder="문의 내용을 입력해 주세요."
              required
              disabled={status.sending}
            />
          </div>

          <div className="field">
            <label className="req">개인정보 수집 및 이용 동의</label>

            <div className="privacy-box">
              <p>
                회사는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고,
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여
                다음과 같이 개인정보 처리지침을 수립·공개합니다.
              </p>

              <p>
                <strong>제1조 개인정보의 처리목적</strong><br />
                회사는 문의 접수 및 답변 회신을 위하여 개인정보를 처리합니다.
                처리하고 있는 개인정보는 목적 이외의 용도로 이용되지 않으며,
                이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행합니다.
              </p>

              <p>
                <strong>수집 항목</strong><br />
                필수항목: 이름, 전화번호, 이메일, 제목, 문의내용<br />
                선택항목: 회사명
              </p>

              <p>
                <strong>보유 및 이용기간</strong><br />
                문의 답변 완료 후 1년 이내 파기합니다.
              </p>
            </div>

            <div className="agree">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                required
                disabled={status.sending}
              />
              <label htmlFor="agree">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
          </div>

          {status.error && <p className="status error">{status.error}</p>}

          <div className="actions">
            <button className="btn primary" type="submit" disabled={status.sending}>
              {status.sending ? "전송 중..." : "작성"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Ask;