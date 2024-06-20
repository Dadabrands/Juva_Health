// // import Logo from "./Logo";
// // import MainNav from "./MainNav"

// // function Sidebar() {
// //     return (
// //       <aside className="bg-gray-100 px-2 py-2 border-r border-gray-200 flex flex-col gap-8">
// // <Logo />
// //         <MainNav />
// //       </aside>
// //     );
// //   }

// //   export default Sidebar;

// import { juvalogo } from "../assets";
// import { BsFillHeartPulseFill } from "react-icons/bs";
// import { TbCalendarTime } from "react-icons/tb";
// import { MdOutlinePayments } from "react-icons/md";
// import { BsFillChatDotsFill } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { MdDashboard } from "react-icons/md";
// import { GrLogout } from "react-icons/gr";

// const Sidebar = () => {
//   return (
//     <div className=" h-screen w-full  px-2 py-2 bg-magnolia ">
//       <div className=" flex flex-col gap-3 w-full font-normal font-inter text-graniteGray h-full justify-between">
//         <div className="flex flex-col gap-10 px-4  mt-4">
//           <div className="flex items-center justify-center gap-2">
//             <img
//               src={juvalogo}
//               alt="Juva Health Logo"
//               className="grow w-2 h-auto self-start mt-1.5"
//             />

//             <div className=" hidden md:flex font-bold text-eerie">
//               Juva Health
//             </div>
//           </div>
//           <div className="flex flex-col gap-5 text-md sm:text-xs md:text-sm  mt-4 lg:text-lg">
//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <MdDashboard />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Dashboard
//               </div>
//             </div>
//             {/* Vitals */}
//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <BsFillHeartPulseFill />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Vitals
//               </div>
//             </div>
//             {/* Book Appointmnet */}
//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <TbCalendarTime />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Book Appointment
//               </div>
//             </div>

//             {/* Payment */}
//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <MdOutlinePayments />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Payment Gateway
//               </div>
//             </div>

//             {/* Secure Chat */}

//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <BsFillChatDotsFill />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Secure Chat
//               </div>
//             </div>

//             {/* Profile */}

//             <div className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <CgProfile />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Patient Profile
//               </div>
//             </div>
//           </div>
//         </div>
//        {/* Logout */}
//         <div className="group flex items-center hover:bg-primary hover:rounded  text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-6  cursor-pointer">
//           <div className="group-hover:text-white text-primary p-1 rounded">
//             <GrLogout />
//           </div>
//           <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white -ml-2">
//             Logout
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Sidebar;
// import { NavLink } from "react-router-dom";
// import { juvalogo } from "../assets";
// import { BsFillHeartPulseFill } from "react-icons/bs";
// import { TbCalendarTime } from "react-icons/tb";
// import { MdOutlinePayments } from "react-icons/md";
// import { BsFillChatDotsFill } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { MdDashboard } from "react-icons/md";
// import { GrLogout } from "react-icons/gr";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-full px-2 py-2 bg-magnolia">
//       <div className="flex flex-col gap-3 w-full font-normal font-inter text-graniteGray h-full justify-between">
//         <div className="flex flex-col gap-10 px-4 mt-4">
//           <div className="flex items-center justify-center gap-2">
//             <img
//               src={juvalogo}
//               alt="Juva Health Logo"
//               className="grow w-2 h-auto self-start mt-1.5"
//             />
//             <div className="hidden md:flex font-bold text-eerie">
//               Juva Health
//             </div>
//           </div>
//           <div className="flex flex-col gap-5 text-md sm:text-xs md:text-sm mt-4 lg:text-lg">
//             <NavLink to="/dashboard" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <MdDashboard />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Dashboard
//               </div>
//             </NavLink>
//             {/* Vitals */}
//             <NavLink to="/vitals" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <BsFillHeartPulseFill />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Vitals
//               </div>
//             </NavLink>
//             {/* Book Appointment */}
//             <NavLink to="/book-appointment" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <TbCalendarTime />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Book Appointment
//               </div>
//             </NavLink>
//             {/* Payment */}
//             <NavLink to="/payment-gateway" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <MdOutlinePayments />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Payment Gateway
//               </div>
//             </NavLink>
//             {/* Secure Chat */}
//             <NavLink to="/secure-chat" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <BsFillChatDotsFill />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Secure Chat
//               </div>
//             </NavLink>
//             {/* Profile */}
//             <NavLink to="/patient-profile" className="group flex items-center gap-2 hover:bg-primary hover:rounded">
//               <div className="group-hover:text-white text-primary p-1 rounded">
//                 <CgProfile />
//               </div>
//               <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
//                 Patient Profile
//               </div>
//             </NavLink>
//           </div>
//         </div>
//         {/* Logout */}
//         <div className="group flex items-center hover:bg-primary hover:rounded text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-6 cursor-pointer">
//           <div className="group-hover:text-white text-primary p-1 rounded">
//             <GrLogout />
//           </div>
//           <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white -ml-2">
//             Logout
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { juvalogo } from "../assets";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="h-screen w-full px-2 py-2 bg-magnolia">
      <div className="flex flex-col gap-3 w-full font-normal font-inter text-graniteGray h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src={juvalogo}
              alt="Juva Health Logo"
              className="grow w-2 h-auto self-start mt-1.5"
            />
            <div className="hidden md:flex font-bold text-eerie">
              Juva Health
            </div>
          </div>
          <div className="flex flex-col gap-5 text-md sm:text-xs md:text-sm mt-4 lg:text-lg">
            <SidebarLink to="/dashboard" icon={MdDashboard} label="Dashboard" />
            <SidebarLink to="/vitals" icon={BsFillHeartPulseFill} label="Vitals" />
            <SidebarLink to="/book-appointment" icon={TbCalendarTime} label="Book Appointment" />
            <SidebarLink to="/payment-gateway" icon={MdOutlinePayments} label="Payment Gateway" />
            <SidebarLink to="/secure-chat" icon={BsFillChatDotsFill} label="Secure Chat" />
            <SidebarLink to="/patient-profile" icon={CgProfile} label="Patient Profile" />
          </div>
        </div>
        {/* Logout */}
        <div className="group flex items-center hover:bg-primary hover:rounded text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-6 cursor-pointer">
          <div className="group-hover:text-white text-primary p-1 rounded">
            <GrLogout />
          </div>
          <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white mr-6">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


