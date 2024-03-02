import React from "react";
import "./Button.scss";

const Button = ({children, addClass}) => {
  return (
    <button className={`button ${addClass}`}>
      <p className="button-text">{children}</p>
    </button>
  );
};

export default Button;
