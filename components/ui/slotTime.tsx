"use client";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { TimeValue } from "react-aria-components";
import { Time } from "@internationalized/date";
import { Trash2 } from "lucide-react";

import Hour from "./time";

export default function SlotTime() {
  const [startTime, setStartTime] = useState(new Time(0, 0));
  const [endTime, setEndTime] = useState(new Time(0, 0));
  const [totalTime, setTotalTime] = useState({ hours: 0, minutes: 0 });
  const [totalTimeCenth, setTotalTimeCenth] = useState({
    hours: "0",
    minutes: "0",
  });

  const handleStartTimeChange = (value: TimeValue) => {
    const newValue = new Time(value.hour, value.minute);
    setStartTime(newValue);
    calculateTotalTime(newValue, endTime);
  };

  const handleEndTimeChange = (value: TimeValue) => {
    const newValue = new Time(value.hour, value.minute);
    setEndTime(newValue);

    calculateTotalTime(startTime, newValue);
  };

  const calculateTotalTime = (start: Time, end: Time) => {
    let totalMinutes = 0;

    if (start.compare(end) > 0) {
      setTotalTime({ hours: 0, minutes: 0 });
      setTotalTimeCenth({
        hours: "0",
        minutes: "0",
      });
      const totalHours = 24 - (start.hour - end.hour);
      totalMinutes = totalHours * 60 + (end.minute - start.minute);
    } else {
      totalMinutes = (end.hour - start.hour) * 60 + (end.minute - start.minute);
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setTotalTime({ hours, minutes });

    const totalMinutesInHundredths = (totalMinutes / 60) * 100;
    const centhHours = Math.floor(totalMinutesInHundredths / 100);
    const centhMinutes = totalMinutesInHundredths % 100;
    setTotalTimeCenth({
      hours: centhHours.toString(),
      minutes: centhMinutes.toFixed(0),
    });
  };

  return (
    <TableRow>
      <TableCell>
        <Hour value={startTime} onChange={handleStartTimeChange} />
      </TableCell>
      <TableCell>
        <Hour value={endTime} onChange={handleEndTimeChange} />
      </TableCell>
      <TableCell>{`${totalTime.hours}:${totalTime.minutes
        .toString()
        .padStart(2, "0")}`}</TableCell>
      <TableCell>
        {`${totalTimeCenth.hours}:${totalTimeCenth.minutes.padStart(2, "0")}`}{" "}
      </TableCell>
      <TableCell className="flex items-center">
        <Checkbox />
        <Trash2
          className="cursor-pointer ml-1 mb-[2px]"
          size={20}
          color="#fc3535"
        />
      </TableCell>
    </TableRow>
  );
}
