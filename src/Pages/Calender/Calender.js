import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="my-14  px-10">
      <div
        class="hero min-h-screen"
        style={{ backgroundImage: `url(https://placeimg.com/300/150/arch)` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p className="text-2xl font-bold font-sans">
              You have selected : {format(date, "PP")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
