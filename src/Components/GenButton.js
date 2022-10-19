import React from "react";

export function GenButton({ handleClick, disabled, text, className }) {
  return (
    <button onClick={handleClick} className={className} disabled={disabled}>
      {text}
    </button>
  );
}
