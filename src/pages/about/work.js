import React from 'react';
import CompanyTabs from './companyTabs';
import Footer from '../../components/Footer';
import './work.css';
import orgChartImg from '../../components/photo/work.png';

export default function Work() {
  return (
    <div>
      <CompanyTabs />

      <section className="org-wrap">
        <div className="org-image-wrap">
          <img src={orgChartImg} alt="조직도" className="org-image" />
        </div>
      </section>

      <Footer />
    </div>
  );
}