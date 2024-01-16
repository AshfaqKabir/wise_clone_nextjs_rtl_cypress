"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  Button,
  DropdownItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function CustomInput({ label }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <>
      <label
        htmlFor="rate calculator label"
        className="text-[#454745] text-[14px] leading-[20px] tracking-[-0.108px] mb-[4px]"
      >
        {label}
      </label>
      <div className="rounded-[10px] border-[2px] border-[#000] w-[100%] h-[72px] flex justify-center items-center">
        <input
          type="number"
          className="w-[100%] h-[100%] px-[16px] py-[12px] rounded-[10px] focus-within:border-[#000]"
        />
        {/* <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          // @ts-ignore
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="text">Text</DropdownItem>
          <DropdownItem key="number">Number</DropdownItem>
          <DropdownItem key="date">Date</DropdownItem>
          <DropdownItem key="single_date">Single Date</DropdownItem>
          <DropdownItem key="iteration">Iteration</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      </div>
    </>
  );
}
