import React from "react";
import './StepButton.css'

interface StepButtonProps {
  variant: "back" | "next" | "confirm";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const StepButton: React.FC<StepButtonProps> = ({
  variant,
  onClick,
  type = "button",
  disabled = false,
}) => {
  let text = "";
  let className = "";

  switch (variant) {
    case "back":
      text = "Go Back";
      className = "back-btn";
      break;
    case "next":
      text = "Next Step";
      className = "next-btn";
      break;
    case "confirm":
      text = "Confirm";
      className = "confirm-btn";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`step-btn ${className}`}
    >
      {text}
    </button>
  );
};

export default StepButton;
