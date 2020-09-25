import React, { FC } from "react";
import "./styles.scss";

interface Props {
  onClick: () => void;
  label: string;
  disabled: boolean;
}

const Button: FC<Props> = ({ onClick, label, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={"p-button"}>
      {label}
    </button>
  );
};

export default Button;
