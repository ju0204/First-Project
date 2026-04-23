import './fireTab.css';

const FireTab = ({
  subtitle = 'BUSINESS',
  title = '대건이엔에스',
}) => {
  return (
    <div className="fire-tabs-container">
      <div className="fire-background-image">
        <div className="fire-title-box">
          <p className="fire-tab-subtitle">{subtitle}</p>
          <h1 className="fire-tab-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default FireTab;