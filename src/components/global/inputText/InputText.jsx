import React from "react";
import "../style/style.css";

const InputText = ({ value, onChange, label }) => {
  return (
    <div className="input-text">
      <input type="text" value={value} onChange={onChange} required />
      <label className="input-label">{label}</label>
    </div>
  );
};

export default InputText;
