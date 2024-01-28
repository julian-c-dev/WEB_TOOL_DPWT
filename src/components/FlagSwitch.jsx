import "./css/FlagSwitch.css";
import React, { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const FlagSwitch = ({ onToggle }) => {
  const { i18n } = useTranslation();
  const [toggle, setToggle] = useState(() => i18n.language === "en");

  const handleFlagSwitch = () => {
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      const newLanguage = newToggle ? "en" : "es";
      i18n.changeLanguage(newLanguage);
      // Notify parent component about the toggle
      onToggle(newToggle);
      return newToggle;
    });
  };

  useLayoutEffect(() => {
    // Update the state after the component has been rendered
    setToggle(i18n.language === "en");
  }, [i18n.language]);

  return (
    <div className="flex flex-row items-center">
      <div className="flag-switch" data-first-lang="Eng" data-second-lang="Esp">
        <input
          type="checkbox"
          id="flagSwitch"
          checked={toggle}
          onChange={handleFlagSwitch}
        />
        <label htmlFor="flagSwitch"></label>
      </div>
    </div>
  );
};

export default FlagSwitch;
