import React, { useState } from "react";
import "./styles.scss";
export const Toggle = () => {
  const [checked, setCheck] = useState(true);
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={checked}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};
