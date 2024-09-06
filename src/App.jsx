import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CreateNewPassword from "./pages/ForgotPassword/CreateNewPassword";
import OTP from "./pages/ForgotPassword/OTP";
import SchedulerTemp from "./pages/Scheduler/Scheduler";
import Scheduler from "./pages/SchedulerDashboard/components/ScheduleList"
// import { Outlet } from 'react-router-dom'

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // return (
  //   <div>App</div>
  // )

  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Register/> */}
      {/* <ForgotPassword/> */}
      {/* <CreateNewPassword/> */}
      {/* <OTP/> */}
      <SchedulerTemp/>
    </>
  );
};

export default App;
