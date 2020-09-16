import React, { FC } from "react";

import "./styles.scss";

interface Props {
  id: string;
  value: string;
  onChange: (value) => void;
  placeholder: string;
  name: string;
  disabled?: boolean;
  errors?: object;
  label: string;
}

const Input: FC<Props> = ({
  onChange,
  placeholder,
  name,
  id,
  value,
  disabled = false,
  errors = {},
  label,
}) => {
  return (
    <div className={"p-input"}>
      <div className={"p-input__label"}>{label}</div>
      <input
        placeholder={placeholder}
        className={`p-input__container`}
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        disabled={disabled}
      />
      {errors && errors[name] ? (
        <div className={"p-input__error"}>{errors[name]}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
