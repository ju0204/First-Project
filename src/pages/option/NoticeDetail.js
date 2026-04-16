import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import noticeData from './noticeData';
import './NoticeDetail.css';

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const notice = noticeData.find((item) => String(item.id) === String(id));

  if (!notice) {
    return (
      <div className="notice-detail-page">
        <div className="notice-detail-inner">
          <h2 className="notice-detail-title-main">공지사항</h2>
          <div className="notice-detail-title-line" />
          <div className="notice-not-found">존재하지 않는 게시글입니다.</div>
          <div className="notice-detail-bottom">
            <button type="button" onClick={() => navigate('/notice')}>
              목록
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="notice-detail-page">
      <div className="notice-detail-inner">
        <h2 className="notice-detail-title-main">공지사항</h2>
        <div className="notice-detail-title-line" />

        <div className="notice-detail-box">
          <div className="notice-detail-header">
            <h3>{notice.title}</h3>
            <div className="notice-detail-meta">
              <span>{notice.author}</span>
              <span className="divider">|</span>
              <span>{notice.date}</span>
            </div>
          </div>

          <div className="notice-detail-content">
            {notice.content.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="notice-detail-bottom">
          <button type="button" onClick={() => navigate('/notice')}>
            목록
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetail;