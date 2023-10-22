"use client";
import { useState } from "react";
// styling
import "../styles/auth.css";
import "../styles/mobile.css";
import authFetch from "@/config/authFetch";
import { storage } from "@/utils/storage";

const Login = () => {
  const [formResponse, setFormResponse] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const form = document.querySelector("form");
    form.addEventListener("focusin", () => {
      setFormResponse("");
    });
    e.preventDefault();
    try {
      const response = await authFetch.post("/login", formData);
      setFormResponse(response.data.msg);
      storage("name", response.data.name);
      storage("isLoggedIn", true);
      setTimeout(() => {
        window.location = "/dashboard";
      }, 3000);
    } catch (err) {
      setFormResponse(err.response.data.msg);
    }
  };

  return (
    <>
      <div className="auth-container login">
        <div className="auth-header">
          <h1>
            Welcome to <span className="appstack">AppStack.</span>
          </h1>
          <h2 className="header">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <p className="form-response">{formResponse}</p>
          <button type="submit">Log In</button>
          <p className="alt-container">
            Don't have an Account?
            <a href="./sign-up">
              <span className="alt-text"> Sign Up.</span>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
