/* eslint-disable react/prop-types */
// import { Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ children }) => {
//   const { patientInfo } = useSelector((state) => state.auth);
//   return patientInfo ? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { patientInfo } = useSelector((state) => state.auth);

  // Check if the token exists and is not empty
  const isAuthenticated = patientInfo && patientInfo.token;
  // console.log(patientInfo.token);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
