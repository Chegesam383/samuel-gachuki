"use client";
import { useState, useEffect } from "react";

type TimeDisplayProps = {
  gmtOffset: number;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ gmtOffset }) => {
  const getFormattedTime = (): string => {
    const now = new Date();
    const utcTime = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours() + gmtOffset,
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );

    // Get formatted time (12-hour format)
    let hours = utcTime.getHours();
    const minutes = utcTime.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${hours}:${minutes} ${amPm}`;
  };

  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, [gmtOffset]);

  return (
    <small className="text-[10px] text-muted-foreground  text-nowrap text-center ">
      &nbsp; {time} &nbsp;
      <span className="inline md:hidden xl:inline">({gmtOffset}UTC)</span>
    </small>
  );
};

export default TimeDisplay;
