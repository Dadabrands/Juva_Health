import styles from "../style";
import Button from "./Button";

import main from "../assets/main.png";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-3`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full text-wrap">
          <h1 className="flex-1 font-inter font-bold ss:text-[96px] text-[75px] text-black ss:leading-[90px] leading-[65px] text-wrap py-2 mt-0  xs:text-[22px]  sm:leading-[90px] ">
             Improving 
        
          </h1>
    
        </div>

        <h1 className="font-inter font-bold ss:text-[96px] text-[85px] text-black ss:leading-[px] leading-[65px] w-full mt-5">
        Health
        </h1>
        <h1 className="font-inter font-bold ss:text-[96px] text-[85px] text-black ss:leading-[px] leading-[65px] w-full mt-5">
          Access.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Remote Medical Consultation  <br className="sm:block hidden" />for Everyone.
        </p>
        <Button styles={`mt-4`} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={main} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

       
      </div>

    </section>
  );
};

export default Hero;
