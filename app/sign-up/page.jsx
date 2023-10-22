"use client";
import { useState } from "react";
import authFetch from "@/config/authFetch";

// styling
import "../../styles/auth.css";
import "../../styles/mobile.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Password Mismatch!");
      return;
    }
    try {
      const response = await authFetch.post("/signup", formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="auth-container sign-up">
        <div className="auth-header">
          <h2 className="header">Get Started</h2>
          <p>Welcome to AppStack's Dashboard.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name </label>
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
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
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <p className="alt-container">
            Already have an Account?
            <a href="./login">
              <span className="alt-text"> Log in.</span>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
