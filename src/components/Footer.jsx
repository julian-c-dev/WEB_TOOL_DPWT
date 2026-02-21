//! Footer.jsx

//?  Styling Imports
import styles from "../style";
import "./css/Footer.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";
import { linkedin_white, linkedin_dark, coffee_white, coffee_dark } from "../assets";

//! COMPONENT Footer:
const Footer = ({ isNotDarkMode }) => {
  //*  Translations
  const { t } = useTranslation();
  const popupContent4 = t("popup.content4");
  return (
    <section
      className={` ${styles.flexCenter} ${styles.paddingY} flex-col pb-4 `}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-2 border-t-[1px] border-t-[#3F3E45] ">
        <div className="font-poppins flex flex-col sm:flex-row font-normal text-[14px] leading-[20px]">
          <span
            className={` ${isNotDarkMode ? "text-main " : "text-white  "} `}
          >
            &nbsp;{" "}
            <div className="tooltip">
              Julian C Dev
              <span className="tooltiptext">{popupContent4}</span>
            </div>
            &nbsp; | &nbsp; Desktop Productivity Wallpaper
            Tool&nbsp;&#169;&nbsp;2026
          </span>
        </div>
        <div className="flex flex-row gap-3 items-center md:mt-0 mt-6">
          <a
            href="https://www.linkedin.com/in/julian-cantera-397197230/"
            target="_blank"
          >
            <img
              src={`${isNotDarkMode ? linkedin_dark : linkedin_white}`}
              alt="linkedin link"
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          </a>
          <a
            href="https://www.buymeacoffee.com/julian.c.dev"
            target="_blank"
          >
            <img
              src={`${isNotDarkMode ? coffee_dark : coffee_white}`}
              alt="buy me a coffee"
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
