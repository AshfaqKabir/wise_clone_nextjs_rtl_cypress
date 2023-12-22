interface SecuritySectionListProps {
  icon: React.ReactNode;
  description: string;
}

export default function SecuritySectionList({
  icon,
  description,
}: SecuritySectionListProps) {
  return (
    <div className="max-sm:mb-[40px]">
      <div className="flex justify-center items-center max-sm:flex-col lg:w-[88px] lg:h-[88px] w-[65px] h-[65px] mb-[16px] bg-[#ECEFEB] rounded-[50%] ">
        {icon}
      </div>
      <p className="lg:max-w-[324px] md:max-w-[218px] max-sm:max-w-[335px] text-[#454745] lg:text-[18px] md:text-[16px] max-sm:text-[15px] lg:leading-[26px] leading-[24px] lg:tracking-[0.18px] md:tracking-[0.08px] max-sm:tracking-[0.0.75px] font-semibold">
        {description}
      </p>
    </div>
  );
}
