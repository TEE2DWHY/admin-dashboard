"use client";
import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Password Mismatch!");
      return;
    }
    console.log(formData);
  };

  return (
    <>
      <div className="sign-up">
        <div className="signup-header">
          <h2>Get Started</h2>
          <p>Welcome to AppStack's Dashboard.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <p className="login-container">
            Already have an Account? <span className="login-text">Log in.</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
