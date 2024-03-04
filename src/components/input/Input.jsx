import React from "react";
import "./Input.scss";

const Input = ({
  placeholder = "placeholder",
  labelTitle,
  labelDescr,
  name,
  onChange,
  value,
  partners,
}) => {
  if (name === "payer") {
    return (
      <div className="input">
        <label htmlFor={name}>
          <h6 className="input__title">{labelTitle}</h6>
          <p className="input__descr">{labelDescr}</p>
        </label>
        <select
          name={name}
          className="input__fieldSelect"
          onChange={onChange}
          value={value}
        >
          <option value={partners.partner1} className="input__option">
            {partners.partner1}
          </option>
          <option value={partners.partner2} className="input__option">
          {partners.partner2}
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
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
