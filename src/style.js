const styles = {
  boxWidth: "w-full",

  navTitle:
    "font-poppins  font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center shadow-lg",
  preview: "font-poppins relative text-[35px] text-white w-full text-center",
  paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",
  number: "font-poppins font-bold text-black text-[25px] leading-[30.8px]",
  wordHighlight: "text-highlight",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  card: "allow_card w-[300px] xl:w-[360px] h-[200px] xl:h-[220px] flex flex-col items-center relative border-2 border-transparent bg-clip-padding-box rounded-xl",

  paddingX: "px-[2rem] xs:px-[5rem] xl:px-[10rem]",
  paddingY: "pt-6 pb-4",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  paddingBottom: "sm:pb-8 pb-6",

  disableCard: "disable_card cursor-not-allowed",

  normalButton: "allow_button bg-blue-gradient text-main cursor-pointer",
  disableButton: "disable_button bg-black text-gray-500 cursor-not-allowed",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  tileSelection: "px-4 py-4  xl:px-6 xl:py-6",
  tilePreview: "bg-white opacity-30 rounded-[20px] box-shadow gap-2",
  preview2TileSelection: "py-16 px-16",
  preview4TileSelection: "py-8 px-16",
  preview6TileSelection: "py-8 px-12",
  preview8TileSelection: "py-8 px-8",

  restolutionChoices:
    "font-poppins font-normal text-black text-[18px] leading-[30.8px]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
