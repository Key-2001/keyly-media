import React, { useCallback, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { signUp } from "../../actions/AuthAction";

const SignUp = (props) => {
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.authReducer)
  //! Props
  const { setIsSignUp } = props;
  //! State
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [isConfirmPass, setIsConfirmPass] = useState(true);
  //! Function
  const handleChange = useCallback((e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  },[data])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    data.password === data.confirmPassword ? dispatch(signUp(data)) : setIsConfirmPass(false);
  },[data])
  //! Effect

  //! Render
  return (
    <div className="auth-section_right">
      <form className="auth-section_right-form auth-form" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="auth-section_right-form-input"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="auth-section_right-form-input"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="auth-section_right-form-input"
            type="text"
            name="username"
            placeholder="Usernames"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="auth-section_right-form-input"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="auth-section_right-form-input"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <span
          style={{
            display: isConfirmPass ? "none" : "block",
            color: "red",
            fontSize: "12px",
            alignSelf: "flex-end",
            marginRight: "5px",
          }}
        >
          * Confirm password is not same
        </span>
        <div>
          <span
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={() => setIsSignUp(false)}
          >
            Already have an account. Login!
          </span>
        </div>
        <button className="button info-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Loading ..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
