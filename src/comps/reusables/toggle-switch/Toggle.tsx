import React from "react";
import "./styles.scss";

export interface ToggleProps {
  checked: boolean;
  toggleTheme: (isChecked: boolean) => void;
}
export const Toggle = ({ checked, toggleTheme }: ToggleProps) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={checked}
        onChange={(e) => toggleTheme(e.target.checked)}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};
