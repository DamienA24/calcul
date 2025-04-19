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

import SlotConvertCenth from "./slotConvertCenth";

import { Time } from "@internationalized/date";
import PrintableTableConvertCenth from "./printTableConvertCenth";

type SlotData = {
  id: number;
  totalTimeCenth: string;
  totalTime: string;
  checked: boolean;
};

export default function TableConvertCenth() {
  const [slots, setSlots] = useState<SlotData[]>([
    {
      id: Date.now(),
      totalTimeCenth: "00:00",
      totalTime: "00:00",
      checked: true,
    },
  ]);
  const [slotsToPrint, setSlotsToPrint] = useState<SlotData[]>([]);
  const [totalTimeCenth, setTotalTimeCenth] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [documentType, setDocumentType] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "centiemes-converties",
  });

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "centiemes-converties.pdf",
    page: { margin: Margin.MEDIUM },
  });

  const addSlot = () => {
    setSlots([
      ...slots,
      {
        id: Date.now(),
        totalTime: "00:00",
        totalTimeCenth: "00:00",
        checked: true,
      },
    ]);
  };

  const removeSlot = (id: number) => {
    const newSlot = slots.filter((slot) => slot.id !== id);
    setSlots(newSlot);
    setSlotsToPrint(newSlot);
    calculateTotalTime(newSlot);
  };

  const updateSlot = (
    id: number,
    totalTimeCenth: string,
    totalTime: string,
    checked: boolean
  ) => {
    const newSLots = slots.map((slot) =>
      slot.id === id ? { ...slot, totalTime, totalTimeCenth, checked } : slot
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
        const [hour, minute] = slot.totalTime.split(":").map(Number);
        totalMinutes += hour * 60 + minute;
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

    const totalTimesCenthFormatted = `${
      centhHours == 0 ? "00" : centhHours
    }:${centhMinutes.toFixed(0).padStart(2, "0")}`;

    setTotalTimeCenth(totalTimesCenthFormatted);
    setTotalTime(totalTimesFormatted);
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
      <Table className="w-[375px] mx-auto">
        <TableCaption>Vos heures de travail</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[125px]">Heure en 1/100</TableHead>
            <TableHead className="w-[125px]">Heure en hh:mm</TableHead>
            <TableHead className="w-[125px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot, index) => (
            <SlotConvertCenth
              key={index}
              id={slot.id}
              totalTimeCenth={slot.totalTimeCenth}
              totalTime={slot.totalTime}
              checked={slot.checked}
              onUpdate={updateSlot}
              onRemove={removeSlot}
              indexRow={index}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-background hover:bg-background">
            <TableCell colSpan={3}>
              <Button onClick={addSlot} className="h-[30px]">
                Ajouter une ligne
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{totalTimeCenth}</TableCell>
            <TableCell>{totalTime}</TableCell>
            <TableCell className="flex justify-center">
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
        <PrintableTableConvertCenth
          ref={documentType === "print" ? printRef : targetRef}
          totalTime={totalTime}
          slotsData={slotsToPrint}
          totalTimeCenth={totalTimeCenth}
        />
      </div>
    </div>
  );
}
