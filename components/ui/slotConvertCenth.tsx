"use client";
import { useState, useEffect } from "react";

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
  onUpdate: (
    id: number,
    totalTimeCenth: string,
    totalTime: string,
    checked: boolean
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
}: SlotTimeProps) {
  const [totalTime, setTotalTime] = useState(initialTotalTime);
  const [totalTimeCenth, setTotalTimeCenth] = useState(initialTotalTimeCenth);
  const [checkedState, setCheckedState] = useState(initialCheckedState);

  useEffect(() => {
    onUpdate(id, totalTimeCenth, totalTime, checkedState);
  }, [totalTimeCenth, checkedState, id, onUpdate, totalTime]);

  const handleCheckedChange = () => {
    setCheckedState(!checkedState);
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
