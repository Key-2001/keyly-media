import React from "react";
import "./Auth.scss";
import LogoSvg from "../../imgs/logo.png";

const Auth = () => {
  return (
    <div className="auth-section">
      <div className="auth-section_left">
        <img src={LogoSvg} alt="logo" />
        <div className="auth-section_left-name">
          <h1>Keyly Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};

const Login = () => {
  return (
    <div className="auth-section_right">
      <form className="auth-section_right-form auth-form">
        <h3>Log In</h3>
        <div>
          <input
            className="auth-section_right-form-input"
            type="text"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="auth-section_right-form-input"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button info-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="auth-section_right">
      <form className="auth-section_right-form auth-form">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="auth-section_right-form-input"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="auth-section_right-form-input"
            name="lastName"
          />
        </div>
        <div>
          <input
            className="auth-section_right-form-input"
            type="text"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="auth-section_right-form-input"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="auth-section_right-form-input"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button info-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
