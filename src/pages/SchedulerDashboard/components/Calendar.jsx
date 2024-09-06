import React from "react";
import { Calendar as AntCalendar } from "antd";

const Calendar = ({ onDateSelect }) => {
  return (
    <>
      <div style={{width:"500px"}}>
      <AntCalendar onSelect={onDateSelect} />
      </div>
    </>
  );
};

export default Calendar;
