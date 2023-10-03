// styling
import "../styles/dashboard.css";
// components
import Navbar from "./navbar";
import User from "./user";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-contents">
        <Navbar />
        <User />
      </div>
    </>
  );
};

export default Dashboard;
