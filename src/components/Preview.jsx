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
      <ul className={`grid grid-cols-4 gap-4`}>
        {(() => {
          if (selectedShape === "tiles") {
            return [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <li
                key={index}
                className={`${styles.preview8TileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          }
          if (selectedShape === "lines") {
            return (
              <>
                <li className="absolute right-1/3 top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute left-1/3 top-0 w-2 h-[190px] bg-white "></li>
                <li className="absolute left-[50%] transform -translate-x-1/2 top-[48.5%] w-[340px] h-2 bg-white"></li>
              </>
            );
          }
        })()}
      </ul>
    </section>
  );
};

export default Preview;

{
  /* DIVISION TILES 2 -> NOTE <ul className={`grid grid-cols-2 gap-4`}>
if (selectedShape === "tiles") {
            return [1, 2].map((index) => (
              <li
                key={index}
                className={`${styles.preview2TileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          }


*/
  /* DIVISION TILES 4 -> NOTE <ul className={`grid grid-cols-2 gap-4`}>
if (selectedShape === "tiles") {
            return [1, 2, 3, 4].map((index) => (
              <li
                key={index}
                className={`${styles.preview4TileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          }
*/
  /*  DIVISION TILES 6 -> NOTE <ul className={`grid grid-cols-3 gap-4`}>

if (selectedShape === "tiles") {
            return [1, 2, 3, 4, 5, 6].map((index) => (
              <li
                key={index}
                className={`${styles.preview6TileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          }
*/
  /* DIVISION TILES 8 -> <ul className={`grid grid-cols-4 gap-4`}>
if (selectedShape === "tiles") {
            return [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <li
                key={index}
                className={`${styles.preview8TileSelection} bg-white opacity-30 rounded-[20px] box-shadow`}
              ></li>
            ));
          }



*/
  /* DIVISION LINES 2
<>
<li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
</>
*/
  /* DIVISION LINES 4 
<>
<li className="absolute left-[50%] transform -translate-x-1/2 top-1/2 w-[340px] h-2 bg-white"></li>
<li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
</> 
*/
  /*  DIVISION LINES 6
<>
<li className="absolute right-1/3 top-0 w-2 h-[190px] bg-white "></li>
<li className="absolute left-1/3 top-0 w-2 h-[190px] bg-white "></li>
<li className="absolute left-[50%] transform -translate-x-1/2 top-[48.5%] w-[340px] h-2 bg-white"></li>
</>
*/
  /** DIVISION LINES 8
<>
<li className="absolute right-1/4 top-0 w-2 h-[190px] bg-white "></li>
<li className="absolute left-1/4  top-0 w-2 h-[190px] bg-white "></li>
<li className="absolute right-[48.5%] top-0 w-2 h-[190px] bg-white "></li>
<li className="absolute left-[50%] transform -translate-x-1/2 top-[48.5%] w-[340px] h-2 bg-white"></li>
</> 

 */
}
