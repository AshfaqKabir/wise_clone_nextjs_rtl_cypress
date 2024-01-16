import { DropdownItem } from "@nextui-org/react";

export default function FeesRateDropdown({ title, rate, description }) {
  return (
    <DropdownItem key="Low cost transfer fees" className="px-[16px] py-[12px]">
      <div className="flex justify-between items-center">
        <h4 className="text-[#0E0F0C] text-[16px] leading-[24px] tracking-[-0.24px]">
          Low cost transfer fees {title}
        </h4>
        <span className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px] mx-[4px]">
          - 4.49 GBP {rate} fee
        </span>
      </div>
      <div className="text-[#454745] text-[14px] leading-[21.7px] tracking-[-0.08px]">
        Send money from your bank account {description}
      </div>
    </DropdownItem>
  );
}
