"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userIsLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (userIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;

export const useAuth = () => {
  return useContext(AuthContext);
};
