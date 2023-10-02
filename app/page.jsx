// styling
import Dashboard from "@/components/dashboard";
import styles from "../styles/home.module.css";
// components
import Sidebar from "@/components/sidebar";
const Home = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
