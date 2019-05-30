import React from "react";

export default function InputField({ children, inputName, value, onChange }) {
  return (
    <>
      <label htmlFor={inputName}>{children}</label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        className="new-trade__input"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
