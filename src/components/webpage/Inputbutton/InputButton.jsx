import React from "react";
import "../style/style.css";

const InputButton = ({ text, onClick }) => {
  return (
    <div className="input-button">
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default InputButton;
