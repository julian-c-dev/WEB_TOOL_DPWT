//! Preview.jsx

//?  Styling Imports
import styles from "../style";
import "./css/Preview.css";
import { FONT_MAP, LABEL_COLOR_MAP, PILL_BG_MAP } from "./TileLabels";

//! COMPONENT Preview:
const Preview = ({
  selectedBg,
  selectedShape,
  selectedDivision,
  isOSChecked,
  tileTitles = [],
  labelFont  = "sf",
  labelSize  = "md",
  labelColor = "faded",
  pillBg     = "dark",
}) => {
  // Columns of the grid based on division
  let cols;
  if (selectedDivision == 2 || selectedDivision == 4) cols = 2;
  else if (selectedDivision == 6) cols = 3;
  else cols = 4;

  const rows = selectedDivision === 2 ? 1 : 2;

  // Font size for label overlay (preview is tiny: ~340px wide)
  const previewFontSize = { sm: "3.5px", md: "4.5px", lg: "6px" }[labelSize] || "4.5px";
  const previewFontFamily = FONT_MAP[labelFont] || FONT_MAP.sf;
  const previewLabelColor = LABEL_COLOR_MAP[labelColor] || LABEL_COLOR_MAP.light;
  const previewTileBg     = "rgba(255,255,255,0.28)";
  const previewPillBg     = PILL_BG_MAP[pillBg] || PILL_BG_MAP.dark;

  // Tile size classes (unchanged)
  const tileSizeClass = {
    8: styles.preview8TileSelection,
    6: styles.preview6TileSelection,
    4: styles.preview4TileSelection,
    2: styles.preview2TileSelection,
  };

  // Label overlay — only used for lines (tiles render labels inside each <li>)
  const hasLabels = selectedShape === "lines" && tileTitles.some((t) => t);
  const labelOverlay = hasLabels ? (
    <div
      style={{
        position:   "absolute",
        top:        "16px",   // matches p-4
        left:       "16px",
        right:      "16px",
        bottom:     "16px",
        display:    "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows:    `repeat(${rows}, 1fr)`,
        gap:           "16px",  // matches gap-4 on ul
        pointerEvents: "none",
        zIndex:        20,
      }}
    >
      {Array.from({ length: selectedDivision }, (_, i) => (
        <div
          key={i}
          style={{
            display:        "flex",
            justifyContent: "center",
            alignItems:     "flex-start",
            paddingTop:     Math.floor(i / cols) === 0 ? "3px" : "9px",
            overflow:       "hidden",
          }}
        >
          {tileTitles[i] && (
            <span
              style={{
                fontSize:        previewFontSize,
                fontFamily:      previewFontFamily,
                fontWeight:      "bold",
                color:           previewLabelColor,
                textAlign:       "center",
                maxWidth:        "100%",
                overflow:        "hidden",
                textOverflow:    "ellipsis",
                whiteSpace:      "nowrap",
                lineHeight:      1,
                backgroundColor: previewPillBg,
                borderRadius:    "3px",
                padding:         "1px 3px",
              }}
            >
              {tileTitles[i]}
            </span>
          )}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <section
      id="preview"
      className={`${
        isOSChecked ? "monitor-windows h-[200px]" : "monitor-mac h-[220px]"
      } w-[340px] relative p-4 ${
        styles.flexCenter
      } bg-black-gradient-2 box-shadow`}
      style={{ background: selectedBg || "rgb(0,4,16)" }}
    >
      <p
        className={`${styles.paragraph} ${styles.flexCenter} flex-col absolute top-3 left-3 right-0 text-white text-[30px] leading-[40px] align-center`}
      >
        {selectedBg ? (
          <></>
        ) : (
          <>
            <span>Desktop<br /></span>
            <span className={styles.wordHighlight}>Productivity <br /></span>
            <span className={styles.wordHighlight}>Wallpaper <br /></span>
            <span>Tool <br /></span>
          </>
        )}
      </p>

      <ul
        className={`gap-4`}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {(() => {
          //* TILES — label is absolutely positioned inside each tile so it always aligns
          if (selectedShape === "tiles" && tileSizeClass[selectedDivision]) {
            return Array.from({ length: selectedDivision }, (_, i) => (
              <li
                key={i}
                className={`rounded-[20px] box-shadow gap-2 ${tileSizeClass[selectedDivision]}`}
                style={{ backgroundColor: previewTileBg, position: "relative", overflow: "hidden" }}
              >
                {tileTitles[i] && (
                  <span
                    style={{
                      position:        "absolute",
                      top:             "3px",
                      left:            "50%",
                      transform:       "translateX(-50%)",
                      maxWidth:        "90%",
                      textAlign:       "center",
                      fontSize:        previewFontSize,
                      fontFamily:      previewFontFamily,
                      fontWeight:      "bold",
                      color:           previewLabelColor,
                      overflow:        "hidden",
                      textOverflow:    "ellipsis",
                      whiteSpace:      "nowrap",
                      lineHeight:      1,
                      pointerEvents:   "none",
                      backgroundColor: previewPillBg,
                      borderRadius:    "3px",
                      padding:         "1px 3px",
                    }}
                  >
                    {tileTitles[i]}
                  </span>
                )}
              </li>
            ));
          }

          //* LINES — unchanged (opacity-30 div wrapping absolute li elements)
          if (selectedShape === "lines" && selectedDivision === 8) {
            return (
              <div className="opacity-30">
                <li className="absolute right-1/4 top-0 w-2 h-[190px] bg-white"></li>
                <li className="absolute left-1/4 top-0 w-2 h-[190px] bg-white"></li>
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white"></li>
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white"></li>
              </div>
            );
          }
          if (selectedShape === "lines" && selectedDivision === 6) {
            return (
              <div className="opacity-30">
                <li className="absolute right-1/3 top-0 w-2 h-[190px] bg-white"></li>
                <li className="absolute left-1/3 top-0 w-2 h-[190px] bg-white"></li>
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white"></li>
              </div>
            );
          }
          if (selectedShape === "lines" && selectedDivision === 4) {
            return (
              <div className="opacity-30">
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white"></li>
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white"></li>
              </div>
            );
          }
          if (selectedShape === "lines" && selectedDivision === 2) {
            return (
              <div className="opacity-30">
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white"></li>
              </div>
            );
          }
        })()}
      </ul>

      {/* Label overlay — separate layer, doesn't affect tile/line sizing */}
      {labelOverlay}
    </section>
  );
};

export default Preview;
