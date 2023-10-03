// styling
import "../styles/dashboard.css";
// data
import cardDetails from "@/data/data";
// component
import Cards from "./cards";
import Sales from "./sales";
const User = () => {
  return (
    <>
      <div className="user">
        <div className="dashboard-header">
          <h4>DashBoard</h4>
          <div>Today filter reload</div>
        </div>
        <div className="card">
          <div>
            <h3>Welcome Tayo</h3>
            <p>AppStack Dashboard</p>
          </div>
          {cardDetails.map((cards, index) => (
            <Cards
              key={index}
              figure={cards.figure}
              info={cards.info}
              roi={cards.roi}
              timeFrame={cards.timeFrame}
            />
          ))}
        </div>
        <Sales />
      </div>
    </>
  );
};

export default User;
