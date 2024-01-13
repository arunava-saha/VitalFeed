import React from "react";

export const InputDiv = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          id={labelFor}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
