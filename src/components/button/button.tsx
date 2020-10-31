import React, { FC } from "react";
import "./styles.scss";

interface Props {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

const Button: FC<Props> = ({
  onClick,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`p-button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
