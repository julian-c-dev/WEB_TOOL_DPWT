//* Dashboard.jsx

//? React Imports
import React, { useState } from "react";

//?  Component Imports
import SelectBg from "./SelectBg";
import SelectShape from "./SelectShape";
import SelectResolution from "./SelectResolution";
import SelectDivision from "./SelectDivision";
import Preview from "./Preview";

//?  Styling Imports
import styles from "../style";
import "./css/Dashboard.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";
import { arrow_right } from "../assets";

const Dashboard = ({ isNotDarkMode, isOSChecked }) => {
  const { t } = useTranslation();
  const preview = t("preview");
  const resetButtonText = t("button.reset");
  const generateButtonText = t("button.generate");
  const [selectedBg, setSelectedBg] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(4);
  const [selectedResolution, setSelectedResolution] = useState(null);

  const handleSelectBg = (bg) => {
    setSelectedBg(bg);
  };

  const handleSelectShape = (shape) => {
    setSelectedShape(shape);
  };

  const handleSelectDivision = (division) => {
    setSelectedDivision(division);
  };

  const handleSelectResolution = (resolution) => {
    setSelectedResolution(resolution);
  };

  const handleReset = () => {
    setSelectedBg(null);
    setSelectedShape(null);
    setSelectedDivision(4);
    setSelectedResolution(null);
  };

  const handleGenerate = () => {
    let bgName;

    switch (selectedBg) {
      case "#000410":
        bgName = "bg1";
        break;
      case "linear-gradient(to top, #000000 0%, #808080 100%)":
        bgName = "bg2";
        break;
      case "#7C7C7C":
        bgName = "bg3";
        break;
      case "linear-gradient(to top, #ffdb58 0%, #000000 100%)":
        bgName = "bg4";
        break;
      case "#5897DB":
        bgName = "bg5";
        break;
      case "linear-gradient(to top, #30cfd0 0%, #330867 100%)":
        bgName = "bg6";
        break;
      case "linear-gradient(to top, #667eea 0%, #764ba2 100%)":
        bgName = "bg7";
        break;
      case "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)":
        bgName = "bg8";
        break;
      default:
        bgName = "unknown";
        break;
    }

    const jsonData = {
      selectedBg: bgName,
      selectedShape,
      selectedDivision,
      selectedResolution,
    };

    console.log(jsonData);
  };

  const isGenerateDisabled = selectedResolution === null;

  return (
    <section
      className={` ${styles.flexCenter} py-20 flex-col gap-4 ${
        isNotDarkMode ? "bg-[#C4DFE6]" : "bg-black-gradient-2"
      }  box-shadow`}
    >
      <div
        className={`w-full ${styles.flexCenter} flex-col md:flex-row flex-nowrap gap-4`}
      >
        <div
          className={`min-w-[200px] xl:w-1/4 ${styles.flexCenter} relative flex-col flex-nowrap gap-4 `}
        >
          <div>
            {selectedShape ? (
              ""
            ) : (
              <div>
                <p
                  className={`absolute -top-12 -left-4 xss:-left-8 ss:-left-10 w-16 z-10 ${
                    isNotDarkMode ? "text-main" : "text-white"
                  } text-2xl font-mono neon`}
                >
                  {preview}
                </p>
                <img
                  className="absolute -top-6 left-0 w-16 z-10"
                  src={arrow_right}
                />
              </div>
            )}

            <Preview
              selectedBg={selectedBg}
              selectedShape={selectedShape}
              selectedDivision={selectedDivision}
              isOSChecked={isOSChecked}
            />
          </div>
          <div className={`${styles.flexCenter} gap-4`}>
            <button
              type="button"
              className={` mt-8 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] w-[127.995px]
            ${
              selectedBg !== null ? styles.normalButton : styles.disableButton
            } `}
              onClick={handleReset}
            >
              {resetButtonText}
            </button>

            <button
              type="button"
              className={` mt-8 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] w-[127.995px]
            ${
              isGenerateDisabled
                ? styles.disableButton
                : "glow-on-hover allow_button text-main cursor-pointer"
            } `}
              disabled={isGenerateDisabled}
              onClick={handleGenerate}
            >
              {generateButtonText}
            </button>
          </div>
        </div>

        <div
          className={`min-w-full sm:min-w-[647px] w-1/2 ${styles.flexCenter} sm:flex-row flex-wrap gap-4`}
        >
          <SelectBg onSelectBg={handleSelectBg} />
          <SelectShape
            onSelectShape={handleSelectShape}
            hasSelectedBg={selectedBg !== null}
            isNotDarkMode={isNotDarkMode}
          />
          <SelectDivision
            onSelectDivision={handleSelectDivision}
            hasSelectedShape={selectedShape !== null}
            isNotDarkMode={isNotDarkMode}
          />
          <SelectResolution
            onSelectResolution={handleSelectResolution}
            hasSelectedShape={selectedShape !== null}
            selectedResolution={selectedResolution}
            isNotDarkMode={isNotDarkMode}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
