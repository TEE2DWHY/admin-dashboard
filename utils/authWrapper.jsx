"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
