import React, { useState } from "react";

const CreateSchedule = ({ onClose }) => {
  const [busId, setBusId] = useState("");
  const [crewId, setCrewId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = async () => {
    // Handle form submission
    // Example: await fetch('/api/schedules', { method: 'POST', body: JSON.stringify({ busId, crewId, startTime, endTime, route }) });
    onClose();
  };

  return (
    <div>
      <h2>Create New Schedule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bus ID"
          value={busId}
          onChange={(e) => setBusId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Crew ID"
          value={crewId}
          onChange={(e) => setCrewId(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          required
        />
        <button type="submit">Create Schedule</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CreateSchedule;
