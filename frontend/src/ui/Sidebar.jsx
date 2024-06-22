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
              className="w-10 md:w-10 lg:w-12 h-auto mt-1.5" // Adjust sizes for different screen widths
            />
            <div className="hidden md:flex font-bold text-eerie">
              Juva Health
            </div>
          </div>

          <div className="flex flex-col gap-5 text-md sm:text-xs md:text-sm mt-4 lg:text-lg">
            <SidebarLink to="/dashboard" icon={MdDashboard} label="Dashboard" />
            <SidebarLink
              to="/vitals"
              icon={BsFillHeartPulseFill}
              label="Vitals"
            />
            <SidebarLink
              to="/book-appointment"
              icon={TbCalendarTime}
              label="Book Appointment"
            />
            <SidebarLink
              to="/payment-gateway"
              icon={MdOutlinePayments}
              label="Payment Gateway"
            />
            <SidebarLink
              to="/secure-chat"
              icon={BsFillChatDotsFill}
              label="Secure Chat"
            />
            <SidebarLink
              to="/patient-profile"
              icon={CgProfile}
              label="Patient Profile"
            />
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
