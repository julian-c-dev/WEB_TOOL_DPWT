//! InputSystem.jsx

//? React Imports
import React from "react";

//! COMPONENT InputSystem:
const InputSystem = ({ isOSChecked, toggleOS }) => {
  return (
    <div className="theme-switch flex flex-row items-center">
      <input
        type="checkbox"
        id="OSSwitch"
        checked={isOSChecked}
        onChange={toggleOS}
      />
      <label htmlFor="OSSwitch" className="cursor-pointer w-14 h-8">
        <span
          className={`rounded-full w-6 h-6 bg-white dark:bg-black transition-transform transform`}
        />
      </label>
    </div>
  );
};

export default InputSystem;
