// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { MdEmail, MdArrowBack } from "react-icons/md";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { logo } from "../../assets";
// import { useSignupMutation } from "../../slices/patientsApiSlice";
// import { MiniNavbar } from "../../components";
// import { setCredentials } from "../../slices/authSlice";
// import Loader from "../../components/Loader";

// const PatientSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle password visibility

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useSignupMutation();

//   const { patientInfo } = useSelector((state) => state.auth);
//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/patient-signup";

//   useEffect(() => {
//     if (patientInfo) {
//       navigate(redirect);
//     }
//   }, [patientInfo, redirect, navigate]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== passwordConfirm) {
//       toast.error("Passwords do not match");
//       return;
//     } else {
//       try {
//         const res = await register({
//           email,
//           password,
//           passwordConfirm,
//         }).unwrap();
//         dispatch(
//           setCredentials({
//             ...res,
//           })
//         );
//         navigate(redirect);
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword); // Toggle password visibility
//   };
//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prevShowPassword) => !prevShowPassword); // Toggle password visibility
//   };

//   // Handle navigation to the login page
//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <>
//       <div className="flex flex-col  px-2 md:px-20 py-4 smd:py-12 bg-fuchsia-200 max-md:px-5">
//         <MiniNavbar />
//         <div
//           className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px]
//         w-[621px] max-md:px-5 max-md:mt-10"
//         >
//           <h1 className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap max-w-full md:max-w-4xl xxxs:text-center xxxs:block">
//             <img
//               src={logo}
//               alt=""
//               className="grow self-center mt-1.5 mx-auto block xxxs:mx-auto xxxs:block"
//             />
//             <span className="xxs:block xxxs:mt-2">
//               We will be glad to have you on board!
//             </span>
//           </h1>

//           <div className="flex items-center justify-center">
//             <div className="border-t border-gray-300 flex-grow"></div>
//             <span className="mx-4 font-inter font-bold ">or</span>
//             <div className="border-t border-gray-300 flex-grow"></div>
//           </div>

//           <form onSubmit={submitHandler}>
//             <div className="flex flex-wrap justify-between">
//               <div className="w-full md:w-1/2 pr-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="email"
//                     className="flex items-center text-sm font-medium text-gray-700 mr-4"
//                   >
//                     <MdEmail size={20} color="gray" className="mr-2" />
//                     E-mail:
//                   </label>
//                   {/* <span>{err?.email?.message}</span> */}
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="input-field"
//                     placeholder="Dadajoshua@Example.com"
//                   />
//                 </div>
//               </div>

//               <div className="w-full md:w-1/2 pr-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="password"
//                     className="text-sm font-medium text-gray-700 flex items-center"
//                   >
//                     <FaEyeSlash size={20} color="gray" className="mr-2" />
//                     Password:
//                   </label>
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     autoComplete="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="input-field"
//                     placeholder="Enter your password"
//                   />
//                   {showPassword ? ( // Show eye icon to hide password if showPassword is true, otherwise show slash icon to reveal password
//                     <FaEyeSlash
//                       size={20}
//                       color="black"
//                       className="ml-2 cursor-pointer"
//                       onClick={togglePasswordVisibility}
//                     />
//                   ) : (
//                     <FaEye
//                       size={20}
//                       color="black"
//                       className="ml-2 cursor-pointer"
//                       onClick={togglePasswordVisibility}
//                     />
//                   )}
//                 </div>
//               </div>

//               <div className="w-full md:w-1/2 pl-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="confirmPassword"
//                     className="text-sm font-medium text-gray-700 flex items-center"
//                   >
//                     <FaEyeSlash size={20} color="gray" className="mr-2" />
//                     Confirm Password:
//                   </label>
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     autoComplete="password"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={passwordConfirm}
//                     onChange={(e) => setPasswordConfirm(e.target.value)}
//                     className="input-field"
//                     placeholder="Confirm your password"
//                   />
//                   {showConfirmPassword ? ( // Show eye icon to hide password if showPassword is true, otherwise show slash icon to reveal password
//                     <FaEyeSlash
//                       size={20}
//                       color="black"
//                       className="ml-2 cursor-pointer"
//                       onClick={toggleConfirmPasswordVisibility}
//                     />
//                   ) : (
//                     <FaEye
//                       size={20}
//                       color="black"
//                       className="ml-2 cursor-pointer"
//                       onClick={toggleConfirmPasswordVisibility}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>

//             <button
//               className="justify-center items-center px-16 py-5 mt-4 mb-8 font-bold font-inter text-center w-full text-black  bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
//               type="submit"
//               disabled={isLoading}
//             >
//               Sign Up
//             </button>
//             {isLoading && <Loader />}
//           </form>

//           <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
//             Have an Account Already?
//             <button onClick={handleLoginClick} className="cursor-pointer">
//               <span className="font-extrabold text-purple-800">Log In</span>
//             </button>
//           </p>

//           <div className="flex items-center mb-4">
//             <Link
//               to="/signup"
//               className="text-primary flex font-inter items-center"
//             >
//               <MdArrowBack size={24} className="mr-2" />
//               Go Back
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PatientSignup;

// new code

// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { MdEmail, MdArrowBack } from "react-icons/md";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { logo } from "../../assets";
// import { useSignupMutation } from "../../slices/patientsApiSlice";
// import { MiniNavbar } from "../../components";
// import { setCredentials } from "../../slices/authSlice";
// import Loader from "../../components/Loader";

// const PatientSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useSignupMutation();

//   const { patientInfo } = useSelector((state) => state.auth);
//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/dashboard"; // Change redirect to the dashboard

//   useEffect(() => {
//     if (patientInfo && redirect !== "/dashboard") {
//       navigate(redirect);
//     }
//   }, [patientInfo, redirect, navigate]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== passwordConfirm) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await register({ email, password, passwordConfirm }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <>
//       <div className="flex flex-col px-2 md:px-20 py-4 smd:py-12 bg-fuchsia-200 max-md:px-5">
//         <MiniNavbar />
//         <div className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px] w-[621px] max-md:px-5 max-md:mt-10">
//           <h1 className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap max-w-full md:max-w-4xl xxxs:text-center xxxs:block">
//             <img
//               src={logo}
//               alt=""
//               className="grow self-center mt-1.5 mx-auto block xxxs:mx-auto xxxs:block"
//             />
//             <span className="xxs:block xxxs:mt-2">
//               We will be glad to have you on board!
//             </span>
//           </h1>

//           {/* <div className="flex items-center justify-center">
//             <div className="border-t border-gray-300 flex-grow"></div>
//             <span className="mx-4 font-inter font-bold ">or</span>
//             <div className="border-t border-gray-300 flex-grow"></div>
//           </div> */}

//           <form onSubmit={submitHandler}>
//             <div className="flex flex-wrap justify-between">
//               <div className="w-full md:w-1/2 pr-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="email"
//                     className="flex items-center text-sm font-medium text-gray-700 mr-4"
//                   >
//                     <MdEmail size={20} color="gray" className="mr-2" />
//                     E-mail:
//                   </label>
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="input-field"
//                     placeholder="Dadajoshua@Example.com"
//                   />
//                 </div>
//               </div>

//               <div className="w-full md:w-1/2 pr-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="password"
//                     className="text-sm font-medium text-gray-700 flex items-center"
//                   >
//                     <FaEyeSlash size={20} color="gray" className="mr-2" />
//                     Password:
//                   </label>
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     autoComplete="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="input-field"
//                     placeholder="Enter your password"
//                   />
//                   <span
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash size={20} color="black" />
//                     ) : (
//                       <FaEye size={20} color="black" />
//                     )}
//                   </span>
//                 </div>
//               </div>

//               <div className="w-full md:w-1/2 pl-4 mb-4">
//                 <div className="flex items-center">
//                   <label
//                     htmlFor="confirmPassword"
//                     className="text-sm font-medium text-gray-700 flex items-center"
//                   >
//                     <FaEyeSlash size={20} color="gray" className="mr-2" />
//                     Confirm Password:
//                   </label>
//                 </div>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     autoComplete="password"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={passwordConfirm}
//                     onChange={(e) => setPasswordConfirm(e.target.value)}
//                     className="input-field"
//                     placeholder="Confirm your password"
//                   />
//                   <span
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={toggleConfirmPasswordVisibility}
//                   >
//                     {showConfirmPassword ? (
//                       <FaEyeSlash size={20} color="black" />
//                     ) : (
//                       <FaEye size={20} color="black" />
//                     )}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               className="justify-center items-center px-16 py-5 mt-4 mb-8 font-bold font-inter text-center w-full text-black bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
//               type="submit"
//               disabled={isLoading}
//             >
//               Sign Up
//             </button>
//             {isLoading && <Loader />}
//           </form>

//           <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
//             Have an Account Already?
//             <button onClick={handleLoginClick} className="cursor-pointer">
//               <span className="font-extrabold text-purple-800">Log In</span>
//             </button>
//           </p>

//           <div className="flex items-center mb-4">
//             <Link
//               to="/signup"
//               className="text-primary flex font-inter items-center"
//             >
//               <MdArrowBack size={24} className="mr-2" />
//               Go Back
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PatientSignup;

// supper new code
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logo } from "../../assets";
import { useSignupMutation } from "../../slices/patientsApiSlice";
import { MiniNavbar } from "../../components";
import { setCredentials } from "../../slices/authSlice";
import Loader from "../../components/Loader";

const PatientSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useSignupMutation();

  const { patientInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/dashboard"; // Change redirect to the dashboard

  useEffect(() => {
    if (patientInfo && redirect !== "/dashboard") {
      navigate(redirect);
    }
  }, [patientInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await register({ email, password, passwordConfirm }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Account successfully created! Please proceed to log in.");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col px-2 md:px-20 py-4 smd:py-12 bg-fuchsia-200 max-md:px-5">
        <MiniNavbar />
        <div className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px] w-[621px] max-md:px-5 max-md:mt-10">
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

          <form onSubmit={submitHandler}>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-medium text-gray-700 mr-4"
                  >
                    <MdEmail size={20} color="gray" className="mr-2" />
                    E-mail:
                  </label>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="Dadajoshua@Example.com"
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
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Enter your password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} color="black" />
                    ) : (
                      <FaEye size={20} color="black" />
                    )}
                  </span>
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
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="input-field"
                    placeholder="Confirm your password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash size={20} color="black" />
                    ) : (
                      <FaEye size={20} color="black" />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="justify-center items-center px-16 py-5 mt-4 mb-8 font-bold font-inter text-center w-full text-black bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
              type="submit"
              disabled={isLoading}
            >
              Sign Up
            </button>
            {isLoading && <Loader />}
          </form>

          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            Have an Account Already?
            <button onClick={handleLoginClick} className="cursor-pointer">
              <span className="font-extrabold text-purple-800">Log In</span>
            </button>
          </p>

          <div className="flex items-center mb-4">
            <Link
              to="/signup"
              className="text-primary flex font-inter items-center"
            >
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
