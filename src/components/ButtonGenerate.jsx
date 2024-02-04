import React from "react";
import styles from "../style";
import "./css/generalElements.css";

const handleClick = () => {
  console.log("Generate clicked");
};

const ButtonGenerate = ({ onContent, hasSelectedResolution }) => {
  return (
    <button
      type="button"
      className={` py-4 px-6 font-poppins font-medium text-[18px]outline-none rounded-[10px] w-[127.995px]
      ${hasSelectedResolution ? styles.normalButton : styles.disableButton} ""
     `}
      style={hasSelectedResolution ? {} : { pointerEvents: "none" }}
      onClick={handleClick}
    >
      {onContent}
    </button>
  );
};

export default ButtonGenerate;
