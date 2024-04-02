//! SelectResolution.jsx

//? React Imports
import React, { useState, useEffect } from "react";

//?  Styling Imports
import styles from "../style";
import "./css/SelectResolution.css";

//?  Resource Imports
import { SlScreenDesktop } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { useTranslation } from "react-i18next";

//! COMPONENT SelectResolution:
const SelectResolution = ({
  onSelectResolution,
  hasSelectedShape,
  selectedResolution,
}) => {
  //*  Translations
  const { t } = useTranslation();
  const card_sentence = t("cards.resolution");

  //*  States
  const [resolution, setResolution] = useState(selectedResolution);

  useEffect(() => {
    setResolution(selectedResolution);
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
      <div className={`flex flex-col gap-2  `}>
        <label
          htmlFor="fhd"
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          className={`flex items-center justify-start gap-2  ${
            styles.restolutionChoices
          } ${hasSelectedShape ? "cursor-pointer" : ""}`}
        >
          <input
            style={hasSelectedShape ? {} : { pointerEvents: "none" }}
            type="radio"
            id="fhd"
            name="fhd"
            value="fhd"
            checked={selectedResolution === "fhd"}
            onChange={() => handleResolutionChange("fhd")}
            className={`relative ${styles.restolutionChoices} ${
              hasSelectedShape ? "cursor-pointer" : ""
            } `}
          />
          -
          <SlScreenDesktop />-
          <span className={`ml-2`}>Full HD - 1920 x 1080 </span>
        </label>
        <label
          htmlFor="hd"
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          className={`flex items-center justify-start  gap-2 ${
            styles.restolutionChoices
          } ${hasSelectedShape ? "cursor-pointer" : ""}`}
        >
          <input
            style={hasSelectedShape ? {} : { pointerEvents: "none" }}
            type="radio"
            id="hd"
            name="hd"
            value="hd"
            checked={selectedResolution === "hd"}
            onChange={() => handleResolutionChange("hd")}
            className={`${styles.restolutionChoices} ${
              hasSelectedShape ? "cursor-pointer" : ""
            } `}
          />
          -
          <AiOutlineLaptop />-
          <span className={`ml-2`}> Laptop - 1280 x 720</span>
        </label>
        <label
          htmlFor="mbp"
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          className={`flex items-center justify-start gap-2 ${
            styles.restolutionChoices
          } ${hasSelectedShape ? "cursor-pointer" : ""}`}
        >
          <input
            style={hasSelectedShape ? {} : { pointerEvents: "none" }}
            type="radio"
            id="mbp"
            name="mbp"
            value="mbp"
            checked={selectedResolution === "mbp"}
            onChange={() => handleResolutionChange("mbp")}
            className={`${styles.restolutionChoices} ${
              hasSelectedShape ? "cursor-pointer" : ""
            }`}
          />
          -
          <FaApple />-
          <span className={`ml-2 ${hasSelectedShape ? "cursor-pointer" : ""}`}>
            MacBook Pro 13-inch
          </span>
        </label>
      </div>
    </div>
  );
};

export default SelectResolution;

// author -> Julian C Dev; April 2024
