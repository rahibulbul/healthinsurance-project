import React, { useState } from "react";
import "../style/style.css";

const InputPassword = ({ value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-password">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        required
      />
      <label className="input-label">{label}</label>
      <i
        className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
        onClick={togglePasswordVisibility}
      ></i>
    </div>
  );
};

export default InputPassword;
