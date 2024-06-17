import React, { useState, ChangeEvent, useRef } from "react";

interface CentiTimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CentiTimeInput: React.FC<CentiTimeInputProps> = ({ value, onChange }) => {
  const [hoursInitial, minutesInitial] = value.split(":");

  const [hours, setHours] = useState<string>(hoursInitial);
  const [minutes, setMinutes] = useState<string>(minutesInitial);
  const minutesRef = useRef<HTMLInputElement>(null);

  const handleHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newHours = e.target.value;
    if (/^\d{0,3}$/.test(newHours)) {
      setHours(newHours);
      if (newHours.length === 3) {
        minutesRef.current?.focus();
      }
      updateValue(newHours, minutes);
    }
  };

  const handleMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinutes = e.target.value;
    if (/^\d{0,2}$/.test(newMinutes)) {
      setMinutes(newMinutes);
      updateValue(hours, newMinutes);
    }
  };

  const updateValue = (hours: string, minutes: string) => {
    const newHours = hours ? hours : "0";
    const newMinutes = minutes ? minutes : "0";
    const formattedValue = `${newHours}:${newMinutes}`;
    onChange(formattedValue);
  };

  return (
    <div className="flex items-center border px-3 py-1 text-sm shadow-sm rounded-md">
      <input
        type="text"
        value={hours}
        onChange={handleHoursChange}
        placeholder="00"
        className="w-10 text-right outline-none bg-transparent"
      />

      <span className="bg-transparent">:</span>
      <input
        type="text"
        value={minutes}
        onChange={handleMinutesChange}
        ref={minutesRef}
        placeholder="00"
        className="w-10 text-left outline-none bg-transparent"
      />
    </div>
  );
};

export default CentiTimeInput;
