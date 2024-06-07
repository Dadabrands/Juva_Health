// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import Homepage from "./components/Homepage";
// import Signup from "./pages/Auth/Signup";
// import PatientSignup from "./pages/Auth/PatientSignup";
// import DoctorSignup from "./pages/Auth/DoctorSignup";
// import AppLayout from "./ui/AppLayout";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./ui/PrivateRoute";
// import Vitals from "./pages/Vitals";
// import BookAppointment from "./pages/BookAppointment";
// import PaymentGateway from "./pages/PaymentGateway";
// import SecureChat from "./pages/SecureChat";
// import PatientProfile from "./pages/PatientProfile";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 60 * 1000,
//     },
//   },
// });

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/patient-signup" element={<PatientSignup />} />
//           <Route path="/doctor-signup" element={<DoctorSignup />} />

//           <Route
//             element={
//               <PrivateRoute>
//                 <AppLayout />
//               </PrivateRoute>
//             }
//           >
//             {/* <Route index element={<Navigate replace to="dashboard" />}/> */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/vitals" element={<Vitals />} />
//             <Route path="/book-appointment" element={<BookAppointment />} />
//             <Route path="/payment-gateway" element={<PaymentGateway />} />
//             <Route path="/secure-chat" element={<SecureChat />} />
//             <Route path="/patient-profile" element={<PatientProfile />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </QueryClientProvider>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import PatientSignup from "./pages/Auth/PatientSignup";
import DoctorSignup from "./pages/Auth/DoctorSignup";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./ui/PrivateRoute";
import Vitals from "./pages/Vitals";
import BookAppointment from "./pages/BookAppointment";
import PaymentGateway from "./pages/PaymentGateway";
import SecureChat from "./pages/SecureChat";
import PatientProfile from "./pages/PatientProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/patient-signup" element={<PatientSignup />} />
      <Route path="/doctor-signup" element={<DoctorSignup />} />

      <Route
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/secure-chat" element={<SecureChat />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
