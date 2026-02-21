//! TileLabels.jsx

//?  Styling Imports
import styles from "../style";

//?  Resource Imports
import { useTranslation } from "react-i18next";

//! Shared style maps (exported for use in Preview + Dashboard canvas)
export const FONT_MAP = {
  sf:        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
  serif:     "Georgia, 'Times New Roman', serif",
  comic:     "'Comic Sans MS', 'Chalkboard SE', cursive",
  mono:      "'Courier New', Courier, monospace",
  trebuchet: "'Trebuchet MS', Helvetica, sans-serif",
};

export const LABEL_COLOR_MAP = {
  light: "rgba(255,255,255,0.90)",
  dark:  "rgba(0,0,0,0.85)",
  faded: "rgba(255,255,255,0.50)",
};

export const PILL_BG_MAP = {
  none:  "transparent",
  dark:  "rgba(0,0,0,0.28)",
  mid:   "rgba(0,0,0,0.55)",
  white: "rgba(255,255,255,0.18)",
};

// Kept for any external reference
export const TILE_COLOR_MAP = {
  light: "rgba(255,255,255,0.28)",
};

const MAX_CHARS = 20;

// Shared button style helper
const makeBtn = (isNotDarkMode) => {
  const base = `px-2 py-0.5 text-[10px] font-poppins rounded border transition-colors cursor-pointer select-none`;
  const active   = isNotDarkMode
    ? "bg-blue-500 border-blue-500 text-white"
    : "bg-cyan-700 border-cyan-700 text-white";
  const inactive = isNotDarkMode
    ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
    : "bg-[#1a1a2e] border-[#3F3E45] text-gray-300 hover:bg-[#2a2a3e]";
  return (value, current) => `${base} ${value === current ? active : inactive}`;
};

//! COMPONENT TileLabelInputs — Step 5: section title text inputs
export const TileLabelInputs = ({
  tileTitles,
  onTitleChange,
  selectedDivision,
  isNotDarkMode,
  disabled,
}) => {
  const { t } = useTranslation();
  const label       = t("tileTitles.label");
  const placeholder = t("tileTitles.placeholder");
  const charLimit   = t("tileTitles.charLimit");

  let cols;
  if (selectedDivision === 2 || selectedDivision === 4) cols = 2;
  else if (selectedDivision === 6) cols = 3;
  else cols = 4;

  return (
    <div
      className={`${styles.card} ${disabled ? styles.disableCard : ""} w-[300px] xl:w-[360px] h-auto min-h-[200px] xl:min-h-[220px] flex flex-col items-start py-4 px-4 gap-2`}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      <p className={`${styles.paragraph} w-full text-center`}>{label}</p>

      <p className={`text-[9px] font-poppins ${isNotDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        {charLimit}
      </p>

      {/* ── Inputs grid ── */}
      <div
        className="w-full gap-2"
        style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: selectedDivision }, (_, i) => {
          const len = (tileTitles[i] || "").length;
          return (
            <div key={i} className="flex flex-col gap-0.5">
              <input
                type="text"
                maxLength={MAX_CHARS}
                value={tileTitles[i] || ""}
                onChange={(e) => onTitleChange(i, e.target.value)}
                placeholder={`${placeholder} ${i + 1}`}
                className={`w-full text-center text-[11px] font-poppins py-1.5 px-1 rounded-md border outline-none transition-colors ${
                  isNotDarkMode
                    ? "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-400"
                    : "bg-[#1a1a2e] border-[#3F3E45] text-white placeholder-gray-500 focus:border-cyan-400"
                }`}
              />
              <span className={`text-right text-[8px] font-poppins ${
                len >= MAX_CHARS
                  ? "text-red-500 font-bold"
                  : isNotDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                {len}/{MAX_CHARS}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//! COMPONENT TileLabelSettings — Step 6: font, size, label background controls
export const TileLabelSettings = ({
  isNotDarkMode,
  labelFont,
  onFontChange,
  labelSize,
  onSizeChange,
  pillBg,
  onPillBgChange,
  disabled,
}) => {
  const { t } = useTranslation();
  const settingsLabel = t("tileTitles.settingsLabel");
  const fontLabel     = t("tileTitles.font");
  const sizeLabel     = t("tileTitles.size");
  const labelBgLabel  = t("tileTitles.labelBg");
  const btn = makeBtn(isNotDarkMode);

  const labelClass = `text-[9px] font-poppins font-semibold uppercase tracking-wider ${isNotDarkMode ? "text-gray-500" : "text-gray-400"}`;

  const selectCls = `w-full text-[10px] font-poppins py-0.5 px-2 rounded border outline-none ${
    isNotDarkMode
      ? "bg-white border-gray-300 text-gray-700"
      : "bg-[#1a1a2e] border-[#3F3E45] text-white"
  }`;

  return (
    <div
      className={`${styles.card} ${disabled ? styles.disableCard : ""} w-[300px] xl:w-[360px] h-auto flex flex-col items-start py-3 px-4 gap-2`}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      <p className={`${styles.paragraph} w-full text-center`}>{settingsLabel}</p>

      {/* Font + Size on the same row */}
      <div className="flex items-end gap-2 w-full">
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <span className={labelClass}>{fontLabel}</span>
          <select value={labelFont} onChange={(e) => onFontChange(e.target.value)} className={selectCls}>
            <option value="sf">SF Pro</option>
            <option value="serif">Serif</option>
            <option value="comic">Comic Sans</option>
            <option value="mono">Mono</option>
            <option value="trebuchet">Trebuchet MS</option>
          </select>
        </div>
        <div className="flex flex-col gap-0.5 shrink-0">
          <span className={labelClass}>{sizeLabel}</span>
          <div className="flex gap-1">
            {[{ key:"sm", label:"S" },{ key:"md", label:"M" },{ key:"lg", label:"L" }].map(({ key, label }) => (
              <button key={key} onClick={() => onSizeChange(key)} className={`${btn(key, labelSize)} w-7`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Label background */}
      <div className="flex flex-col gap-0.5 w-full">
        <span className={labelClass}>{labelBgLabel}</span>
        <div className="flex gap-1">
          {[
            { key: "none",  label: "None"   },
            { key: "dark",  label: "Dark"   },
            { key: "mid",   label: "Darker" },
            { key: "white", label: "White"  },
          ].map(({ key, label }) => (
            <button key={key} onClick={() => onPillBgChange(key)} className={`${btn(key, pillBg)} flex-1`}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
