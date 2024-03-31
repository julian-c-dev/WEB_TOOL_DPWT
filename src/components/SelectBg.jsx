//! SelectDivision.jsx

//? React Imports
import React, { useState } from "react";

//?  Styling Imports
import styles from "../style";

//?  Resource Imports
import { useTranslation } from "react-i18next";

//! COMPONENT SelectDivision:

const SelectBg = ({ onSelectBg, isNotDarkMode }) => {
  //*  Translations
  const { t } = useTranslation();
  const card_sentence = t("cards.bg");

  //*  Logic
  const selectionStyles = [
    "#000410", // bg1
    "#3533cd", // bg2
    "#800080", // bg3
    "#AE3D6C", // bg4
    "#466A2D", // bg5
    "#302B30", // bg6
    "linear-gradient(to bottom, #000000 0%, #3533cd 100%)", // bg7
    "linear-gradient(to bottom, #0019ff 0%, #ae3d6c 50%, #ff5c00 100%)", // bg8
    "linear-gradient(to bottom, #FF3131 0%, #FF914D 100%)", // bg9
    "linear-gradient(to bottom, #0D8D4C 0%, #DFA21A 100%)", // bg10
  ];

  //*  States
  const [selectedBg, setSelectedBg] = useState(selectionStyles[0]);

  const handleBgClick = (index) => {
    setSelectedBg(selectionStyles[index - 1]);
    onSelectBg(selectionStyles[index - 1]);
  };

  return (
    <div className={` ${styles.card} `}>
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div>
        <ul className={` grid grid-cols-5  ${styles.paddingBottom} gap-4 `}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <li
              key={index}
              className={` ${styles.tileSelection} bg-black-gradient-2 rounded-[20px] box-shadow cursor-pointer hover:border-red-500 hover:shadow-red-2`}
              style={{ background: selectionStyles[index - 1] }}
              onClick={() => handleBgClick(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectBg;
