// styling
import styles from "../styles/dashboard.module.css";
// components
import Navbar from "./navbar";
import User from "./user";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <Navbar />
        <User />
      </div>
    </>
  );
};

export default Dashboard;
