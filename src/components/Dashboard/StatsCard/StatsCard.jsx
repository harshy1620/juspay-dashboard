import "./styles.scss";

const StatsCard = ({ title, value, change, positive }) => {
  return (
    <div className={`stats-card ${positive ? "positive" : "negative"}`}>
      <div className="stats-card__title">{title}</div>

      <div className="stats-card__value-row">
        <div className="stats-card__value">{value}</div>

        <div className={`stats-card__change ${positive ? "up" : "down"}`}>
          {change}
          <span className="arrow">{positive ? "↗" : "↘"}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
