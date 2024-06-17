import React, { forwardRef } from "react";
import { Time } from "@internationalized/date";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

type SlotData = {
  id: number;
  totalTime: string;
  totalTimeCenth: string;
  checked: boolean;
};

interface PrintableTableProps {
  slotsData: SlotData[];
  totalTimeCenth: string;
  totalTime: string;
}

const PrintableTableConvertCenth = forwardRef<
  HTMLDivElement,
  PrintableTableProps
>(({ slotsData, totalTimeCenth, totalTime }, ref) => {
  return (
    <div ref={ref} className="printable p-4">
      <Table className="w-[300px] mx-auto border border-gray-200">
        <TableCaption className="my-10 font-bold text-xl">
          Heures en hh:mm
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[150px] text-center">
              Heure en 1/100{" "}
            </TableCell>
            <TableCell className="w-[150px] text-center">
              Heure en hh:mm
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slotsData.map((slot) => (
            <TableRow key={slot.id}>
              <TableCell className="text-center">
                {slot.totalTimeCenth}
              </TableCell>
              <TableCell className="text-center">{slot.totalTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-gray-200 font-bold">
            <TableCell className="text-center">{totalTimeCenth}</TableCell>
            <TableCell className="text-center">{totalTime}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
});

export default PrintableTableConvertCenth;
