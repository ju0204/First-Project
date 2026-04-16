import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/main';
import Install from './pages/fire/install';
import Repair from './pages/fire/repair';
import Road from './pages/option/road';
import About from './pages/about/about';
import Result from './pages/about/result';
import Work from './pages/about/work';
import Record from './pages/about/record';
import Ask from './pages/option/ask';
import Ceo from './pages/about/ceo';
import ScrollButton from './components/ScrollButton';
import Notice from './pages/option/Notice';
import NoticeDetail from './pages/option/NoticeDetail';
import Footer from './components/Footer';
import Intro from './pages/fire/intro';


function App() {
  return (
    <Router>
      <Header />
      <ScrollButton />
      <Routes>
        <Route path="/" element={<Main />} />  {/* 기본 라우트 추가 */}
        <Route path="/main" element={<Main />} />
        <Route path="/install" element={<Install />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/road" element={<Road />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/work" element={<Work />} />
        <Route path="/record" element={<Record />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/ceo" element={<Ceo />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />

        {/* 기타 경로에 대한 라우트를 추가하세요 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
