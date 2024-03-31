//! SelectShape.jsx

//? React Imports
import React from "react";
//?  Styling Imports

import styles from "../style";

//?  Resource Imports
import { lines_black, tiles_black } from "../assets";
import { useTranslation } from "react-i18next";

//! COMPONENT SelectShape:
const SelectShape = ({ onSelectShape, hasSelectedBg }) => {
  //*  Translations
  const { t } = useTranslation();
  const card_sentence = t("cards.shape");

  const handleSelectShape = (shape) => {
    onSelectShape(shape);
  };

  return (
    <div
      className={`${styles.card} ${hasSelectedBg ? "" : styles.disableCard}`}
    >
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={` ${styles.flexCenter} gap-6 py-4 px-8 `}>
        <img
          style={hasSelectedBg ? {} : { pointerEvents: "none" }}
          src={tiles_black}
          className={`w-[120px] xl:w-[150px] h-[60px] xl:h-[75px] ${
            hasSelectedBg ? "cursor-pointer hover:opacity-30" : ""
          } `}
          onClick={() => handleSelectShape("tiles")}
        />

        <img
          style={hasSelectedBg ? {} : { pointerEvents: "none" }}
          src={lines_black}
          className={`w-[120px] xl:w-[150px] h-[60px] xl:h-[75px] ${
            hasSelectedBg ? "cursor-pointer hover:opacity-30" : ""
          }`}
          onClick={() => handleSelectShape("lines")}
        />
      </div>
    </div>
  );
};

export default SelectShape;
