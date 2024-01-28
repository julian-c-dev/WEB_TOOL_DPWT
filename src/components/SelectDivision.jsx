import React, { useState } from "react";
import styles from "../style";
import "./css/SelectDivision.css";
import { useTranslation } from "react-i18next";

const SelectDivision = () => {
  const { t } = useTranslation();
  const card_sentence = t("cards.division");

  const [selectedValue, setSelectedValue] = useState(4);

  const handleInputChange = (e) => {
    const allowedValues = [2, 4, 6, 8];
    const inputValue = parseInt(e.target.value, 10);

    if (allowedValues.includes(inputValue)) {
      setSelectedValue(inputValue);
      console.log("Selected value:", inputValue);
    }
  };

  return (
    <div className={` ${styles.card}`}>
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={` ${styles.flexCenter} flex-col`}>
        <p className={` ${styles.number} `}>{selectedValue}</p>
        <input
          id="typeinp"
          type="range"
          min="2"
          max="8"
          step="2"
          value={selectedValue}
          onChange={handleInputChange}
          className={`range-style ${styles.paddingY}`}
        />
      </div>
    </div>
  );
};

export default SelectDivision;
