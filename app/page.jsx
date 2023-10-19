"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 820
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    const dashboardHeader = document.querySelector(".dashboard-contents");
    dashboardHeader.classList.toggle("full-width");
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isSidebarVisible);
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
