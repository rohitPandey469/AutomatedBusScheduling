import React, { useState, useEffect } from "react";
import ScheduleList from "./components/ScheduleList";
import Sidebar from "./components/Sidebar";
import CreateSchedule from "./components/CreateSchedule";
import SearchBar from "./components/SearchBar";
import ScheduleDetail from "./components/ScheduleDetail";

const SchedulerDashboard = () => {
  const [schedules, setSchedules] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // Fetch schedules and notifications from API
    // Example: fetch('/api/schedules').then(res => res.json()).then(data => setSchedules(data));
    // Example: fetch('/api/notifications').then(res => res.json()).then(data => setNotifications(data));
  }, []);

  const handleSearch = (query) => {
    // Handle search logic
    console.log("Searching for:", query);
  };

  const handleDateSelect = (date) => {
    // Handle date selection
    console.log("Date selected:", date);
  };

  const handleCreateSchedule = () => {
    setIsCreating(true);
  };

  const handleCloseCreateSchedule = () => {
    setIsCreating(false);
  };

  const handleScheduleClick = (schedule) => {
    setSelectedSchedule(schedule);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "3.5rem",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem",
          border: "2px solid green",
        }}
      >
        <ScheduleList schedules={schedules} onClick={handleScheduleClick} />
        <button onClick={handleCreateSchedule}>Create New Schedule</button>
        {isCreating && <CreateSchedule onClose={handleCloseCreateSchedule} />}
        <ScheduleDetail
          schedule={selectedSchedule}
          onClose={() => setSelectedSchedule(null)}
        />
        <SearchBar onSearch={handleSearch} />
      </div>
      <Sidebar onDateSelect={handleDateSelect} notifications={notifications} />
    </div>
  );
};

export default SchedulerDashboard;
