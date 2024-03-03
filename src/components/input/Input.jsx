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
      <div className="input">
        <label htmlFor={name}>
          <h6 className="input__title">{labelTitle}</h6>
          <p className="input__descr">{labelDescr}</p>
        </label>
        <select name={name} className="input__fieldSelect">
          <option value="partner1" selected className="input__option">Партнер 1</option>
          <option value="partner2" className="input__option">
            Партнер 2
          </option>
        </select>
      </div>
    );
  }
  return (
    <div className="input">
      <label htmlFor={name}>
        <h6 className="input__title">{labelTitle}</h6>
        <p className="input__descr">{labelDescr}</p>
      </label>
      <input
        type="text"
        className="input__field"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
