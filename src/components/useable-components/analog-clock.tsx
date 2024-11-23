import React, { useState, useEffect } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12; // Convert to 12-hour format
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="relative">
      <div className="flex justify-center items-center w-[300px] h-[300px] border shadow-lg rounded-full relative">
        <div className="h-4 w-4 bg-black rounded-full"></div>
        {numbers.map((number) => (
          <span
            key={number}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${
                50 - Math.cos(((360 / 12) * number * Math.PI) / 180) * 40
              }%`,
              left: `${
                50 + Math.sin(((360 / 12) * number * Math.PI) / 180) * 40
              }%`,
            }}
          >
            {number}
          </span>
        ))}
        {/* Seconds hand */}
        <svg className="absolute top-0 left-0" height="100%" width="100%">
          <line
            x1="50%"
            y1="50%"
            x2={`${50 + Math.sin((seconds * 6 * Math.PI) / 180) * 35}%`}
            y2={`${50 - Math.cos((seconds * 6 * Math.PI) / 180) * 35}%`}
            stroke="red"
            strokeWidth="1"
          />
        </svg>
        {/* Minutes hand */}
        <svg className="absolute top-0 left-0" height="100%" width="100%">
          <line
            x1="50%"
            y1="50%"
            x2={`${50 + Math.sin((minutes * 6 * Math.PI) / 180) * 30}%`}
            y2={`${50 - Math.cos((minutes * 6 * Math.PI) / 180) * 30}%`}
            stroke="black"
            strokeWidth="3"
          />
        </svg>
        {/* Hours hand */}
        <svg className="absolute top-0 left-0" height="100%" width="100%">
          <line
            x1="50%"
            y1="50%"
            x2={`${
              50 + Math.sin(((hours * 30 + minutes / 2) * Math.PI) / 180) * 25
            }%`}
            y2={`${
              50 - Math.cos(((hours * 30 + minutes / 2) * Math.PI) / 180) * 25
            }%`}
            stroke="black"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
}

export default AnalogClock;
