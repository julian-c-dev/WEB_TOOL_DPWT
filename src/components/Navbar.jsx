import { useState } from "react";
import { close, logo, menu, coffee, github } from "../assets";
import FlagSwitch from "./Flagswitch";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const navLinks = t("navLinks");
  const handleToggle = (newToggle) => {
    setToggle(newToggle);
  };
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      {/* LOGO */}
      <img src={logo} alt="Productivyt log" className="w-[55px] h-[32px]" />
      <span className="mx-16" key="flagswitch">
        <FlagSwitch onToggle={handleToggle} />
      </span>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* FLAGSWITCH - Select Language */}

        {/* BUTTONS */}
        {navLinks.map((nav, index) => {
          const isLast = index === navLinks.length - 1;
          const iconSrc = nav.id === "buyMeACoffee" ? coffee : github;

          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[14px] py-2 flex gap-1 items-center text-white border border-white hover:border-[#49CBD7] rounded-full ${
                isLast ? "mr-0" : "mr-10"
              }`}
            >
              <a className="mx-4 flex gap-2 items-center" href={`#${nav.id}`}>
                {nav.title}
                {nav.id === "buyMeACoffee" || nav.id === "github" ? (
                  <img
                    src={iconSrc}
                    className="w-[20px] h-[20px]"
                    alt={nav.id}
                  />
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>

      {/* MOBILE MENU */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="wp-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
