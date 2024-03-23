import React, { useState } from "react";
import styles from "../style";
import "./css/generalElements.css";
import { useTranslation } from "react-i18next";

const SelectBg = ({ onSelectBg, isNotDarkMode }) => {
  const { t } = useTranslation();
  const card_sentence = t("cards.bg");
  const selectionStyles = [
    "#000410", // bg1
    "#3533cd", // bg2
    "#A6C1EE", // bg3
    "#AE3D6C", // bg4
    "#466A2D", // bg5
    "linear-gradient(to bottom, #000000 0%, #7c7c7c 100%)", // bg6
    "linear-gradient(to bottom, #000000 0%, #3533cd 100%)", // bg7
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)", // bg8
    "linear-gradient(to bottom, #0019ff 0%, #ae3d6c 25%, #ff5c00 50%, #ffda3d 75%)", // bg9
    "linear-gradient(to bottom, #1e352f 0%, #335145 30%, #828c51 50%, #a6c36f 70%, #beef9e 100%)", // bg10
  ];

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
