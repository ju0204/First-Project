// Ask.jsx
import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import "./ask.css";

function Ask() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = formRef.current;

    const name = f.elements["from_name"]?.value?.trim();
    const email = f.elements["from_email"]?.value?.trim();
    const phone = f.elements["from_phone"]?.value?.trim();
    const company = f.elements["company"]?.value?.trim();
    const subject = f.elements["subject"]?.value?.trim();
    const message = f.elements["message"]?.value?.trim();
    const agree = f.elements["agree"]?.checked;
    const honeypot = f.elements["website"]?.value;

    if (!agree) {
      setStatus({ sending: false, ok: false, error: "개인정보 처리에 동의해 주세요." });
      return;
    }
    if (!name || !email || !subject || !message) {
      setStatus({ sending: false, ok: false, error: "필수 항목(이름/이메일/제목/내용)을 모두 입력해 주세요." });
      return;
    }

    try {
      setStatus({ sending: true, ok: false, error: "" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, company, subject, message, agree, honeypot,
        }),
      });

      if (!res.ok) throw new Error("send_failed");

      setStatus({ sending: false, ok: true, error: "" });
      f.reset();

      // ✅ 전송 성공 알림
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
      <section className="hero">
        <h1>문의하기</h1>
        <p>
          간단한 연락처와 내용을 남겨주세요. <b>확인후 메일로 답변</b>드리겠습니다.
        </p>
      </section>

      <section className="form-area">
        <form ref={formRef} onSubmit={handleSubmit} aria-busy={status.sending}>
          <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />

          <div className="row two">
            <div className="field">
              <label className="req" htmlFor="from_name">이름</label>
              <input id="from_name" name="from_name" placeholder="홍길동" required disabled={status.sending} />
            </div>
            <div className="field">
              <label className="req" htmlFor="from_email">이메일</label>
              <input id="from_email" name="from_email" type="email" placeholder="you@example.com" required disabled={status.sending} />
            </div>
          </div>

          <div className="row two">
            <div className="field">
              <label htmlFor="from_phone">전화번호</label>
              <input id="from_phone" name="from_phone" type="tel" placeholder="010-1234-5678" disabled={status.sending} />
            </div>
            <div className="field">
              <label htmlFor="company">회사명</label>
              <input id="company" name="company" placeholder="(선택)" disabled={status.sending} />
            </div>
          </div>

          <div className="row one">
            <div className="field">
              <label className="req" htmlFor="subject">제목</label>
              <input id="subject" name="subject" placeholder="예: 유지보수 문의" required disabled={status.sending} />
            </div>
          </div>

          <div className="row one">
            <div className="field">
              <label className="req" htmlFor="message">내용</label>
              <textarea id="message" name="message" placeholder="문의 내용을 입력해 주세요." required disabled={status.sending} />
            </div>
          </div>

          <div className="agree">
            <input id="agree" name="agree" type="checkbox" required disabled={status.sending} />
            <label htmlFor="agree">
              <span className="lead">(필수) 개인정보 수집·이용에 동의합니다.</span>
              <small>수집 항목: 이름, 이메일, 연락처, 문의내용 / 보유·이용기간: 문의 처리 후 1년</small>
            </label>
          </div>

          {/* 에러만 화면에 표시 (성공은 alert로 대체) */}
          {status.error && <p className="status error">{status.error}</p>}
          {/* {status.ok && <p className="status ok">전송되었습니다. 빠르게 확인 후 연락드리겠습니다!</p>} */}

          <div className="actions">
            <button className="btn primary" type="submit" disabled={status.sending}>
              {status.sending ? "전송 중..." : "확인 및 전송"}
            </button>
            <button className="btn" type="reset" disabled={status.sending}>
              초기화
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Ask;
