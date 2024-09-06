import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CreateNewPassword from "./pages/ForgotPassword/CreateNewPassword";
import OTP from "./pages/ForgotPassword/OTP";
import SchedulerDashboard from "./pages/SchedulerDashboard/SchedulerDashboard";
import Scheduler from "./pages/Scheduler/Scheduler"

// Fake authentication function (replace with actual authentication logic)
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Loader Component
const Loader = () => <div>Loading...</div>;

// Protected Route component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};
// import Scheduler from "./pages/SchedulerDashboard/components/ScheduleList";
// import { Outlet } from 'react-router-dom'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<CreateNewPassword />} />
          <Route path="/otp" element={<OTP />} />

          {/* Protected Route - only accessible if the user is authenticated */}
          <Route
            path="/scheduler"
            element={
              <ProtectedRoute>
                <SchedulerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/scheduler-dashboard" element={<Scheduler />} />
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
