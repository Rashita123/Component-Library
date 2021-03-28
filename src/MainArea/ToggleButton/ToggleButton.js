import "./ToggleButton.css";
import { useState } from "react";
export const ToggleButton = () => {
  const [mode, setMode] = useState("light");
  const toggleModeHandler = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  console.log(`toggle-${mode}`);

  return (
    <div onClick={toggleModeHandler} className={`toggle toggle-${mode}`}>
      <div className={`circle circle-${mode}`}></div>
    </div>
  );
};
