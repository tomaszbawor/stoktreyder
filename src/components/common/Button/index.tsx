import React from "react";
import "./Button.scss";

interface Props {
  onClick?: () => void;
  color?: ButtonColor;
}

export enum ButtonColor {
  Red,
  Green,
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<Props> = ({ onClick, color, children }) => {
  function getclass(colorType: ButtonColor | undefined) {
    switch (colorType) {
      case ButtonColor.Green:
        return "green";
      case ButtonColor.Red:
        return "red";
      default:
        return "";
    }
  }

  const cls = getclass(color);
  return (
    <button
      className={`button ${getclass(color)}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
