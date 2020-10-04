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
      onClick={onClick}
      disabled={disabled}
      className={`p-button p-disabled ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
