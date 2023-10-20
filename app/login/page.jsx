"use client";
import { useState } from "react";
// styling
import "../../styles/auth.css";
import "../../styles/mobile.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="auth-container">
        <div className="signup-header">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit">Log In</button>
          <p className="login-container">
            Don't have an Account?
            <a href="./sign-up">
              <span className="login-text">Sign Up.</span>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
