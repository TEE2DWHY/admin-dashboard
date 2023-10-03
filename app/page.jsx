// styling
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
// components
import Sidebar from "@/components/sidebar";
const Home = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
