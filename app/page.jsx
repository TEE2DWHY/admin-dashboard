"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 820);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

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
