import React, { useState } from "react";
import { lines_black, lines_green, tiles_black, tiles_green } from "../assets";
import { useTranslation } from "react-i18next";

import styles from "../style";

const SelectShape = ({ onSelectShape }) => {
  const { t } = useTranslation();
  const card_sentence = t("cards.shape");
  const [isLinesHovered, setLinesHovered] = useState(false);
  const [isTilesHovered, setTilesHovered] = useState(false);

  const handleSelectShape = (shape) => {
    onSelectShape(shape);
  };

  return (
    <div className={`${styles.card}`}>
      <p className={` ${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={` ${styles.flexCenter} gap-8 sm:pb-12 pb-10 `}>
        <img
          src={isTilesHovered ? tiles_green : tiles_black}
          className={`w-[100px] h-[50px] cursor-pointer`}
          onMouseEnter={() => setTilesHovered(true)}
          onMouseLeave={() => setTilesHovered(false)}
          onClick={() => handleSelectShape("tiles")}
        />
        <img
          src={isLinesHovered ? lines_green : lines_black}
          className={`w-[100px] h-[50px] cursor-pointer`}
          onMouseEnter={() => setLinesHovered(true)}
          onMouseLeave={() => setLinesHovered(false)}
          onClick={() => handleSelectShape("lines")}
        />
      </div>
    </div>
  );
};

export default SelectShape;
