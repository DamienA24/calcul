"use client";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Time } from "@internationalized/date";
import { TimeValue } from "react-aria-components";

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
    if (!end.hour || start.compare(end) > 0) {
      setTotalTime({ hours: 0, minutes: 0 });
      setTotalTimeCenth({
        hours: "0",
        minutes: "0",
      });
      return;
    }

    const totalMinutes =
      (end.hour - start.hour) * 60 + (end.minute - start.minute);
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
    </TableRow>
  );
}
