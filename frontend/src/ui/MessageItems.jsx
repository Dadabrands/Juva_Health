/* eslint-disable react/prop-types */
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const MessageItem = ({ imgSrc, name, message, time, unreadCount, link }) => (
  <Link to={link} className="w-full block">
    <div className="flex justify-between items-center gap-4 p-2 mt-6 w-full max-md:flex-nowrap max-sm:gap-2 max-sm:mt-4 max-sm:max-w-full">
      <div className="flex gap-4 items-center max-sm:gap-2">
        <img
          loading="lazy"
          srcSet={imgSrc}
          className="aspect-square w-[60px] max-sm:w-[50px]"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-black max-md:text-lg max-sm:text-base">
            {name}
          </span>
          <span className="mt-1 text-base font-medium text-stone-500 max-md:text-sm max-sm:text-xs">
            {message}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end min-w-[70px] max-sm:min-w-[50px] max-sm:text-right">
        <span className="text-base text-black max-md:text-sm max-sm:text-xs">
          {time}
        </span>
        {unreadCount ? (
          <span className="px-2 py-1.5 mt-2 text-sm text-white bg-lime-600 rounded-lg max-md:text-xs max-sm:text-[10px]">
            {unreadCount}
          </span>
        ) : (
          <IoCheckmarkDoneSharp className="mt-2 w-6 aspect-square max-sm:w-5 text-lime-600" />
        )}
      </div>
    </div>
  </Link>
);

const RecentMessages = ({ messages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  const handleClickNext = () => {
    if (currentPage * messagesPerPage < messages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * messagesPerPage;
  const currentMessages = messages.slice(
    startIndex,
    startIndex + messagesPerPage
  );

  return (
    <div className="max-w-[800px] mx-auto font-inter text-stone-500 pb-2 max-sm:px-2">
      <div className="flex justify-between items-center gap-5 mt-14 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-2xl font-bold text-black max-md:text-xl max-sm:text-lg">
          Recent messages
        </h3>
        <Link
          to="/secure-chat"
          className="text-base text-stone-500 max-md:text-sm max-sm:text-xs"
        >
          view all
        </Link>
      </div>
      {currentMessages.length > 0 ? (
        currentMessages.map((msg, index) => (
          <MessageItem
            key={index}
            imgSrc={msg.imgSrc}
            name={msg.name}
            message={msg.message}
            time={msg.time}
            unreadCount={msg.unreadCount}
            link={msg.link}
          />
        ))
      ) : (
        <div className="text-center text-lg text-stone-500 mt-6">
          No messages yet
        </div>
      )}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handleClickPrev}
          className={`text-base text-stone-500 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleClickNext}
          className={`text-base text-stone-500 ${
            currentPage * messagesPerPage >= messages.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentPage * messagesPerPage >= messages.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentMessages;
