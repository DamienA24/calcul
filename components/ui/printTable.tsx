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
  startTime: Time;
  endTime: Time;
  totalTime: string;
  totalTimeCenth: string;
  checked: boolean;
};

interface PrintableTableProps {
  slotsData: SlotData[];
  totalTime: string;
  totalTimeCenth: string;
}

const PrintableTable = forwardRef<HTMLDivElement, PrintableTableProps>(
  ({ slotsData, totalTime, totalTimeCenth }, ref) => {
    return (
      <div ref={ref} className="printable p-4">
        <Table className="w-[600px] mx-auto border border-gray-200">
          <TableCaption className="my-10 font-bold text-xl">
            Heures de travail
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell className="w-[125px] text-center">
                Heure début
              </TableCell>
              <TableCell className="w-[125px] text-center">Heure fin</TableCell>
              <TableCell className="w-[125px] text-center">
                Heure en hh:mm
              </TableCell>
              <TableCell className="w-[125px] text-center">
                Heure en 1/100
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slotsData.map((slot) => (
              <TableRow key={slot.id}>
                <TableCell className="text-center">
                  {slot.startTime.toString()}
                </TableCell>
                <TableCell className="text-center">
                  {slot.endTime.toString()}
                </TableCell>
                <TableCell className="text-center">{slot.totalTime}</TableCell>
                <TableCell className="text-center">
                  {slot.totalTimeCenth}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-gray-200 font-bold">
              <TableCell className="text-center" colSpan={2}>
                Heure Totale
              </TableCell>
              <TableCell className="text-center">{totalTime}</TableCell>
              <TableCell className="text-center">{totalTimeCenth}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
);

PrintableTable.displayName = "PrintableTable";
export default PrintableTable;
