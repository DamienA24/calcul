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

export default function TableHours() {
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
          <SlotTime />
        </TableBody>
        <TableFooter>
          <TableRow className="bg-background hover:bg-background">
            <TableCell colSpan={4}>
              <Button>Ajouter une ligne</Button>
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
