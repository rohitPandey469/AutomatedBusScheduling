import React from "react";

const ScheduleList = ({ schedules, onClick }) => {
  return (
    <div>
      <h2>Current Day's Schedule</h2>
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index} onClick={() => onClick(schedule)}>
            {schedule.bus_id} - {schedule.crew_id} -{" "}
            {new Date(schedule.start_time).toLocaleTimeString()} to{" "}
            {new Date(schedule.end_time).toLocaleTimeString()}
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
