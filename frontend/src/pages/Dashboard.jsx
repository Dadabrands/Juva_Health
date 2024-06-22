import RecentMessages from "../ui/MessageItems";
import { IoCalendarOutline } from "react-icons/io5";
import { people01, people02, people03 } from "../assets";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import VitalsSwiper from "./VitalsSwiper";
import DashboardAside from "../ui/DashboardAside";
const Dashboard = () => {
  const messages = [
    {
      imgSrc: people01,
      name: "Dr. Kate Paul",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 3,
      link: "/chat/kate-paul",
    },
    {
      imgSrc: people02,
      name: "Dr. Chidi Dickson",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 0,
      link: "/chat/chidi-dickson",
    },

    {
      imgSrc: people03,
      name: "Dr. Kate Paul",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 3,
      link: "/chat/kate-paul",
    },
    {
      imgSrc: people01,
      name: "Dr. Chidi Dickson",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 0,
      link: "/chat/chidi-dickson",
    },

    {
      imgSrc: people02,
      name: "Dr. Kate Paul",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 3,
      link: "/chat/kate-paul",
    },
    {
      imgSrc: people03,
      name: "Dr. Chidi Dickson",
      message: "How are you feeling today?",
      time: "10:24",
      unreadCount: 0,
      link: "/chat/chidi-dickson",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row font-inter">
      <section className="w-auto md:w-[70%] h-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-inter font-bold whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed w-full">
            Find your doctor
          </h1>
        </div>
        <VitalsSwiper />
        <RecentMessages messages={messages} />
      </section>
      <DashboardAside />
    </div>
  );
};

export default Dashboard;
