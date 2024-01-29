import React from "react";

const Button = ({ styles, onContent }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] w-[127.995px]`}
    >
      {onContent}
    </button>
  );
};

export default Button;
