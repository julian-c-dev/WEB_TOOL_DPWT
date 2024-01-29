import React, { useState } from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";

const SelectBg = ({ onSelectBg }) => {
  const { t } = useTranslation();
  const card_sentence = t("cards.bg");
  const selectionStyles = [
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
    "linear-gradient(to top, #667eea 0%, #764ba2 100%)",
    "rgb(0,4,16)",
  ];

  const [selectedBg, setSelectedBg] = useState(null);

  const handleBgClick = (index) => {
    setSelectedBg(selectionStyles[index - 1]);
    onSelectBg(selectionStyles[index - 1]);
  };

  return (
    <div className={` ${styles.card}  `}>
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div>
        <ul className={` ${styles.flexCenter} ${styles.paddingBottom} gap-4 `}>
          {[1, 2, 3, 4].map((index) => (
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