const Cards = ({ figure, image, text, roi, timeFrame }) => {
  return (
    <>
      <div className="cards">
        <div className="card-col-1">
          <h3>{figure}</h3>
          <p>{text}</p>
          <div className="roi-container">{roi}</div>
          {timeFrame}
        </div>
        <div className="card-col-2">{image}</div>
      </div>
    </>
  );
};

export default Cards;
