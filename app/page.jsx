// styling
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
// components
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";
const Home = () => {
  return (
    <Animate>
      <div className="dashboard">
        <Sidebar />
        <Dashboard />
      </div>
    </Animate>
  );
};

export default Home;
