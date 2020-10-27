import React, { FC, ReactNode } from "react";

import { Error } from "../../shared/icons";
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
  icon?: ReactNode;
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
  icon
}) => {
  return (
    <div className={"p-input"}>
      {label && <div className={"p-input__label"}>{label}</div>}
      <div className={"p-flex p-items-center p-relative"}>
      <input
        placeholder={placeholder}
        className={
          value && errors && errors[name]
            ? `p-input__container p-w-100 p-input__container--errors`
            : `p-input__container p-w-100 `
        }
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        disabled={disabled}
        type={type}
      />
      <div className={"p-input__container__icon p-absolute"}>{icon}</div>
      </div>
      {value ? (
        <div className={"p-input__error p-flex p-flex-row "}>
          <div className={"p-input__error__message"}>{errors[name]?  <Error /> : ""}{""}{errors[name]} </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
