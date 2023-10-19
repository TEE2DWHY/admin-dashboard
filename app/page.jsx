"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    // Check the window width after the component has mounted (in the browser)
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 820);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
