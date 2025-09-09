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
  label?: string;
  onUpdate: (
    id: number,
    time: Time,
    totalTime: string,
    checked: boolean,
    label?: string
  ) => void;
  onRemove: (id: number) => void;
  isDisabled?: boolean;
};
export default function SlotConvertHour({
  id,
  time: initialStartTime,
  totalTime: initialTotalTime,
  onUpdate,
  onRemove,
  checked: initialCheckedState,
  indexRow,
  label = `Ligne ${indexRow + 1}`,
  isDisabled = false,
}: SlotTimeProps) {
  const [time, setTime] = useState<Time>(initialStartTime);
  const [totalTime, setTotalTime] = useState(initialTotalTime);
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  const [labelValue, setLabelValue] = useState(label);

  useEffect(() => {
    setTime(initialStartTime);
  }, [initialStartTime]);

  useEffect(() => {
    setTotalTime(initialTotalTime);
  }, [initialTotalTime]);

  useEffect(() => {
    setCheckedState(initialCheckedState);
  }, [initialCheckedState]);

  const handleTimeChange = (value: TimeValue) => {
    const newValue = new Time(value.hour, value.minute);
    setTime(newValue);
    calculateTotalTime(newValue);
  };

  const handleCheckedChange = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    onUpdate(id, time, totalTime, newCheckedState, labelValue);
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    setLabelValue(newLabel);
    onUpdate(id, time, totalTime, checkedState, newLabel);
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
    onUpdate(id, start, totalTimesCenthFormatted, checkedState, labelValue);
  };

  return (
    <TableRow>
      <TableCell className="min-w-[100px]">
        <input
          type="text"
          value={labelValue}
          onChange={handleLabelChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          placeholder="Entrez un label"
        />
      </TableCell>
      <TableCell>
        <Hour value={time} onChange={handleTimeChange} />
      </TableCell>
      <TableCell className="text-center">{totalTime}</TableCell>
      <TableCell className="flex items-center justify-center">
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
