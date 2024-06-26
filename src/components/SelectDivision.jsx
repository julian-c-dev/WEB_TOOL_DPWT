//! SelectDivision.jsx

//? React Imports
import React, { useState, useEffect } from "react";

//?  Styling Imports
import styles from "../style";
import "./css/SelectDivision.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";

//! COMPONENT SelectDivision:
const SelectDivision = ({ onSelectDivision, hasSelectedShape }) => {
  //*  Translations
  const { t } = useTranslation();
  const card_sentence = t("cards.division");

  // Initialize selectedValue to the initial value passed from the parent component
  const [selectedValue, setSelectedValue] = useState(
    hasSelectedShape ? 4 : null
  );

  // Update selectedValue when hasSelectedShape changes
  useEffect(() => {
    if (hasSelectedShape) {
      setSelectedValue(4);
    } else {
      setSelectedValue(null);
    }
  }, [hasSelectedShape]);

  const handleInputChange = (e) => {
    const allowedValues = [2, 4, 6, 8];
    const inputValue = parseInt(e.target.value, 10);

    if (allowedValues.includes(inputValue)) {
      setSelectedValue(inputValue);
      onSelectDivision(inputValue);
    }
  };

  return (
    <div
      className={`${styles.card} ${hasSelectedShape ? "" : styles.disableCard}`}
    >
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={` ${styles.flexCenter} flex-col`}>
        <p className={` ${styles.number} `}>{selectedValue || 4}</p>
        <input
          style={hasSelectedShape ? {} : { pointerEvents: "none" }}
          id="typeinp"
          type="range"
          min="2"
          max="8"
          step="2"
          value={selectedValue || 4}
          onChange={handleInputChange}
          className={`range-style ${styles.paddingY}`}
          list="tickmarks"
        />
        <p className="list-numbers">
          <span>2</span>
          <span>4</span>
          <span>6</span>
          <span>8</span>
        </p>
      </div>
    </div>
  );
};

export default SelectDivision;
