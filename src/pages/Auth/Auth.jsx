import React, { useState } from "react";
import "./Auth.scss";
import LogoSvg from "../../imgs/logo.png";
import Login from "../../components/LoginForm/Login";
import SignUp from "../../components/SignupForm/SignUp";

const Auth = () => {
  //! Props

  //! State
  const [isSignUp, setIsSignUp] = useState(false);
  //! Function

  //! Effect

  //! Render
  return (
    <div className="auth-section">
      <div className="auth-section_left">
        <img src={LogoSvg} alt="logo" />
        <div className="auth-section_left-name">
          <h1>Keyly Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {isSignUp ? <SignUp setIsSignUp={setIsSignUp}/> : <Login setIsSignUp={setIsSignUp}/>}
    </div>
  );
};

export default Auth;
