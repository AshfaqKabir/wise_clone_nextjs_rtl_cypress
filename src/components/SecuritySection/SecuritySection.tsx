import Image from "next/image";
import Lock from "../../../public/lock-large.webp";
import PrimaryButton from "../../utils/buttons/PrimaryButton";
import SecuritySectionList from "./SecuritySectionList";

import { CiLock } from "react-icons/ci";
import { AiOutlineBank } from "react-icons/ai";
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { RiPhoneLockLine } from "react-icons/ri";

export default function SecuritySeciton() {
  return (
    <section className="lg:max-w-[1100px] md:max-w-[752px] max-sm:max-w-[375px] mx-auto py-[154px] max-sm:py-[96px]">
      {/* First ROW */}
      <div className="flex justify-between items-center max-sm:flex-col-reverse mb-[48px]">
        <div>
          <h2 className="mb-[32px] text-[#0E0F0C] max-sm:text-center lg:text-[58px] md:text-[42px] max-sm:text-[40px] lg:leading-[82px] md:leading-[46px] max-sm:leading-[46px] lg:tracking-[-1.7px] md:tracking-[-1.2px] max-sm:tracking-[-1.19px] font-semibold">
            Disappoint thieves
          </h2>
          <p className="lg:max-w-[451px] md:max-w-[393px] max-sm:max-w-[343px] text-[#454745] lg:text-[20px] md:text-[18px] max-sm:text-[17px] lg:leading-[28px] md:leading-[26px] max-sm:leading-[26px] lg:tracking-[0.1px] md:tracking-[0.09px] max-sm:tracking-[0.08px] mb-[24px]">
            Every month, our customers trust us to move around £9 billion of
            their money. Here are some of the important ways we protect them.
          </p>
          <PrimaryButton
            big
            link="/"
            text="How we keep your money safe"
            className="mt-[16px]"
          />
        </div>
        <div className="max-sm:mb-[32px]">
          <Image src={Lock} alt="This an Lock Image" width={310} height={310} />
        </div>
      </div>
      {/* SECOND ROW */}
      <div className="flex justify-between items-center max-sm:flex-col">
        <SecuritySectionList
          icon={
            <CiLock className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]" />
          }
          description="Our dedicated fraud and security teams work to keep your money safe"
        />
        <SecuritySectionList
          icon={
            <RiPhoneLockLine className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]" />
          }
          description="We use 2-factor authentication to protect your account"
        />
        <SecuritySectionList
          icon={
            <AiOutlineBank className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]" />
          }
          description="We hold your money with established financial institutions"
        />
      </div>
    </section>
  );
}
