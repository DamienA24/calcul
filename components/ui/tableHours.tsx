"use client";

import { useState, useRef, useEffect } from "react";

import { Printer, Download } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { usePDF, Margin } from "react-to-pdf";

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
import PrintableTable from "./printTable";

type SlotData = {
  id: number;
  startTime: Time;
  endTime: Time;
  totalTime: string;
  totalTimeCenth: string;
  checked: boolean;
};

export default function TableHours() {
  const [slots, setSlots] = useState<SlotData[]>([
    {
      id: Date.now(),
      startTime: new Time(0, 0),
      endTime: new Time(0, 0),
      totalTime: "00:00",
      totalTimeCenth: "00.00",
      checked: true,
    },
  ]);
  const [slotsToPrint, setSlotsToPrint] = useState<SlotData[]>([]);

  const [totalTime, setTotalTime] = useState("00:00");
  const [totalTimeCenth, setTotalTimeCenth] = useState("0.00");
  const [documentType, setDocumentType] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "heures",
  });

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "heures.pdf",
    page: { margin: Margin.MEDIUM },
  });

  const addSlot = () => {
    setSlots([
      ...slots,
      {
        id: Date.now(),
        startTime: new Time(0, 0),
        endTime: new Time(0, 0),
        totalTime: "00:00",
        totalTimeCenth: "0.00",
        checked: true,
      },
    ]);
  };

  const removeSlot = (id: number) => {
    const newSlot = slots.filter((slot) => slot.id !== id);
    setSlots(newSlot);
    calculateTotalTime(newSlot);
  };

  const updateSlot = (
    id: number,
    startTime: Time,
    endTime: Time,
    totalTime: string,
    totalTimeCenth: string,
    checked: boolean
  ) => {
    const newSLots = slots.map((slot) =>
      slot.id === id
        ? { ...slot, startTime, endTime, totalTime, totalTimeCenth, checked }
        : slot
    );
    const slotsToPrint = newSLots.filter((slot) => slot.checked);
    setSlotsToPrint(slotsToPrint);
    setSlots(newSLots);
    calculateTotalTime(newSLots);
  };

  const calculateTotalTime = (slots: SlotData[]) => {
    let totalMinutes = 0;

    slots.forEach((slot) => {
      if (slot.checked) {
        const [hours, minutes] = slot.totalTime.split(":").map(Number);
        totalMinutes += hours * 60 + minutes;
      }
    });

    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    const totalTimesFormatted = `${totalHours
      .toString()
      .padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}`;

    const totalMinutesInHundredths = (totalMinutes / 60) * 100;
    const centhHours = Math.floor(totalMinutesInHundredths / 100);
    const centhMinutes = totalMinutesInHundredths % 100;

    const totalTimesCenthFormatted = `${centhHours}:${centhMinutes
      .toFixed(0)
      .padStart(2, "0")}`;

    setTotalTime(totalTimesFormatted);
    setTotalTimeCenth(totalTimesCenthFormatted);
  };

  const handleDocument = (type: string) => {
    setDocumentType(type);
  };

  useEffect(() => {
    if (documentType === "print") {
      handlePrint();
    } else if (documentType === "pdf") {
      toPDF();
    }
    setDocumentType(null);
  }, [documentType]);

  return (
    <div>
      <Table className=" w-[375px] mx-auto	">
        <TableCaption>Vos heures de travail</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[75px]">Heure début</TableHead>
            <TableHead className="w-[75px]">Heure fin</TableHead>
            <TableHead className="w-[75px]">Heure en hh:mm</TableHead>
            <TableHead className="w-[75px]">Heure en 1/100</TableHead>
            <TableHead className="w-[75px]">Action</TableHead>
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
              checked={slot.checked}
              onUpdate={updateSlot}
              onRemove={removeSlot}
              indexRow={index}
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
            <TableCell>{totalTime}</TableCell>
            <TableCell>{totalTimeCenth}</TableCell>
            <TableCell className="flex">
              {" "}
              <Printer
                size={20}
                className="cursor-pointer"
                onClick={() => handleDocument("print")}
              />
              <Download
                size={20}
                className="cursor-pointer ml-1"
                onClick={() => handleDocument("pdf")}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="hidden-pdf">
        <PrintableTable
          ref={documentType === "print" ? printRef : targetRef}
          slotsData={slotsToPrint}
          totalTime={totalTime}
          totalTimeCenth={totalTimeCenth}
        />
      </div>
    </div>
  );
}
