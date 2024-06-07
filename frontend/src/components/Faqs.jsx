
import styles, { layout } from "../style";
import Rectangle7 from "../assets/Rectangle7.png";
import Faq from "./Faq";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Rectangle7} alt="Doctor" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} `}>
      <h2 className={styles.heading2}>
      Frequently Asked
     <br/> Questions
      </h2>


      <div className="flex flex-row flex-wrap sm:mt-10 mt-6]">
       <Faq/>
      </div>
    </div>
  </section>
);

export default Billing;
