import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function PopoverInfo() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <li className="hover:cursor-pointer border-0 p-[2px] text-[#163300] text-[16px] leading-[26px] tracking-[-0.224px] font-semibold underline">
          Guaranteed Rate (41hr)
        </li>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] p-[24px] items-start">
        <div>
          <h4 className="text-[#0E0F0C] text-[18px] leading-[24.3px] tracking-[-0.2px] font-semibold mb-[8px]">
            Guaranteed rate
          </h4>
          <p className="mb-[2px] text-[#454745] text-[14px] leading-[26px] tracking-[-0.1px]">
            You’ll get this rate as long as we receive your 1,000 GBP within the
            next 2 hours.
          </p>
          <a
            href=""
            className="text-[14px] leading-[26px] tracking-[-0.1px] font-bold underline"
          >
            Learn More
          </a>
        </div>
        {/* <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div> */}
      </PopoverContent>
    </Popover>
  );
}
