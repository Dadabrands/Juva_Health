const styles = {
    boxWidth: "xl:max-w-[1280px] w-full ",
  
    heading2: "font-inter font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-inter font-normal text-gray20  xs:text-[28px] text-[16px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
     // ... other styles

  backgroundContainer: "flex justify-center items-center h-screen", // Set the height of the container to full screen height
  backgroundHalf: "h-1/2", // Set the height of the child divs to half of the container

  // Background colors
  backgroundPurple: "bg-primary", // Replace "primary" with your actual purple color class
  backgroundWhite: "bg-white",   // Replace "white" with your actual white color class

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;