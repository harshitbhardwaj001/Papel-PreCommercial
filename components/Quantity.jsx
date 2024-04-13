import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "./ui/scroll-area";

const Quantity = ({ item }) => {
  return (
    <Select className="">
      <SelectTrigger className="w-[70px] h-[1.5rem] py-0 px-[0.3rem]">
        <SelectValue placeholder={`Qty: ${item.quantity}`} />
      </SelectTrigger>
      <SelectContent className="bg-[#fff]">
        <ScrollArea className="h-32 rounded-md">
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="11">11</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="13">13</SelectItem>
          <SelectItem value="14">14</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="16">16</SelectItem>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
};

export default Quantity;
