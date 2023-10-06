// styling
import "../styles/dashboard.css";
// data
import { cardDetails } from "@/data/data";
// components
import Cards from "./cards";
import Sales from "./sales";
import DailyFeed from "./dailyfeed";
import Schedule from "./schedule";
import LatestProjects from "./latestprojects";
import Footer from "./footer";
const CardIntro = () => {
  return (
    <div className="welcome-message">
      <div>
        <h3>Welcome Tayo</h3>
        <p>AppStack Dashboard</p>
      </div>
      <img
        className="customer-support"
        src={"./images/customer-support.png"}
        alt="customer-support"
      />
    </div>
  );
};
const User = () => {
  return (
    <>
      <div className="user">
        <div className="dashboard-header" data-aos="fade-in">
          <h4>DashBoard</h4>
          <div>Today filter reload</div>
        </div>
        <div className="card" data-aos="slide-up">
          <CardIntro />
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
        <div className="container-2" data-aos="slide-up" aos-duration="2500">
          <Sales />
          <DailyFeed />
        </div>
        <div data-aos="slide-up" aos-duration="2600">
          <Schedule />
          <LatestProjects />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default User;
