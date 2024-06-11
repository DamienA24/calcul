import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Hour from "./time";

export default function TableHours() {
  return (
    <div>
      <Table className="w-[420px] mx-auto	">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Heure début</TableHead>
            <TableHead className="w-[100px]">Heure fin</TableHead>
            <TableHead className="w-[100px]">Heure en hh:mm</TableHead>
            <TableHead className="w-[100px]">Heure en 1/100</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <Hour />
            </TableCell>
            <TableCell>
              <Hour />
            </TableCell>
            <TableCell>00:00</TableCell>
            <TableCell>00:00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
