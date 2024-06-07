import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePhoneAndroid, MdEmail, MdArrowBack } from "react-icons/md";
import { FaGoogle, FaUser, FaEyeSlash } from "react-icons/fa";

import { logo } from "../../assets";
import { MiniNavbar } from "../../components";

import { useRegisterPatient } from "./useRegisterPatient";

const PatientSignup = () => {
  const navigate = useNavigate();
  const { isLoading, registerPatient } = useRegisterPatient();
  const { register, reset, formState, getValues, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  }) {
    registerPatient(
      { firstName, lastName, email, password, phoneNumber, confirmPassword },
      { onSettled: () => reset() }
    );
    console.log("code reached here");
  }
  // Handle navigation to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col  px-2 md:px-20 py-4 smd:py-12 bg-fuchsia-200 max-md:px-5">
        <MiniNavbar />
        <div
          className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px]
        w-[621px] max-md:px-5 max-md:mt-10"
        >
          <h1 className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap max-w-full md:max-w-4xl xxxs:text-center xxxs:block">
            <img
              src={logo}
              alt=""
              className="grow self-center mt-1.5 mx-auto block xxxs:mx-auto xxxs:block"
            />
            <span className="xxs:block xxxs:mt-2">
              We will be glad to have you on board!
            </span>
          </h1>

          <button
            type="submit"
            className="flex justify-center items-center px-16 py-5 mt-7 font-bold font-inter whitespace-nowrap bg-secondary text-black rounded-lg max-md:px-5 max-md:max-w-full"
          >
            <span className="flex items-center">
              <FaGoogle
                size={20}
                color="black"
                className="ml-2 mr-2 font-inter"
              />
              Sign Up with Google
            </span>
          </button>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 font-inter font-bold ">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaUser size={20} color="gray" className="mr-2" />
                    First Name:
                  </label>
                  <span>{errors?.firstName?.message}</span>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    disabled={isLoading}
                    {...register("firstName", {
                      required: "This field is reuired",
                    })}
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="input-field"
                    placeholder="Dada"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaUser size={20} color="gray" className="mr-2" />
                    Last Name:
                  </label>
                  <span>{errors?.lastName?.message}</span>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    disabled={isLoading}
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="input-field"
                    placeholder="Joshua"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pr-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-medium text-gray-700 mr-4"
                  >
                    <MdEmail size={20} color="gray" className="mr-2" />
                    E-mail:
                  </label>
                  <span>{errors?.email?.message}</span>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    disabled={isLoading}
                    {...register("email", {
                      required: "This field is reuired",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid  email address",
                      },
                    })}
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="Dadajoshua@Example.com"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <MdOutlinePhoneAndroid
                      size={20}
                      color="gray"
                      className="mr-2"
                    />
                    Phone:
                  </label>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    disabled={isLoading}
                    {...register("phone", {
                      required: "This field is required",
                    })}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input-field"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pr-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaEyeSlash size={20} color="gray" className="mr-2" />
                    Password:
                  </label>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    autoComplete="password"
                    disabled={isLoading}
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password needs a minimum of 8 characters",
                      },
                    })}
                    type="password"
                    id="password"
                    name="password"
                    className="input-field"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaEyeSlash size={20} color="gray" className="mr-2" />
                    Confirm Password:
                  </label>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    autoComplete="password"
                    disabled={isLoading}
                    {...register("confirmPassword", {
                      required: "This field is required",
                      validate: (value) =>
                        value === getValues().password ||
                        "Passwords needs to match",
                    })}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="input-field"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <button
              className="justify-center items-center px-16 py-5 mt-4 mb-8 font-bold font-inter text-center w-full text-black  bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            Have an Account Already?
            <button onClick={handleLoginClick} className="cursor-pointer">
              <span className="font-extrabold text-purple-800">Log In</span>
            </button>
          </p>

          <div className="flex items-center mb-4">
            <Link to="/signup" className="text-primary flex font-inter items-center">
              <MdArrowBack size={24} className="mr-2" />
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientSignup;
