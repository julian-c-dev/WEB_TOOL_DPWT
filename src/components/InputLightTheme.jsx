//! Theme.jsx

//?  Styling Imports
import "./css/Theme.css";

//! COMPONENT InputLightTheme:
const InputLightTheme = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-switch flex flex-row items-center">
      <input
        type="checkbox"
        id="lightSwitch"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="lightSwitch" className="cursor-pointer w-14 h-8">
        <span
          className={`rounded-full w-6 h-6 bg-white dark:bg-black transition-transform transform ${
            darkMode ? "translate-x-0" : "translate-x-6"
          }`}
        />
      </label>
    </div>
  );
};

export default InputLightTheme;
