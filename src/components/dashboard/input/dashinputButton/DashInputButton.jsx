import React from "react";
import "../style/style.css";

const DashInputButton = ({ text, onClick }) => {
  return (
    <div className="dash-input-button">
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default DashInputButton;
