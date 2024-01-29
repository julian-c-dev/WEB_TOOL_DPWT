import React, { useState } from "react";
import styles from "../style";
import SelectBg from "./SelectBg";
import SelectShape from "./SelectShape";
import SelectResolution from "./SelectResolution";
import SelectDivision from "./SelectDivision";
import Preview from "./Preview";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const title = t("title");
  const resetButtonText = t("button.reset");
  const generateButtonText = t("button.generate");
  const [selectedBg, setSelectedBg] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);

  const handleSelectBg = (bg) => {
    setSelectedBg(bg);
  };
  const handleSelectShape = (shape) => {
    setSelectedShape(shape);
  };

  return (
    <section
      className={` ${styles.flexCenter} pt-4 pb-14 flex-col gap-4 bg-black-gradient-2 box-shadow`}
    >
      <h2 className={` ${styles.heading2} text-white  `}>{title}</h2>
      <div className={`w-full ${styles.flexStart} sm:flex-row gap-4`}>
        <div
          className={` w-1/2 ${styles.flexCenter} sm:flex-row flex-wrap gap-4`}
        >
          <SelectBg onSelectBg={handleSelectBg} />
          <SelectShape onSelectShape={handleSelectShape} />
          <SelectDivision />
          <SelectResolution />
        </div>
        <div className={`w-1/4 ${styles.flexCenter} flex-col gap-4 py-[5rem]`}>
          <div>
            <Preview selectedBg={selectedBg} selectedShape={selectedShape} />
          </div>
          <div className={`${styles.flexCenter} gap-4`}>
            <Button onContent={resetButtonText} />
            <Button onContent={generateButtonText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
