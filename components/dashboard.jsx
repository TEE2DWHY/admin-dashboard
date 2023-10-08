// styling
import "../styles/dashboard.css";
import Footer from "./footer";
// components
import Navbar from "./navbar";
import User from "./user";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-contents">
        <Navbar />
        <User />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
