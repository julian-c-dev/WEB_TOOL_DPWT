import { useState } from "react";
import { logo, timer, coffee, github } from "../assets";
import FlagSwitch from "./Flagswitch";
import { useTranslation } from "react-i18next";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const title1 = t("title.1");
  const title2 = t("title.2");
  const title3 = t("title.3");

  const navLinks = t("navLinks");
  const handleToggle = (newToggle) => {
    setToggle(newToggle);
  };
  return (
    <div className="w-full py-2 flex justify-between items-center navbar">
      {/* LOGO */}
      <img src={logo} alt="Productivyt log" className="w-[55px] h-[32px]" />

      <h1 className={` ${styles.navTitle}  ${styles.flexCenter} gap-2`}>
        <span>{title1}</span>
        <span className="text-secondary">{title2}</span>
        <span>{title3}</span>
        <img src={timer} alt="Productivyt log" className="w-[35px] h-[35px]" />
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="mx-16" key="flagswitch">
          <FlagSwitch onToggle={handleToggle} />
        </li>
        {/* {navLinks.map((nav, index) => {
          const isLast = index === navLinks.length - 1;
          const iconSrc = nav.id === "buyMeACoffee" ? coffee : github;

          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[14px] py-2 flex gap-1 items-center text-white border border-white hover:border-[#49CBD7] rounded-full ${
                isLast ? "mr-0" : "mr-10"
              }`}
            >
              <a
                className="mx-4 flex gap-2 items-center"
                href={`${
                  nav.id === "buyMeACoffee"
                    ? "https://www.buymeacoffee.com/julian.c.dev"
                    : "#"
                }`}
              >
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
        })} */}
      </ul>
    </div>
  );
};

export default Navbar;
