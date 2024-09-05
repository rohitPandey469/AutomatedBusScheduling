import React from 'react';

const ScheduleDetail = ({ schedule, onClose }) => {
  return (
    <div>
      <h2>Schedule Details</h2>
      {schedule ? (
        <div>
          <p>Bus ID: {schedule.bus_id}</p>
          <p>Crew ID: {schedule.crew_id}</p>
          <p>Start Time: {new Date(schedule.start_time).toLocaleString()}</p>
          <p>End Time: {new Date(schedule.end_time).toLocaleString()}</p>
          <p>Route: {schedule.route}</p>
          <button onClick={onClose}>Close</button>
        </div>
      ) : (
        <p>No schedule selected</p>
      )}
    </div>
  );
};

export default ScheduleDetail;
