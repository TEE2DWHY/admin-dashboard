// styling
import "../styles/dashboard.css";
const Cards = ({ figure, info, roi, timeFrame, image }) => {
  return (
    <>
      <div className="cards">
        <div className="card-col-1">
          <h3 className="card-figure">{figure}</h3>
          <p className="card-info">{info}</p>
          <span className="roi-container">{roi}</span>
          <p className="time-frame">{timeFrame}</p>
        </div>
        <div className="card-col-2">{image}</div>
      </div>
    </>
  );
};

export default Cards;
