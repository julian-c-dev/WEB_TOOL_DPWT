//! Footer.jsx

//?  Styling Imports
import styles from "../style";
import "./css/Footer.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";
import GitHubButton from "react-github-btn";
import { linkedin_white, linkedin_dark } from "../assets";

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
            Tool&nbsp;&#174;&nbsp;2024
          </span>
        </div>
        <div className="flex flex-row gap-3 items-baseline md:mt-0 mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
