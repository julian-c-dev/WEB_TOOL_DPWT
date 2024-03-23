import React, { useState, useEffect } from "react";
import styles from "../style";
import "./css/SelectResolution.css";
import "./css/generalElements.css";
import { useTranslation } from "react-i18next";

const SelectResolution = ({
  onSelectResolution,
  hasSelectedShape,
  selectedResolution,
  isNotDarkMode,
}) => {
  const { t } = useTranslation();
  const card_sentence = t("cards.resolution");
  const disableMsg = t("disableMsg");

  const [resolution, setResolution] = useState(selectedResolution);

  useEffect(() => {
    setResolution(selectedResolution); // Actualizar la resolución seleccionada cuando cambie
  }, [selectedResolution]);

  const handleResolutionChange = (resolution) => {
    setResolution(resolution);
    onSelectResolution(resolution);
  };

  return (
    <div
      className={`${styles.card} ${hasSelectedShape ? "" : styles.disableCard}`}
    >
      <p className={`${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={`flex flex-col  `}>
        <label
          htmlFor="resolution1"
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          className={`inline-flex items-center ${styles.restolutionChoices} ${
            hasSelectedShape ? "cursor-pointer" : ""
          }`}
        >
          <input
            style={hasSelectedShape ? {} : { pointerEvents: "none" }}
            type="radio"
            id="resolution1"
            name="resolution1"
            value="resolution1"
            checked={selectedResolution === "resolution1"}
            onChange={() => handleResolutionChange("resolution1")}
            className={`${styles.restolutionChoices} ${
              hasSelectedShape ? "cursor-pointer" : ""
            } `}
          />
          <span className={`ml-2`}>Full HD - 1920 x 1080</span>
        </label>
        <label
          htmlFor="resolution2"
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          className={`inline-flex items-center ${styles.restolutionChoices} ${
            hasSelectedShape ? "cursor-pointer" : ""
          }`}
        >
          <input
            style={hasSelectedShape ? {} : { pointerEvents: "none" }}
            type="radio"
            id="resolution2"
            name="resolution2"
            value="resolution2"
            disabled
            checked={selectedResolution === "resolution2"}
            onChange={() => handleResolutionChange("resolution2")}
            className={`${styles.restolutionChoices} ${
              hasSelectedShape ? "cursor-not-allowed" : ""
            }`}
          />
          <span
            className={`ml-2 ${
              hasSelectedShape ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            MacBook Pro - 3024 x 1964
          </span>
        </label>
        <p className="text-xs text-slate-500">
          {hasSelectedShape ? disableMsg : ""}
        </p>
      </div>
    </div>
  );
};

export default SelectResolution;
