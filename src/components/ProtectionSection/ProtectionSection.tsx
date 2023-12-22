import { AiOutlineBank } from "react-icons/ai";
import { RiKeyLine } from "react-icons/ri";

export default function ProtectionSection() {
  return (
    <section className="lg:max-w-[1100px] md:max-w-[755px] max-sm:max-w-[315px] mx-auto lg:py-[96px] md:py-[72px] max-sm:py-[48px]">
      <hr className="mb-[40px] border-[#E1E1E1]" />
      <div className="flex justify-around items-center max-sm:flex-col max-sm:justify-normal">
        {/* ICONS */}
        <div className="flex items-center p-[12px] max-sm:p-[0px] max-sm:mb-[28px]">
          <div className="flex justify-center items-center mr-[16px] rounded-[100px] bg-[#ECEFEB] p-[12px]">
            <AiOutlineBank
              size={32}
              className="max-sm:w-[24px] max-sm:h-[24px]"
            />
          </div>
          <p className="text-[#454745] lg:text-[16px] max-sm:text-[14px] lg:leading-[24px] max-md:leading-[22px] lg:tracking-[0.08px] max-md:tracking-[0.14px] font-semibold">
            {"We're regulated by the National Bank of Belgium"}
          </p>
        </div>
        <div className="flex items-center p-[12px] max-sm:p-[0px]">
          <div className="flex justify-center items-center mr-[16px] rounded-[100px] bg-[#ECEFEB] p-[12px]">
            <RiKeyLine size={32} className="max-sm:w-[24px] max-sm:h-[24px]" />
          </div>
          <p className="text-[#454745] lg:text-[16px] max-sm:text-[14px] lg:leading-[24px] max-md:leading-[22px] lg:tracking-[0.08px] max-md:tracking-[0.14px] font-semibold">
            We protect your details through{" "}
            <span className="font-bold underline underline-offset-4">
              {" "}
              strict standards
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
