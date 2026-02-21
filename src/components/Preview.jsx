//! Preview.jsx

//?  Styling Imports
import styles from "../style";
import "./css/Preview.css";

//! COMPONENT Preview:
const Preview = ({
  selectedBg,
  selectedShape,
  selectedDivision,
  isOSChecked,
  tileTitles = [],
}) => {
  // Columns of the grid in <ul> tag based on variable Division
  let cols;
  if (selectedDivision == 2 || selectedDivision == 4) {
    cols = 2;
  } else if (selectedDivision == 6) {
    cols = 3;
  } else if (selectedDivision == 8) {
    cols = 4;
  }

  return (
    <section
      id="preview"
      // if monitor mac -> h-[220px] if monitor-windows -> h-[200]
      className={`${
        isOSChecked ? "monitor-windows h-[200px]" : "monitor-mac h-[220px]"
      } w-[340px]  relative p-4 ${
        styles.flexCenter
      } bg-black-gradient-2  box-shadow`}
      style={{ background: selectedBg || "rgb(0,4,16)" }}
    >
      <p
        className={`${styles.paragraph} ${styles.flexCenter} flex-col absolute top-3 left-3 right-0 text-white text-[30px] leading-[40px] align-center`}
      >
        {selectedBg ? (
          <></>
        ) : (
          <>
            <span>
              Desktop
              <br />
            </span>
            <span className={styles.wordHighlight}>
              Productivity <br />
            </span>
            <span className={styles.wordHighlight}>
              Wallpaper <br />
            </span>
            <span>
              Tool <br />
            </span>
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
          //* 4 Options of TILES
          const tileSizeClass = {
            8: styles.preview8TileSelection,
            6: styles.preview6TileSelection,
            4: styles.preview4TileSelection,
            2: styles.preview2TileSelection,
          };
          if (selectedShape === "tiles" && tileSizeClass[selectedDivision]) {
            return Array.from({ length: selectedDivision }, (_, i) => (
              <li
                key={i}
                className={`${styles.tilePreview} ${tileSizeClass[selectedDivision]} flex items-center justify-center`}
              >
                {tileTitles[i] && (
                  <span className="text-white font-bold font-poppins leading-tight text-center break-words"
                    style={{ fontSize: "5px", textShadow: "0 1px 2px rgba(0,0,0,0.8)", maxWidth: "100%" }}>
                    {tileTitles[i]}
                  </span>
                )}
              </li>
            ));
          }

          //* 4 Options of LINES
          if (selectedShape === "lines" && selectedDivision === 8) {
            return (
              <div className="opacity-30">
                <li className="absolute right-1/4 top-0 w-2 h-[190px] bg-white  "></li>
                <li className="absolute left-1/4  top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white "></li>
              </div>
            );
          }

          if (selectedShape === "lines" && selectedDivision === 6) {
            return (
              <div className="opacity-30">
                <li className="absolute right-1/3 top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute left-1/3 top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white "></li>
              </div>
            );
          }

          if (selectedShape === "lines" && selectedDivision === 4) {
            return (
              <div className="opacity-30">
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.2%] w-[340px] h-2 bg-white"></li>
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
              </div>
            );
          }

          if (selectedShape === "lines" && selectedDivision === 2) {
            return (
              <div className="opacity-30">
                <li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
              </div>
            );
          }
        })()}
      </ul>
    </section>
  );
};

export default Preview;
