//! App.jsx

//? React Imports
import React, { useState, useEffect } from "react";

//?  Component Imports
import { Dashboard, Footer, Navbar } from "./components";

//?  Styling Imports
import styles from "./style";

//?  Resource Imports
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

//! COMPONENT App:
function App() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const languageToSet = userLanguage.startsWith("en") ? "en" : "es";
    setLanguage(languageToSet);
    i18n.changeLanguage(languageToSet);
  }, []);

  // * light or dark THEME
  const [isNotDarkMode, setisNotDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isNotDarkMode;
    setisNotDarkMode(newDarkMode);
  };

  // * Mac or not OS
  const [isOSChecked, setisOSChecked] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMacintosh = /macintosh|mac os x/i.test(userAgent);
    setisOSChecked(!isMacintosh);
  }, []);

  const toggleOS = () => {
    setisOSChecked(!isOSChecked);
  };

  useEffect(() => {
    setisOSChecked(!isOSChecked);
  }, []);

  const scrollToPreview = () => {
    const previewElement = document.getElementById("navbar");
    if (previewElement) {
      previewElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div
        className={`${isNotDarkMode ? "bg-[#66A5AD] light-mode" : "bg-main"} 
         w-full h-screen flex flex-col`}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter} flex-grow`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar
              isNotDarkMode={isNotDarkMode}
              toggleDarkMode={toggleDarkMode}
              isOSChecked={isOSChecked}
              toggleOS={toggleOS}
            />
          </div>
        </div>
        <div className={`${styles.flexStart} flex-grow`}>
          <div className={`${styles.boxWidth} flex-grow`}>
            <Dashboard
              isNotDarkMode={isNotDarkMode}
              isOSChecked={isOSChecked}
            />
          </div>
        </div>
        <div
          className={`${isNotDarkMode ? "bg-[#66A5AD]" : "bg-main"}  ${
            styles.paddingX
          } ${styles.flexStart} flex-grow`}
        >
          <div className={`${styles.boxWidth}`}>
            <Footer isNotDarkMode={isNotDarkMode} />
          </div>
        </div>
        <button
          className="bg-[#66c3cf] font-semibold text-xs text-black w-16 h-12 rounded-lg fixed bottom-6 right-4 flex items-center justify-center z-10 sm:hidden"
          onClick={scrollToPreview}
        >
          Preview
        </button>
      </div>
    </I18nextProvider>
  );
}

export default App;

// author -> Julian C Dev; April 2024
