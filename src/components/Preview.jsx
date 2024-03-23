// Preview.jsx
import styles from "../style";
import "./css/Preview.css";

const Preview = ({
  selectedBg,
  selectedShape,
  selectedDivision,
  isOSChecked,
}) => {
  //* Columns of the grid in <ul> tag based on variable Division
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
          if (selectedShape === "tiles" && selectedDivision === 8) {
            return [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <li
                key={index}
                className={`${styles.tilePreview} ${styles.preview8TileSelection} `}
              ></li>
            ));
          }
          if (selectedShape === "tiles" && selectedDivision === 6) {
            return [1, 2, 3, 4, 5, 6].map((index) => (
              <li
                key={index}
                className={` ${styles.tilePreview} ${styles.preview6TileSelection}`}
              ></li>
            ));
          }
          if (selectedShape === "tiles" && selectedDivision === 4) {
            return [1, 2, 3, 4].map((index) => (
              <li
                key={index}
                className={` ${styles.tilePreview} ${styles.preview4TileSelection}`}
              ></li>
            ));
          }
          if (selectedShape === "tiles" && selectedDivision === 2) {
            return [1, 2].map((index) => (
              <li
                key={index}
                className={` ${styles.tilePreview} ${styles.preview2TileSelection}`}
              ></li>
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
