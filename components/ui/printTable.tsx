import React, { forwardRef } from "react";
import { Time } from "@internationalized/date";

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
      <div ref={ref} className="printable">
        <table className="w-[600px] mx-auto">
          <caption>Vos heures de travail</caption>
          <thead>
            <tr>
              <th className="w-[125px]">Heure début</th>
              <th className="w-[125px]">Heure fin</th>
              <th className="w-[125px]">Heure en hh:mm</th>
              <th className="w-[125px]">Heure en 1/100</th>
            </tr>
          </thead>
          <tbody>
            {slotsData.map((slot) => (
              <tr key={slot.id}>
                <td className="text-center">{slot.startTime.toString()}</td>
                <td className="text-center">{slot.endTime.toString()}</td>
                <td className="text-center">{slot.totalTime}</td>
                <td className="text-center">{slot.totalTimeCenth}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-muted/100 font-bold">
            <tr>
              <td className="text-center" colSpan={2}>
                Heure Total
              </td>
              <td className="text-center">{totalTime}</td>
              <td className="text-center">{totalTimeCenth}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
);

export default PrintableTable;
