interface RateListProps {
  className?: string;
  sign?: string;
  amount: string;
  component: string | JSX.Element;
}

export default function RateList({
  className,
  sign,
  amount,
  component,
}: RateListProps) {
  return (
    <li
      className={`flex items-center text-[16px] leading-[26px] tracking-[-0.01px] ${className} `}
    >
      <span className="flex justify-center items-center my-[4px] pb-[2px] w-[16px] h-[16px] bg-[#ECEFEB] text-[14px] text-[#0e0f0c] rounded-[999%] font-bold">
        <span className="">{sign}</span>
      </span>
      <div className="pl-[12px] flex justify-between items-center w-[100%]">
        <span className="pr-[12px] text-[#0E0F0C] font-semibold">{amount}</span>
        <div className=" text-[#454745] text-right">{component}</div>
      </div>
    </li>
  );
}
