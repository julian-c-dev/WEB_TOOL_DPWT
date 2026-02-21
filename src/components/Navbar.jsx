//! Navbar.jsx

//?  Component Imports
import Sidebar from "./Sidebar";
import GitHubButton from "react-github-btn";

//?  Resource Imports
import { logo_light, logo_dark } from "../assets";

//! COMPONENT Navbar:
const Navbar = ({ isNotDarkMode, toggleDarkMode, isOSChecked, toggleOS }) => {
  return (
    <>
      <div
        id="navbar"
        className="w-full py-2 flex justify-between items-center navbar gap-4"
      >
        {/* LOGO */}
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src={isNotDarkMode ? logo_light : logo_dark}
            alt="Productivity log"
            className="w-[55px] h-[32px]"
          />
          <div className="cursor-pointer">
            <Sidebar
              isNotDarkMode={isNotDarkMode}
              toggleDarkMode={toggleDarkMode}
              isOSChecked={isOSChecked}
              toggleOS={toggleOS}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <GitHubButton
            href="https://github.com/julian-c-dev/WEB_TOOL_DPWT"
            data-color-scheme={`no-preference: ${isNotDarkMode ? "light" : "dark"}; light: light; dark: dark;`}
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star julian-c-dev/WEB_TOOL_DPWT on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href="https://github.com/julian-c-dev"
            data-color-scheme={`no-preference: ${isNotDarkMode ? "light" : "dark"}; light: light; dark: dark;`}
            data-show-count="true"
            aria-label="Follow @julian-c-dev on GitHub"
          >
            Follow @julian-c-dev
          </GitHubButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
