"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      window.location = "/login";
    }
  }, []);

  return (
    <Animate>
      <div className="dashboard">
        {isSidebarVisible && (
          <Sidebar closeSideBar={() => setSidebarVisible(!isSidebarVisible)} />
        )}
        <Dashboard click={toggleSidebar} />
      </div>
    </Animate>
  );
};

export default Home;
