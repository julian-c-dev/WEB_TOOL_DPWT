import React from "react";
import styles from "../style";
import "./css/generalElements.css";

const handleClick = () => {
  console.log("reset clicked");
};

const ButtonReset = ({ onContent, hasSelectedBg }) => {
  return (
    <button
      type="button"
      className={` py-4 px-6 font-poppins font-medium text-[18px]outline-none rounded-[10px] w-[127.995px]
      ${hasSelectedBg ? styles.normalButton : styles.disableButton} ""
     `}
      style={hasSelectedBg ? {} : { pointerEvents: "none" }}
      onClick={handleClick}
    >
      {onContent}
    </button>
  );
};

export default ButtonReset;
