import React from 'react';
import Calendar from './Calendar';
import Notifications from './Notifications';

const Sidebar = ({ onDateSelect, notifications }) => {
  return (
    <div style={{border:"2px solid red"}}>
      <Calendar onDateSelect={onDateSelect} />
      <Notifications notifications={notifications} />
    </div>
  );
};

export default Sidebar;
