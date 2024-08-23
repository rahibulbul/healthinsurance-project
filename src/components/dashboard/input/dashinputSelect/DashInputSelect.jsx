import React from "react";
import "../style/style.css";

const DashInputSelect = ({ options, onChange, className = "" }) => {
  return (
    <div className={`input-select-dashboard ${className}`}>
      <select className="select" onChange={onChange} required>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DashInputSelect;
