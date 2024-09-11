import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/main';
import Install from './pages/fire/install';
import Repair from './pages/fire/repair';
import Road from './pages/road';
import About from './pages/about/about';
import Result from './pages/about/result';
import Work from './pages/about/work';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />  {/* 기본 라우트 추가 */}
        <Route path="/main" element={<Main />} />
        <Route path="/install" element={<Install />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/road" element={<Road />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/work" element={<Work />} />
        {/* 기타 경로에 대한 라우트를 추가하세요 */}
      </Routes>
    </Router>
  );
}

export default App;
