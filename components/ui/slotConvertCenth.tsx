"use client";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

import CentiTimeInput from "./centiTimeInput";

type SlotTimeProps = {
  id: number;
  totalTimeCenth: string;
  totalTime: string;
  checked: boolean;
  indexRow: number;
  label?: string;
  onUpdate: (
    id: number,
    totalTimeCenth: string,
    totalTime: string,
    checked: boolean,
    label?: string
  ) => void;
  onRemove: (id: number) => void;
};

export default function SlotConvertCenth({
  id,
  totalTimeCenth: initialTotalTimeCenth,
  totalTime: initialTotalTime,
  onUpdate,
  onRemove,
  checked: initialCheckedState,
  indexRow,
  label = `Ligne ${indexRow + 1}`,
}: SlotTimeProps) {
  const [totalTime, setTotalTime] = useState(initialTotalTime);
  const [totalTimeCenth, setTotalTimeCenth] = useState(initialTotalTimeCenth);
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  const [labelValue, setLabelValue] = useState(label);

  const handleCheckedChange = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    onUpdate(id, totalTimeCenth, totalTime, newCheckedState, labelValue);
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    setLabelValue(newLabel);
    onUpdate(id, totalTimeCenth, totalTime, checkedState, newLabel);
  };

  const calculateTotalTime = (totalTime: String) => {
    const [centhHours, centhMinutes] = totalTime.split(":").map(Number);

    const totalMinutesFromCentiemes = (centhMinutes * 60) / 100;
    const totalMinutes = centhHours * 60 + totalMinutesFromCentiemes;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    const totalTimesCenthFormatted = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    setTotalTime(totalTimesCenthFormatted);
    onUpdate(id, totalTimeCenth, totalTimesCenthFormatted, checkedState);
  };

  const handleInputChange = (id: number, newValue: string) => {
    const newTimes = newValue;
    setTotalTimeCenth(newTimes);
    calculateTotalTime(newTimes);
  };

  return (
    <TableRow>
      <TableCell>
        <CentiTimeInput
          key={id}
          value={totalTimeCenth}
          onChange={(newValue) => handleInputChange(id, newValue)}
        />{" "}
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
