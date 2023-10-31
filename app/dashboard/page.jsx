"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";
import { useAuth } from "@/utils/authWrapper";
import { redirect } from "next/navigation";
const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const user = sessionStorage.getItem("isLoggedIn");
    if (!user) {
      redirect("/");
    }
  });

  return (
    <>
      <Animate>
        <div className="dashboard">
          {isSidebarVisible && (
            <Sidebar
              closeSideBar={() => setSidebarVisible(!isSidebarVisible)}
            />
          )}
          {isLoggedIn && <Dashboard click={toggleSidebar} />}
        </div>
      </Animate>
    </>
  );
};

export default App;
