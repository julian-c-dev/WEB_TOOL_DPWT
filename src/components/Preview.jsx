import styles from "../style";

const Preview = ({ selectedBg, selectedShape }) => {
  return (
    <section
      className={`w-[348px] h-[200px] relative p-5 ${styles.flexCenter} bg-black-gradient-2 border-8 border-white rounded-[20px] box-shadow`}
      style={{ background: selectedBg }}
    >
      <p className={`${styles.paragraph} text-white text-[45px] `}>
        {selectedShape ? "" : "P W D T  "}
      </p>
      <ul className={`grid grid-cols-2 gap-4`}>
        {(() => {
          if (selectedShape === "tiles") {
            return [1, 2, 3, 4].map((index) => (
              <li
                key={index}
                className={`${styles.previewTileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          } else if (selectedShape === "lines") {
            return (
              <>
                <li className="absolute left-[49%] transform -translate-x-1/2 top-1/2 w-[340px] h-2 bg-white"></li>
                <li className="absolute right-[49%] top-0 w-2 h-[190px] bg-white "></li>
              </>
            );
          } else {
            return null;
          }
        })()}
      </ul>
    </section>
  );
};

export default Preview;
