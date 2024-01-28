const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold text-[25px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center",
  paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",
  number: "font-poppins font-bold text-black text-[25px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  card: "w-[360px] h-[220px] flex flex-col items-center bg-white rounded-[20px] box-shadow ",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-8 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  paddingBottom: "sm:pb-8 pb-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  tileSelection: "sm:px-8 px-6 sm:py-8 py-6",
  previewTileSelection: "py-8 px-16 gap-2",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
