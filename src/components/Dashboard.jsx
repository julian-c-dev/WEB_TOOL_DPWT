import React, { useState } from "react";
import styles from "../style";
import SelectBg from "./SelectBg";
import SelectShape from "./SelectShape";
import SelectResolution from "./SelectResolution";
import SelectDivision from "./SelectDivision";
import Preview from "./Preview";
import { useTranslation } from "react-i18next";
import ButtonGenerate from "./ButtonGenerate";

const Dashboard = () => {
  const { t } = useTranslation();
  const free = t("free");
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

  return (
    <section
      className={` ${styles.flexCenter} py-12 flex-col gap-4 bg-black-gradient-2 box-shadow`}
    >
      <div className={`w-full ${styles.flexCenter} sm:flex-row gap-4`}>
        <div
          className={` w-1/2 ${styles.flexCenter} sm:flex-row flex-wrap gap-4`}
        >
          <SelectBg onSelectBg={handleSelectBg} />
          <SelectShape
            onSelectShape={handleSelectShape}
            hasSelectedBg={selectedBg !== null}
          />
          <SelectDivision
            onSelectDivision={handleSelectDivision}
            hasSelectedShape={selectedShape !== null}
          />
          <SelectResolution
            onSelectResolution={handleSelectResolution}
            hasSelectedShape={selectedShape !== null}
            selectedResolution={selectedResolution}
          />
        </div>
        <div className={`w-1/4 ${styles.flexCenter} flex-col gap-4`}>
          <div>
            <h2 className={` ${styles.preview} text-white opacity-30 `}>
              {selectedBg ? "Preview" : free}
            </h2>
            <Preview
              selectedBg={selectedBg}
              selectedShape={selectedShape}
              selectedDivision={selectedDivision}
            />
          </div>
          <div className={`${styles.flexCenter} gap-4`}>
            <button
              type="button"
              className={` py-4 px-6 font-poppins font-medium text-[18px]outline-none rounded-[10px] w-[127.995px]
            ${
              selectedBg !== null ? styles.normalButton : styles.disableButton
            } ""
          `}
              style={selectedBg !== null ? {} : { pointerEvents: "none" }}
              onClick={handleReset}
            >
              {resetButtonText}
            </button>
            <ButtonGenerate
              onContent={generateButtonText}
              hasSelectedResolution={selectedResolution !== null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
