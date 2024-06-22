// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function VitalsSwiper() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3.8,
//     slidesToScroll: 1,
//     centerMode: false,
//     // centerPadding: 4,
//     responsive: [
//       {
//         breakpoint: 768 && 706 && 690 && 375, // When screen width is less than 768px
//         settings: {
//           slidesToShow: 1.4,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   };

//   const vitalsData = [
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/eb66570c1c3aaf50a504e78590db9c110260bf577ec95d2016fa373f7e76f8d7?",
//       title: "Pulse",
//       value: "62",
//       unit: "bpm",
//       bgColor: "bg-purple-800",
//       textColor: "text-white",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/a28ee5ace59edc1464121c2242215eeccf279144880a96613189ae55d75ab779?",
//       title: "Blood Pressure",
//       value: "110/80",
//       unit: "",
//       bgColor: "bg-fuchsia-200",
//       textColor: "text-black",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
//       title: "Temperature",
//       value: "37.5C",
//       unit: "",
//       bgColor: "bg-neutral-200",
//       textColor: "text-black",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
//       title: "Respiration",
//       value: "16",
//       unit: "",
//       bgColor: "bg-blue-200",
//       textColor: "text-black",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
//       title: "Oxygen Saturation",
//       value: "98%",
//       unit: "",
//       bgColor: "bg-green-200",
//       textColor: "text-black",
//     },
//   ];

//   return (
//     <>
//       <h3 className="self-start mb-4 ml-3 text-3xl font-inter font-semibold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
//         Your health status
//       </h3>

//       <div className="max-w-[800px] mx-auto font-inter text-stone-500">
//         <Slider {...settings}>
//           {vitalsData.map((vital, index) => (
//             <div key={index} className="px-2">
//               <div
//                 className={`flex flex-col items-center justify-center h-48 w-48 px-4 py-4 rounded-3xl ${vital.bgColor} ${vital.textColor}`}
//               >
//                 <img
//                   loading="lazy"
//                   src={vital.imgSrc}
//                   className="w-9 aspect-square"
//                 />
//                 <div className="mt-3 text-base font-semibold leading-5">
//                   {vital.title}
//                 </div>
//                 <div className="mt-5 text-xl leading-6">
//                   <span className="text-3xl font-bold">{vital.value}</span>{" "}
//                   <span className="text-base">{vital.unit}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default VitalsSwiper;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VitalsSwiper() {
  const settings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.8,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // When screen width is less than 1024px
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // When screen width is less than 768px
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // When screen width is less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const vitalsData = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb66570c1c3aaf50a504e78590db9c110260bf577ec95d2016fa373f7e76f8d7?",
      title: "Pulse",
      value: "62",
      unit: "bpm",
      bgColor: "bg-purple-800",
      textColor: "text-white",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a28ee5ace59edc1464121c2242215eeccf279144880a96613189ae55d75ab779?",
      title: "Blood Pressure",
      value: "110/80",
      unit: "",
      bgColor: "bg-fuchsia-200",
      textColor: "text-black",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
      title: "Temperature",
      value: "37.5C",
      unit: "",
      bgColor: "bg-neutral-200",
      textColor: "text-black",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
      title: "Respiration",
      value: "16",
      unit: "",
      bgColor: "bg-blue-200",
      textColor: "text-black",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdcf1e449268130fc6e3dd6b5179084b4025177a710b11e014aea1c5c04150a?",
      title: "Oxygen Saturation",
      value: "98%",
      unit: "",
      bgColor: "bg-green-200",
      textColor: "text-black",
    },
  ];

  return (
    <>
      <h3 className="self-start mb-4 font-inter font-medium text-black whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl max-md:mt-10 max-md:ml-2.5 leading-tight">
        Your health status
      </h3>

      <div className="max-w-[800px] mx-auto font-inter text-stone-500">
        <Slider {...settings}>
          {vitalsData.map((vital, index) => (
            <div key={index} className="px-2">
              <div
                className={`flex flex-col items-center justify-center h-48 w-48 px-4 py-4 rounded-3xl ${vital.bgColor} ${vital.textColor}`}
              >
                <img
                  loading="lazy"
                  src={vital.imgSrc}
                  className="w-9 aspect-square"
                />
                <div className="mt-3 text-base font-semibold leading-5">
                  {vital.title}
                </div>
                <div className="mt-5 text-xl leading-6">
                  <span className="text-3xl font-bold">{vital.value}</span>{" "}
                  <span className="text-base">{vital.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default VitalsSwiper;
