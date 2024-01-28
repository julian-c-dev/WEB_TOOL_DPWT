import React, { useState } from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";

const SelectResolution = () => {
  const { t } = useTranslation();
  const card_sentence = t("cards.resolution");
  const [selectedResolution, setSelectedResolution] = useState(null);

  const handleResolutionChange = (resolution) => {
    setSelectedResolution(resolution);
    console.log("Selected resolution:", resolution);
  };

  return (
    <div className={`${styles.card} ${styles.bgGray} ${styles.textWhite}`}>
      <p className={`${styles.paragraph} ${styles.paddingY}`}>
        {card_sentence}
      </p>
      <div className={`flex flex-col gap-2`}>
        <label className={`inline-flex items-center ${styles.textGray}`}>
          <input
            type="radio"
            name="resolution"
            value="1900x800"
            checked={selectedResolution === "1900x800"}
            onChange={() => handleResolutionChange("1900x800")}
            className={`form-radio ${styles.textGray}`}
          />
          <span className={`ml-2`}>1900x800</span>
        </label>
        <label className={`inline-flex items-center ${styles.textGray}`}>
          <input
            type="radio"
            name="resolution"
            value="1920x1080"
            checked={selectedResolution === "1920x1080"}
            onChange={() => handleResolutionChange("1920x1080")}
            className={`form-radio ${styles.textGray}`}
          />
          <span className={`ml-2`}>1920x1080</span>
        </label>
      </div>
    </div>
  );
};

export default SelectResolution;
