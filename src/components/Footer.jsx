//! Footer.jsx

//?  Styling Imports
import styles from "../style";
import "./css/Footer.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";
import {
  github_dark,
  github_white,
  linkedin_white,
  linkedin_dark,
} from "../assets";

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
            &nbsp; | &nbsp; Desktop Productivity Wallpaper Tool&#174; 2024
          </span>
        </div>
        <div className="flex flex-row md:mt-0 mt-6">
          <a
            key="social-media-1"
            href="https://github.com/julian-c-dev/WEB_TOOL_PDWT"
            target="_blank"
          >
            <img
              src={`${isNotDarkMode ? github_dark : github_white}`}
              alt="github link"
              className={` w-[21px] h-[21px] object-contain cursor-pointer mr-4`}
            />
          </a>
          <a
            key="social-media-2"
            href="https://www.linkedin.com/in/julian-cantera-397197230/"
            target="_blank"
          >
            <img
              src={`${isNotDarkMode ? linkedin_dark : linkedin_white}`}
              alt="linkedin link"
              className={` w-[21px] h-[21px] object-contain cursor-pointer mr-4`}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
