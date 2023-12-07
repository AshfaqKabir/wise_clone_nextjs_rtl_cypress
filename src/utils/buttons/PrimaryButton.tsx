import { Button } from "@nextui-org/react";
import Link from "next/link";

interface PrimaryButtonProps {
  big?: boolean;
  link: string;
  text: string;
}

export default function PrimaryButton({ big, link, text }: PrimaryButtonProps) {
  return big ? (
    <Button
      className="px-[24px] py-[11px] color-[#163300] bg-[#9fe870] text-[16px] font-semibold leading-[24px] 
    border-[1px] rounded-[9999px] border-[#9fe870] min-h-[32px] transition-colors ease-in-out duration-[0.15s] hover:bg-[#80E142] hover:border-[#80E142]"
    >
      <Link href={link}>{text}</Link>
    </Button>
  ) : (
    <Button
      className="px-[16px] py-[3px] color-[#163300] bg-[#9fe870] text-[15px] font-semibold leading-[24px] 
    border-[1px] rounded-[16px] border-[#9fe870] min-h-[24px] h-[auto] transition-colors ease-in-out duration-[0.15s] hover:bg-[#80E142] hover:border-[#80E142]"
    >
      <Link href={link}>{text}</Link>
    </Button>
  );
}
