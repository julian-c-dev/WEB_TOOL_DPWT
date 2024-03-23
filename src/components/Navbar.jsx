import { logo_light, logo_dark, coffee_white, coffee_dark } from "../assets";
import Sidebar from "./Sidebar";
import { useTranslation } from "react-i18next";

const Navbar = ({ isNotDarkMode, toggleDarkMode, isOSChecked, toggleOS }) => {
  const { t } = useTranslation();
  const navBarButton = t("navBarButton");

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
        <button
          key={1}
          className={`font-poppins font-normal cursor-pointer text-[10px] xs:text-[14px] py-2 flex gap-1 items-center border ${
            isNotDarkMode
              ? "text-main border-main hover:border-[#64f2ff]"
              : "text-white  border-white hover:border-[#49CBD7]"
          }     rounded-full `}
        >
          <a
            className="mx-4 flex gap-2 items-center"
            href="https://www.buymeacoffee.com/julian.c.dev"
            target="_blank"
          >
            {navBarButton}
            <img
              src={`${isNotDarkMode ? coffee_dark : coffee_white}`}
              className={`w-[20px] h-[20px] ${
                isNotDarkMode
                  ? "fill-slate-400 hover:fill-main"
                  : "fill-main hover:fill-[#49CBD7]"
              }`}
            />
          </a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
