"use client";
import { useState } from "react";
// styling
import "../styles/auth.css";
import "../styles/mobile.css";
import authFetch from "@/config/authFetch";
import { storage } from "@/utils/storage";
import { handleChange } from "@/utils/handleChange";
import { Spinner } from "@/icons/icons";

const Login = () => {
  const [formLoading, setFormLoading] = useState(false);
  const [formResponse, setFormResponse] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const form = document.querySelector("form");
    form.addEventListener("focusin", () => {
      setFormResponse("");
    });
    e.preventDefault();
    setFormLoading(true);
    try {
      const response = await authFetch.post("/login", formData);
      setFormLoading(false);
      setFormResponse(response.data.msg);
      storage("name", response.data.name);
      storage("isLoggedIn", true);
      setTimeout(() => {
        window.location = "/dashboard";
      }, 3000);
    } catch (err) {
      setFormResponse(err.response.data.msg);
      setFormLoading(false);
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
              onChange={(e) => handleChange(e, setFormData, formData)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={(e) => handleChange(e, setFormData, formData)}
            />
          </div>
          <p className="form-response">{formResponse}</p>
          <button type="submit">{formLoading ? <Spinner /> : "Log in"}</button>
          <p className="alt-container">
            Don't have an Account?
            <a href="./sign-up">
              <span className="alt-text"> Sign Up.</span>
            </a>
          </p>
        </form>
        <a href="https://codewithty.dev" target="_blank" className="created-by">
          <p>Created by Tee2dWhy.</p>
        </a>
      </div>
    </>
  );
};

export default Login;
