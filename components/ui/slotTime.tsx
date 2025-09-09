"use client";
import { useState, useEffect } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { TimeValue } from "react-aria-components";
import { Time } from "@internationalized/date";
import { Trash2 } from "lucide-react";

import Hour from "./time";

type SlotTimeProps = {
  id: number;
  startTime: Time;
  endTime: Time;
  totalTime: string;
  totalTimeCenth: string;
  checked: boolean;
  indexRow: number;
  onUpdate: (
    id: number,
    startTime: Time,
    endTime: Time,
    totalTime: string,
    totalTimeCenth: string,
    checked: boolean
  ) => void;
  onRemove: (id: number) => void;
  isDisabled?: boolean;
};
export default function SlotTime({
  id,
  startTime: initialStartTime,
  endTime: initialEndTime,
  totalTime: initialTotalTime,
  totalTimeCenth: initialTotalTimeCenth,
  onUpdate,
  onRemove,
  checked: initialCheckedState,
  indexRow,
  isDisabled = false,
}: SlotTimeProps) {
  const [startTime, setStartTime] = useState<Time>(initialStartTime);
  const [endTime, setEndTime] = useState<Time>(initialEndTime);
  const [totalTime, setTotalTime] = useState(initialTotalTime);
  const [totalTimeCenth, setTotalTimeCenth] = useState(initialTotalTimeCenth);
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  useEffect(() => {
    setStartTime(initialStartTime);
  }, [initialStartTime]);

  useEffect(() => {
    setEndTime(initialEndTime);
  }, [initialEndTime]);

  useEffect(() => {
    setTotalTime(initialTotalTime);
  }, [initialTotalTime]);

  useEffect(() => {
    setTotalTimeCenth(initialTotalTimeCenth);
  }, [initialTotalTimeCenth]);

  useEffect(() => {
    setCheckedState(initialCheckedState);
  }, [initialCheckedState]);

  const handleStartTimeChange = (value: TimeValue) => {
    const newValue = new Time(value.hour, value.minute);
    setStartTime(newValue);
    calculateTotalTime(newValue, endTime);
    onUpdate(id, newValue, endTime, totalTime, totalTimeCenth, checkedState);
  };

  const handleEndTimeChange = (value: TimeValue) => {
    const newValue = new Time(value.hour, value.minute);
    setEndTime(newValue);
    calculateTotalTime(startTime, newValue);
    onUpdate(id, startTime, newValue, totalTime, totalTimeCenth, checkedState);
  };

  const handleCheckedChange = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    onUpdate(
      id,
      startTime,
      endTime,
      totalTime,
      totalTimeCenth,
      newCheckedState
    );
  };

  const calculateTotalTime = (start: Time, end: Time) => {
    let totalMinutes = 0;

    if (start.compare(end) > 0) {
      setTotalTime("0:00");
      setTotalTimeCenth("0:00");
      const totalHours = 24 - (start.hour - end.hour);
      totalMinutes = totalHours * 60 + (end.minute - start.minute);
    } else {
      totalMinutes = (end.hour - start.hour) * 60 + (end.minute - start.minute);
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const totalTimesFormatted = `${hours}:${minutes
      .toString()
      .padStart(2, "0")}`;
    setTotalTime(totalTimesFormatted);

    const totalMinutesInHundredths = (totalMinutes / 60) * 100;
    const centhHours = Math.floor(totalMinutesInHundredths / 100);
    const centhMinutes = totalMinutesInHundredths % 100;
    const totalTimesCenthFormatted = `${centhHours}:${centhMinutes
      .toFixed(0)
      .padStart(2, "0")}`;
    setTotalTimeCenth(totalTimesCenthFormatted);
  };

  return (
    <TableRow>
      <TableCell>
        <Hour value={startTime} onChange={handleStartTimeChange} />
      </TableCell>
      <TableCell>
        <Hour value={endTime} onChange={handleEndTimeChange} />
      </TableCell>
      <TableCell>{totalTime}</TableCell>
      <TableCell>{totalTimeCenth}</TableCell>
      <TableCell className="flex items-center">
        <Checkbox
          checked={checkedState}
          onCheckedChange={handleCheckedChange}
          disabled={isDisabled}
        />
        <Trash2
          className={`cursor-pointer ml-1 mb-[2px] ${
            isDisabled ? "text-gray-300 cursor-not-allowed" : "text-[#fc3535]"
          }`}
          size={20}
          color={isDisabled ? "#d1d5db" : "#fc3535"}
          onClick={() => !isDisabled && onRemove(id)}
        />
      </TableCell>
    </TableRow>
  );
}
