"use client";

import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";

import { IoIosArrowDown } from "react-icons/io";
import FeesRateDropdown from "./FeesRateDropdown";

export default function FeesRate() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set(["Low cost transfer fee"])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="border-0 p-[2px] text-[#163300] text-[16px] leading-[26px] tracking-[-0.224px] font-semibold underline"
        >
          {selectedValue}
          <IoIosArrowDown className="mt-[5px] ml-[-3px]" />
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
        className="w-[335px] rounded-[10px] p-[8px]"
      >
        <DropdownSection title="Transfer types" className="">
          <DropdownItem
            key="Low cost transfer fees"
            className="px-[16px] py-[12px]"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[#0E0F0C] text-[16px] leading-[24px] tracking-[-0.24px]">
                Low cost transfer fees
              </h4>
              <span className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px] mx-[4px]">
                - 4.49 GBP fee
              </span>
            </div>
            <div className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px]">
              Send money from your bank account
            </div>
          </DropdownItem>
          <DropdownItem
            key="Fast and easy transfer"
            className="px-[16px] py-[12px]"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[#0E0F0C] text-[16px] leading-[24px] tracking-[-0.24px]">
                Fast and easy transfer
              </h4>
              <span className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px] mx-[4px]">
                - 8.86 GBP fee
              </span>
            </div>
            <div className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px]">
              Send money from your debit or credit card
            </div>
          </DropdownItem>
          <DropdownItem key="Advance transfer" className="px-[16px] py-[12px]">
            <div className="flex justify-between items-center">
              <h4 className="text-[#0E0F0C] text-[16px] leading-[24px] tracking-[-0.24px]">
                Advance transfer
              </h4>
              <span className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px] mx-[4px]">
                - 4.49 GBP fee
              </span>
            </div>
            <div className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px]">
              Send from your GBP balance outside the UK
            </div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
