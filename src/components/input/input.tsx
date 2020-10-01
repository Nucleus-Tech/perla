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
  label?: string;
  type?: "text" | "password" | "email";
  className?: string;
}

const Input: FC<Props> = ({
  onChange,
  placeholder,
  name,
  id,
  value = "",
  disabled = false,
  errors = {},
  label,
  type = "text",
}) => {
  return (
    <div className={"p-input"}>
      {label && <div className={"p-input__label"}>{label}</div>}
      <div>
        <input
          placeholder={placeholder}
          className={
            value && errors && errors[name]
              ? `p-input__container p-input__container--errors}`
              : `p-input__container`
          }
          name={name}
          onChange={onChange}
          value={value}
          id={id}
          disabled={disabled}
          type={type}
        />
        <i className={"className"}></i>
      </div>

      {value ? <div className={"p-input__error"}>{errors[name]}</div> : <></>}
    </div>
  );
};

export default Input;
