"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import SlotTime from "./slotTime";
import { Time } from "@internationalized/date";

type SlotData = {
  id: number;
  startTime: Time;
  endTime: Time;
  totalTime: string;
  totalTimeCenth: string;
};

export default function TableHours() {
  const [slots, setSlots] = useState<SlotData[]>([
    {
      id: Date.now(),
      startTime: new Time(0, 0),
      endTime: new Time(0, 0),
      totalTime: "00:00",
      totalTimeCenth: "0.00",
    },
  ]);

  const addSlot = () => {
    setSlots([
      ...slots,
      {
        id: Date.now(),
        startTime: new Time(0, 0),
        endTime: new Time(0, 0),
        totalTime: "00:00",
        totalTimeCenth: "0.00",
      },
    ]);
  };

  const removeSlot = (id: number) => {
    setSlots(slots.filter((slot) => slot.id !== id));
  };

  const updateSlot = (
    id: number,
    startTime: Time,
    endTime: Time,
    totalTime: string,
    totalTimeCenth: string
  ) => {
    setSlots(
      slots.map((slot) =>
        slot.id === id
          ? { ...slot, startTime, endTime, totalTime, totalTimeCenth }
          : slot
      )
    );
  };

  console.log(slots);
  return (
    <div>
      <Table className="w-[500px] mx-auto	">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Heure début</TableHead>
            <TableHead className="w-[100px]">Heure fin</TableHead>
            <TableHead className="w-[100px]">Heure en hh:mm</TableHead>
            <TableHead className="w-[100px]">Heure en 1/100</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot, index) => (
            <SlotTime
              key={index}
              id={slot.id}
              startTime={slot.startTime}
              endTime={slot.endTime}
              totalTime={slot.totalTime}
              totalTimeCenth={slot.totalTimeCenth}
              onUpdate={updateSlot}
              onRemove={removeSlot}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-background hover:bg-background">
            <TableCell colSpan={4}>
              <Button onClick={addSlot}>Ajouter une ligne</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>25:00</TableCell>
            <TableCell>25:00</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
