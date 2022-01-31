import React from "react";
import { IToggleSwitch } from "../../types";
import "./ToggleSwitch.scss";

type Props = {};

const ToggleSwitch = ({ handleToggle }: IToggleSwitch) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onClick={handleToggle}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" data-no="F" data-yes="C" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
