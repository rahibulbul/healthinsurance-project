import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import InputText from "../../../components/webpage/inputText/InputText";
import InputPassword from "../../../components/webpage/inputPassword/InputPassword";
import Button from "../../../components/webpage/Inputbutton/InputButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/employeedashboard");
    // Further form submission logic goes here
  };

  return (
    <div className="container login-page debug-screen">
      <form action="#" className="login-form" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Hey there!👋🏼</h2>
          <h3>Welcome back</h3>
          <p>Please login to start your session!</p>
        </div>
        <div className="login-input">
          <InputText
            value={username}
            onChange={handleUsernameChange}
            label="username"
          />
        </div>
        <div className="login-input">
          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            label="Password"
          />
        </div>
        <div className="login-checkbox">
          <div className="login-remember-me">
            <input
              type="checkbox"
              name="login-remember-me"
              id="login-remember-me"
            />
            <label htmlFor="login-remember-me">Remember me</label>
          </div>
          <div className="login-forgot">
            <Link to="#" className="login-forgot-link">
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="login-btn">
          <Button text="Sign In" />
        </div>
        <div className="not-register">
          <span>Not yet registered?</span>
          <Link to="/registration" className="login-register-link">
            Click Here to free register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
