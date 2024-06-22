import RecentMessages from "../ui/MessageItems";
import { IoCalendarOutline } from "react-icons/io5";
import { people01, people02, people03 } from "../assets";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import VitalsSwiper from "./VitalsSwiper";
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
          {/* 
          <div className="flex md:hidden gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-800">
            <IoCalendarOutline />
            <IoNotificationsOutline />
            <MdMarkEmailUnread />
            <img src={people01} className="rounded-full w-8 h-8" />
          </div> */}
        </div>
        <VitalsSwiper />
        <RecentMessages messages={messages} />
      </section>
      <section className="w-full md:w-[30%] bg-indigo-200 dark:bg-slate-900/20 h-full">
        <div className="flex flex-col m-4 ">
          <div className="hidden md:flex gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-800">
            <IoCalendarOutline />
            <IoNotificationsOutline />
            <MdMarkEmailUnread />
            <img src={people01} className="rounded-full w-8 h-8" />
          </div>
          <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 m-4 rounded-md h-auto  shadow-lg">
            <div className="">
              <div className="font-bold text-indigo-950 dark:text-slate-400">
                Formation status
              </div>
              <div className="text-xs font-bold text-indigo-500 dark:text-slate-400">
                In progress
              </div>
            </div>
            <div className="h-4 w-full  dark:bg-gray-200 rounded-lg">
              <div className="h-4 bg-indigo-900 dark:text-slate-400 w-[30%] rounded-lg"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-indigo-950 dark:text-slate-400">
                Estimated Processing
              </div>
              <div className="font-semibold text-indigo-900 dark:text-slate-400 text-sm">
                4-5 business days
              </div>
            </div>
            <div>
              <button className="bg-gradient-to-tr from-pink-900 to-indigo-900 dark:text-slate-400 p-4 text-white w-full rounded-xl">
                View Status
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 m-4 text-indigo-900 dark:text-slate-400  ">
            <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950">
                <CiTimer />
              </div>
              <div className="">
                <div className="font-semibold text-sm">Run payroll</div>
                <div className="text-indigo-500 text-xs">
                  March 7th at 4:50Pm
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950">
                <CiTimer />
              </div>
              <div>
                <div className="font-semibold text-sm">Run payroll</div>
                <div className="text-indigo-500 text-xs">
                  March 7th at 4:50Pm
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950">
                <CiTimer />
              </div>
              <div>
                <div className="font-semibold  text-sm">Run payroll</div>
                <div className="text-indigo-500 text-xs">
                  March 7th at 4:50Pm
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950">
                <CiTimer />
              </div>
              <div>
                <div className="font-semibold  text-sm">Run payroll</div>
                <div className="text-indigo-500 text-xs">
                  March 7th at 4:50Pm
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 m-4 rounded-lg h-auto  shadow-lg">
            <div>
              <div className="font-bold text-indigo-950 dark:text-slate-400">
                Board Meeting
              </div>
              <div className="text-xs font-bold text-indigo-500">
                March 5th 2024
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold text-indigo-900 dark:text-slate-400 text-sm">
                You have been invited to attend a meeting of board of directors
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
