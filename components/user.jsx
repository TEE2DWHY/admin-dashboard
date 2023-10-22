"use client";
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
import { ArrowDown, Calendar, Filter, Reload } from "@/icons/icons";
import { useEffect, useState } from "react";

const CardIntro = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    const name = sessionStorage.getItem("name");
    setUserName(name);
  }, []);
  return (
    <div className="welcome-message">
      <div>
        <h3>Welcome {username}</h3>
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
          <h3>DashBoard</h3>
          <div className="dashboard-col2">
            <h4 className="today">
              <Calendar />
              Today
              <ArrowDown />
            </h4>
            <Filter />
            <Reload />
          </div>
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
              image={cards.img}
            />
          ))}
        </div>
        <div className="container-2" data-aos="slide-up">
          <Sales />
          <DailyFeed />
        </div>
        <div data-aos="slide-up">
          <Schedule />
          <LatestProjects />
        </div>
      </div>
    </>
  );
};

export default User;
