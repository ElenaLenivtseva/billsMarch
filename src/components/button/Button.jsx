import React from "react";
import "./Button.scss";

const Button = ({ children, addClass, onClick }) => {
  return (
    <button className={`button ${addClass ? addClass : ""}`} onClick={onClick}>
      <p className="button-text">{children}</p>
    </button>
  );
};

export default Button;
