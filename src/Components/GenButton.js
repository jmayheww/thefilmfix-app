import React from "react";

export function GenButton({
  handleClick,
  disabled = false,
  type = "button",
  text,
  className = "",
}) {
  return (
    <button
      onClick={handleClick}
      className={`btn ${className}`}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}
