// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { close, logo,
//    menuu
//    } from "../assets";
// import { navLinks } from "../constants";
// const MiniNavbar = () => {
//   const navigate = useNavigate();
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
//   // Handle navigation to the signup page
//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="flex gap-5 justify-between px-8 py-3.5 mt-5 w-full bg-white rounded-lg  max-md:px-5 max-md:max-w-full overflow-hidden navbar">
//       <div className="flex gap-2 my-auto text-2xl font-bold text-purple-800 whitespace-nowrap">
//         <a
//           href="/"
//           className=" w-9 h-9 text-2xl font-semibold flex items-center space-x-3 text-primary"
//         >
//           <img src={logo} alt="" className="grow self-start mt-1.5" />
//           <span> JUVA </span>
//         </a>
//       </div>
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1 pl-[100px]">
    
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={` flex-auto self-stretch my-auto font-inter font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-white" : "text-primary"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//         <li className="px-14 ">
//           <button
//            onClick={handleLoginClick} 
//             className=" grow justify-center self-stretch px-6 py-4 whitespace-nowrap max-md:px-5 font-inter font-medium text-[18px] text-white bg-primary rounded"
  
//           >
//             Login/Sign Up
//           </button>
//         </li>
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menuu}
//           alt="menu"
//           className={`w-[28px] h-[28px] object-contain text-secondary ${toggle ? 'close-color' : 'menu-color'}`}
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-secondary"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4" , "pb-5" }`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//             <li className="mb-4">
//               <button
//                onClick={handleLoginClick} 
//                 className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-4 rounded"
//               >
//                 Login/Sign Up
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default MiniNavbar;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { close, logo, menuu } from "../assets";
import { navLinks } from "../constants";

const MiniNavbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Handle navigation to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Handle navigation to different sections within the page
  const handleNavClick = (title) => {
    setActive(title);
    // You can implement scroll-to-section functionality here if needed
  };

  return (
    <div className="flex gap-5 justify-between px-8 py-3.5 mt-5 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full overflow-hidden navbar">
      <div className="flex gap-2 my-auto text-2xl font-bold text-purple-800 whitespace-nowrap">
        <a
          href="/"
          className="w-9 h-9 text-2xl font-semibold flex items-center space-x-3 text-primary"
        >
          <img src={logo} alt="" className="grow self-start mt-1.5" />
          <span> JUVA </span>
        </a>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pl-[100px]">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`flex-auto self-stretch my-auto font-inter font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-primary"
            } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleNavClick(nav.title)}
          >
            {nav.title}
          </li>
        ))}
        <li className="px-14">
          <button
            onClick={handleLoginClick}
            className="grow justify-center self-stretch px-6 py-4 whitespace-nowrap max-md:px-5 font-inter font-medium text-[18px] text-white bg-primary rounded"
          >
            Login/Sign Up
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menuu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain text-secondary ${toggle ? 'close-color' : 'menu-color'}`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mb-0" : "mb-4 pb-5"}`}
                onClick={() => handleNavClick(nav.title)}
              >
                {nav.title}
              </li>
            ))}
            <li className="mb-4">
              <button
                onClick={handleLoginClick}
                className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-4 rounded"
              >
                Login/Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
