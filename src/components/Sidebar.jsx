//! Sidebar.jsx

//? React Imports
import React, { useRef, useState } from "react";

//?  Component Imports
import InputLanguage from "./InputLanguage";
import InputLightTheme from "./InputLightTheme";
import InputSystem from "./InputSystem";

//?  Resource Imports
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { settings_dark, settings_white } from "../assets";
import { useTranslation } from "react-i18next";

//! COMPONENT Sidebar:
export const Sidebar = ({
  isNotDarkMode,
  toggleDarkMode,
  isOSChecked,
  toggleOS,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  //*  Language
  const [languageToggle, setLanguageToggle] = useState(false);
  const handleLanguageToggle = (newToggle) => {
    setLanguageToggle(newToggle);
  };

  //*  Translations
  const { t } = useTranslation();
  const language = t("language");
  const theme = t("theme");
  const screen = t("screen");

  return (
    <>
      <img
        onClick={toggleSidebar}
        className="px-4 w-[55px] h-[55px]"
        aria-label="toggle sidebar"
        src={`${isNotDarkMode ? settings_dark : settings_white}`}
        alt="Productivyt log"
      />

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40  dark:bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className={`fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2
              ${isNotDarkMode ? "border-main" : "border-slate-400"}
              ${isNotDarkMode ? "bg-[#66A5AD]" : "bg-gray-800"}
              ${isNotDarkMode ? "text-gray-900" : "text-white"}`}
              ref={ref}
              aria-label="Sidebar"
            >
              <div
                className={`flex items-center justify-end p-5 border-b-2 ${
                  isNotDarkMode ? "border-main" : "border-slate-400"
                }`}
              >
                <button
                  onClick={toggleSidebar}
                  className={`p-3 border-2 rounded-xl ${
                    isNotDarkMode ? "border-main" : "border-slate-400"
                  }`}
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback
                    fill={`${isNotDarkMode ? "zinc-800" : "white"}`}
                  />
                </button>
              </div>

              {/* Menu of Settings */}
              <ul>
                <li
                  className={`flex flex-row justify-between items-center gap-4 border-b-2 p-4 ${
                    isNotDarkMode ? "border-main" : "border-slate-400"
                  } `}
                >
                  <p
                    className={`${
                      isNotDarkMode ? "text-gray-900" : "text-white"
                    } text-lg`}
                  >
                    {language}:
                  </p>
                  <span className="pr-8">
                    <InputLanguage onToggle={handleLanguageToggle} />
                  </span>
                </li>
                <li
                  className={`flex flex-row justify-between items-center gap-4 border-b-2 p-4 ${
                    isNotDarkMode ? "border-main" : "border-slate-400"
                  } `}
                >
                  <p
                    className={`${
                      isNotDarkMode ? "text-gray-900" : "text-white"
                    } text-lg`}
                  >
                    {theme}:
                  </p>
                  <span className="flex flex-row gap-2 items-center">
                    <MdOutlineWbSunny fill="white" size={25} />
                    <InputLightTheme
                      darkMode={isNotDarkMode}
                      toggleDarkMode={toggleDarkMode}
                    />
                    <MdDarkMode fill="grey" size={25} />
                  </span>
                </li>
                <li
                  className={`flex flex-row justify-between items-center gap-4 border-b-2 p-4 ${
                    isNotDarkMode ? "border-main" : "border-slate-400"
                  } `}
                >
                  <p
                    className={`${
                      isNotDarkMode ? "text-gray-900" : "text-white"
                    } text-lg`}
                  >
                    {screen}:
                  </p>
                  <span className="flex flex-row gap-2 items-center">
                    <FaWindows fill="darkgrey" size={25} />
                    <InputSystem
                      darkMode={isNotDarkMode}
                      isOSChecked={isOSChecked}
                      toggleOS={toggleOS}
                    />

                    <FaApple fill="white" size={25} />
                  </span>
                </li>
              </ul>

              {/* Bottom of the SideBar */}
              <div className="absolute bottom-0 p-8">
                <p
                  className={`${
                    isNotDarkMode ? "text-gray-900" : "text-white"
                  } italic text-sm`}
                >
                  Desktop Productivity Wallpaper Tool v1.2
                </p>
                <p
                  className={`${
                    isNotDarkMode ? "text-gray-900" : "text-white"
                  } italic text-sm`}
                >
                  Julian C Dev &#169; 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Sidebar;

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

// author -> Julian C Dev; April 2024
