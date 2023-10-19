"use client";

// styling
import "../styles/dashboard.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
        className="my-calendar"
      />
    </>
  );
};

export default CalendarComponent;
