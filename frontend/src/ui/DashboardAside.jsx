import { Link } from "react-router-dom";
import { useState } from "react";
import { people01, people02 } from "../assets";
import CalendarGfg from "../components/Calender";

const appointments = [
  {
    imgSrc: people02,
    doctorName: "Dr. Kate Paul",
    specialty: "Gynaecologist",
    appointmentTime: "February 4, 2:00pm",
  },
  {
    imgSrc: people01,
    doctorName: "Dr. Chidi Dickson",
    specialty: "General Practitioner",
    appointmentTime: "February 6, 12:00pm",
  },
  {
    imgSrc: people01,
    doctorName: "Dr. Chidi Dickson",
    specialty: "General Practitioner",
    appointmentTime: "February 6, 12:00pm",
  },
  {
    imgSrc: people01,
    doctorName: "Dr. Chidi Dickson",
    specialty: "General Practitioner",
    appointmentTime: "February 6, 12:00pm",
  },
  // Add more appointments as needed
];

const AppointmentItem = ({
  imgSrc,
  doctorName,
  specialty,
  appointmentTime,
}) => (
  <div className="flex gap-4  grow justify-start items-center p-4 mt-6 w-full bg-white rounded-3xl shadow-sm max-md:gap-3 max-md:mt-4 max-sm:gap-2 max-sm:p-2">
    <img
      loading="lazy"
      srcSet={imgSrc}
      className="aspect-square w-[80px] max-sm:w-[60px] rounded-lg"
      alt={doctorName}
    />
    <div className="flex flex-col justify-center flex-1 min-w-0">
      <span className="text-lg font-semibold text-black max-md:text-base max-sm:text-sm">
        {doctorName}
      </span>
      <span className="mt-1 text-base font-medium text-stone-500 max-md:text-sm max-sm:text-xs">
        {specialty}
      </span>
      <time className="mt-2 text-purple-800 font-bold whitespace-nowrap max-md:text-sm max-sm:text-[8px]">
        {appointmentTime}
      </time>
    </div>
  </div>
);

const AppointmentsList = ({ appointments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 5;

  const handleClickNext = () => {
    if (currentPage * appointmentsPerPage < appointments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * appointmentsPerPage;
  const currentAppointments = appointments.slice(
    startIndex,
    startIndex + appointmentsPerPage
  );

  return (
    <div className="max-w-[700px] mx-auto font-inter text-stone-500 pb-2 max-sm:px-2">
      <div className="flex justify-between items-center gap-5 mt-14 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-2xl font-bold text-black max-md:text-xl max-sm:text-lg">
          Appointments
        </h3>
        <Link
          to="/appointments"
          className="text-base text-stone-500 max-md:text-sm max-sm:text-xs"
        >
          view all
        </Link>
      </div>
      {currentAppointments.length > 0 ? (
        currentAppointments.map((appointment, index) => (
          <AppointmentItem
            key={index}
            imgSrc={appointment.imgSrc}
            doctorName={appointment.doctorName}
            specialty={appointment.specialty}
            appointmentTime={appointment.appointmentTime}
          />
        ))
      ) : (
        <div className="text-center text-lg text-stone-500 mt-6">
          No appointments yet
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
            currentPage * appointmentsPerPage >= appointments.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentPage * appointmentsPerPage >= appointments.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const DashboardAside = () => {
  return (
    <aside className="flex flex-col grow pt-9 pb-4 mx-auto w-full md:w-[30%] bg-magnolia h-full rounded-[48px] max-md:px-5 max-md:mt-10">
      {/* <div className="flex justify-center w-full p-6 bg-white rounded-3xl max-md:px-5"> */}
      <CalendarGfg />
      {/* </div> */}
      <div className="flex flex-col justify-center p-6">
        <AppointmentsList appointments={appointments} />
      </div>
    </aside>
  );
};

export default DashboardAside;
