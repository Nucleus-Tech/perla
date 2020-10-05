import React, { FC } from "react";

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

      {value ? (
        <div className={"p-input__error p-flex p-flex-row "}>
          <Error />{" "}
          <div className={"p-input__error__message"}>{errors[name]}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
