
import './fireTab.css';
import { useLocation } from 'react-router-dom';

const CompanyTabs = () => {




  return (
    <div className="tabs-container">
      <div className="background-image">
        <div className="centered-text">대건이엔에스</div>
      </div>
      {/* <ul className="tabs">
        <li className={activeTab === 'install' ? 'active' : ''}>
          <Link to="/install">설치사업</Link>
        </li>
        <li className={activeTab === 'repair' ? 'active' : ''}>
          <Link to="/repair">유지보수</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default CompanyTabs;
