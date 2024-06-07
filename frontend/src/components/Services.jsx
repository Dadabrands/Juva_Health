

import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";

import { FaArrowRight } from "react-icons/fa";
import { services } from "../constants";
import styles from "../style";

const Services = () => {
  const cardsData = [
    {
      imagePath: Rectangle1,
      heading: "Dermatology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      imagePath: Rectangle2,
      heading: "Pediatrics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      imagePath: Rectangle3,
      heading: "General Practice",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      imagePath: Rectangle4,
      heading: "Optometry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      imagePath: Rectangle5,
      heading: "Family Medicine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      imagePath: Rectangle6,
      heading: "Endocrinology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    
  ];
  

  return (
    <>
      <section className={`${styles.flexCenter} flex-col sm:mb-20 mb-6 `}>
     <div className="w-full mb-6 text-center">
       <h1 className="text-white text-4xl font-bold font-inter mt-10">
         Why you should choose us?
      </h1>
     </div>
     <div className={`w-full ${styles.boxWidth}`}>
       <div className="flex flex-wrap">
         {services.map((service) => (
         <div
             key={service.id}
             className={`flex-1 flex flex-col items-center m-3`}
           >
            <h4 className={`font-inter font-semibold text-white text-xl mb-2`}>
              {service.title}
            </h4>
            <p className={`font-inter font-normal text-white text-sm text-justify leading-normal tracking-normal`}>
              {service.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
<section className="flex flex-wrap justify-center">
  {cardsData.map((card, index) => (
    <div
      key={index}
      className={`flex flex-col p-4 md:p-8 bg-white rounded-md mx-4 my-4 md:my-8`}
      style={{ width: '100%', maxWidth: '352px', height: 'auto', borderRadius: "12px" }}
    >
      <div
        className={`bg-lightgray w-full h-52 md:h-235 rounded-md bg-cover bg-no-repeat`}
      >
        <img src={card.imagePath} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <h2 className={`mt-4 text-2xl md:text-24 font-inter font-semibold text-primary`}>
        {card.heading}
      </h2>
      <p className={`mt-2 text-base md:text-16 font-inter text-gray leading-24`}>
        {card.description}
      </p>
      <a
        href="#learn-more-link" // Replace with your actual link
        className={`mt-4 text-lg md:text-20 font-inter font-medium text-darkpurple flex items-center`}
      >
        Learn More <FaArrowRight className={`ml-2`} />
      </a>
    </div>
  ))}
</section>



    </>
  );
};

export default Services;

