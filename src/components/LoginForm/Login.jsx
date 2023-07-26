import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthAction";

const Login = (props) => {
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.authReducer)
  //! Props
  const { setIsSignUp } = props;
  //! State
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  //! Function
  const handleChange = useCallback((e) => {
    setData({...data, [e.target.name]: e.target.value})
  },[data])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(logIn(data))
  },[data])


  //! Effect

  //! Render
  return (
    <div className="auth-section_right">
      <form className="auth-section_right-form auth-form" onSubmit={handleSubmit}>
        <h3>Log In</h3>
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
        </div>
        <div>
          <span
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={() => setIsSignUp(true)}
          >
            Don't have an account Sign up
          </span>
          <button className="button info-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Loading ..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
