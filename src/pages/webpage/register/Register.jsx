import React from "react";
import "./register.css";
import InputText from "../../../components/global/inputText/InputText";
import InputPassword from "../../../components/global/inputPassword/InputPassword";

const Register = () => {
  return (
    <div className="container register debug-screen">
      <div className="register-left">
        <h1>Registration</h1>
        <p>Register here for free and enjoy some awesome deals</p>
        <div className="register-form">
          <form form action="#" className="registration-form">
            <div className="form-group">
              <InputText />
              <InputText />
            </div>
          </form>
        </div>
      </div>
      <div className="register-right">
        <h1>
          <i class="bx bx-grid-alt"></i>SQUARE
        </h1>
        <p>Go with the square</p>
        <p>And achieve Optimal Wellness</p>
        <p>Choose Life, Choose Health</p>
      </div>
    </div>
  );
};

export default Register;
