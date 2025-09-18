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
  time: Time;
  totalTime: string;
  checked: boolean;
  indexRow: number;
  onUpdate: (
    id: number,
    time: Time,
    totalTime: string,
    checked: boolean
  ) => void;
  onRemove: (id: number) => void;
};
export default function SlotConvertHour({
  id,
  time: initialStartTime,
  totalTime: initialTotalTime,
  onUpdate,
  onRemove,
  checked: initialCheckedState,
  indexRow,
}: SlotTimeProps) {
  const [time, setTime] = useState<Time>(initialStartTime);
  const [totalTime, setTotalTime] = useState(initialTotalTime);
  const [checkedState, setCheckedState] = useState(initialCheckedState);

  useEffect(() => {
    setTime(initialStartTime);
  }, [initialStartTime]);

  useEffect(() => {
    setTotalTime(initialTotalTime);
  }, [initialTotalTime]);

  useEffect(() => {
    setCheckedState(initialCheckedState);
  }, [initialCheckedState]);

  const handleTimeChange = (value: Time) => {
    setTime(value);
    calculateTotalTime(value);
  };

  const handleCheckedChange = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    onUpdate(id, time, totalTime, newCheckedState);
  };

  const calculateTotalTime = (start: Time) => {
    let totalMinutes = start.hour * 60 + start.minute;

    const totalMinutesInHundredths = (totalMinutes / 60) * 100;
    const centhHours = Math.floor(totalMinutesInHundredths / 100);
    const centhMinutes = totalMinutesInHundredths % 100;
    const totalTimesCenthFormatted = `${centhHours}:${centhMinutes
      .toFixed(0)
      .padStart(2, "0")}`;
    setTotalTime(totalTimesCenthFormatted);
    onUpdate(id, start, totalTimesCenthFormatted, checkedState);
  };

  return (
    <TableRow>
      <TableCell>
        <Hour value={time} onChange={handleTimeChange} />
      </TableCell>
      <TableCell>{totalTime}</TableCell>
      <TableCell className="flex items-center justify-center">
        <Checkbox
          checked={checkedState}
          onCheckedChange={handleCheckedChange}
        />
        <Trash2
          className="cursor-pointer ml-1 mb-[2px]"
          size={20}
          color="#fc3535"
          onClick={() => onRemove(id)}
        />
      </TableCell>
    </TableRow>
  );
}
