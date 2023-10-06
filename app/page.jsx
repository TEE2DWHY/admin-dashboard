// styling
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
// components
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";
import { Skeleton } from "antd";

const Home = () => {
  return (
    <Animate>
      <div className="dashboard">
        <Skeleton active>
          <Sidebar />
          <Dashboard />
        </Skeleton>
      </div>
    </Animate>
  );
};

export default Home;
