//! TileLabels.jsx

//?  Styling Imports
import styles from "../style";

//?  Resource Imports
import { useTranslation } from "react-i18next";

//! COMPONENT TileLabels:
const TileLabels = ({ tileTitles, onTitleChange, selectedDivision, isNotDarkMode }) => {
  //*  Translations
  const { t } = useTranslation();
  const label = t("tileTitles.label");
  const placeholder = t("tileTitles.placeholder");

  const tiles = Array.from({ length: selectedDivision }, (_, i) => i);

  let cols;
  if (selectedDivision === 2 || selectedDivision === 4) cols = 2;
  else if (selectedDivision === 6) cols = 3;
  else cols = 4;

  return (
    <div className={`${styles.card} w-[300px] xl:w-[360px] h-auto min-h-[200px] xl:min-h-[220px] flex flex-col items-center py-4 px-4`}>
      <p className={`${styles.paragraph} ${styles.paddingY} text-center`}>
        {label}
      </p>
      <div
        className="w-full gap-2"
        style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {tiles.map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={20}
            value={tileTitles[i] || ""}
            onChange={(e) => onTitleChange(i, e.target.value)}
            placeholder={`${placeholder} ${i + 1}`}
            className={`w-full text-center text-[12px] font-poppins py-1.5 px-2 rounded-md border outline-none transition-colors ${
              isNotDarkMode
                ? "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-400"
                : "bg-[#1a1a2e] border-[#3F3E45] text-white placeholder-gray-500 focus:border-cyan-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TileLabels;
