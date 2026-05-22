"use client";
import dynamic from "next/dynamic";

const TableHours = dynamic(() => import("@/components/ui/tableHours"), { ssr: false });
export default TableHours;
