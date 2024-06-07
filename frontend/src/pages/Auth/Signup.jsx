

import { logo } from "../../assets";
import { MiniNavbar } from "../../components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handlePatientSignup = () => {
    navigate("/patient-signup");
  };

  const handleDoctorSignup = () => {
    navigate("/doctor-signup");
  };

  return (
    <>
      <div className="flex flex-col px-2 md:px-20 py-4 md:py-12 bg-fuchsia-200 max-md:px-5">
        <MiniNavbar />
        <div className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px] w-[621px] max-md:px-5 max-md:mt-10">
          <h1 className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap max-w-full md:max-w-4xl xxxs:text-center xxxs:block">
            <img
              src={logo}
              alt=""
              className="grow self-center mt-1.5 mx-auto block xxxs:mx-auto xxxs:block"
            />
            <span className="xxs:block xxxs:mt-2">Welcome to JUVA</span>
          </h1>

          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            We provide healthcare services for all by offering remote medical consultation. Each of our service is tailored to help you achieve the most as a patient and an health professional.
          </p>

          <button
            type="button"
            onClick={handlePatientSignup}
            className="justify-center items-center px-16 py-5 mt-7 font-bold font-inter whitespace-nowrap bg-secondary text-black rounded-lg max-md:px-5 max-md:max-w-full"
          >
            Sign Up as a Patient
          </button>
          <button
            type="button"
            onClick={handleDoctorSignup}
            className="justify-center items-center px-16 py-5 mt-4 mb-8 font-bold font-inter text-center text-black bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
          >
            Sign Up as a Doctor
          </button>

          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            Already have an account? <a href="/login">  <span className="font-extrabold text-purple-800">Login</span></a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
