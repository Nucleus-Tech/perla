import React, {FC} from "react";

interface Props {
  onClick: () => void;
  label: string;
}

const Button: FC<Props> = ({onClick, label}) => {

  return (
      <button onClick={onClick}>{label}</button>
  )
}

export default Button;