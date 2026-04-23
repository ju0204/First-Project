import React from 'react';
import { Link } from 'react-router-dom';
import noticeData from './noticeData';
import OptionTab from './optionTab';
import noticeBg from '../image/dasan.png';
import './Notice.css';

function Notice() {
  return (
    <div className="notice-page">
      <OptionTab
        subtitle="NOTICE"
        title="공지사항"
        backgroundImage={noticeBg}
      />
      <div className="notice-inner">
        <h2 className="notice-title">공지사항</h2>
        <div className="notice-title-line" />

        <div className="notice-table-wrap">
          <table className="notice-table">
            <thead>
              <tr>
                <th className="col-no">No.</th>
                <th className="col-title">제목</th>
                <th className="col-author">작성자</th>
                <th className="col-date">작성일</th>
              </tr>
            </thead>
            <tbody>
              {noticeData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="notice-table-title">
                    <Link to={`/notice/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notice;