import React from "react";
import "./Input.scss";

const Input = ({
  placeholder = "placeholder",
  labelTitle,
  labelDescr,
  name,
}) => {
  if (name === "payer") {
    return (
      <>
        <label htmlFor={name}>
          <h6 className="input__title">{labelTitle}</h6>
          <p className="input__descr">{labelDescr}</p>
        </label>
        <select name={name}>
          <option value="partner1" selected>Партнер 1</option>
          <option value="partner2">
            Партнер 2
          </option>
        </select>
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>
        <h6 className="input__title">{labelTitle}</h6>
        <p className="input__descr">{labelDescr}</p>
      </label>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
