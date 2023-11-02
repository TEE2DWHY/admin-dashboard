"use client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import "../../styles/home.css";
import Sidebar from "@/components/sidebar";
import Animate from "@/libs/Animate";
import { useAuth } from "@/utils/authWrapper";
import { userFetch } from "@/config/authFetch";
import { storage } from "@/utils/storage";
import Preloader from "@/components/preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    // server side authentication
    const authUser = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          setIsLoading(false);
          throw new Error("No token found");
        }
        const response = await userFetch.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        storage("name", response.data.name);
        setIsLoggedIn(true);
        setIsLoading(false);
      } catch (err) {
        location.href = "/";
      }
    };
    authUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
};

export default App;
