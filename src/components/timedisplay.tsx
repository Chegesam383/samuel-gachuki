"use client";
import { useState, useEffect } from "react";

type TimeDisplayProps = {
  timezone: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timezone }) => {
  const getFormattedTime = (): string => {
    try {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(now);
    } catch (error) {
      console.error("Error formatting time:", error);
      return "Invalid Timezone";
    }
  };

  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <small className="text-[10px] text-muted-foreground text-nowrap text-center mt-1">
      <span className="inline lg:hidden"> &nbsp;Current Time:</span>
      &nbsp;{time}&nbsp;
      {/* <span className="inline lg:hidden xl:inline">({timezone})</span> */}
    </small>
  );
};

export default TimeDisplay;
