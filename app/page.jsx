"use client";
import { useDebugValue, useEffect, useState } from "react";
// styling
import Dashboard from "@/components/dashboard";
import "../styles/home.css";
// components
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";
// import { Skeleton } from "antd";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    const dashboardHeader = document.querySelector(".dashboard-contents");
    dashboardHeader.classList.toggle("full-width");
  };

  return (
    <Animate>
      <div className="dashboard">
        {/* <Skeleton active> */}
        {isSidebarVisible && <Sidebar />}
        <Dashboard click={toggleSidebar} />
        {/* </Skeleton> */}
      </div>
    </Animate>
  );
};

export default Home;
