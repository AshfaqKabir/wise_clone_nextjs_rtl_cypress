import Image from "next/image";
import WorldFloat from "../../../public/worldFloat.webp";
import { wiseSans } from "../../fonts";
import PrimaryButton from "../../utils/buttons/PrimaryButton";

export default function OurMission() {
  return (
    <section className="lg:max-w-[1300px] md:max-w-[720px] mx-[40px] max-sm:mx-[20px] my-[64px] lg:py-[96px] md:py-[72px] max-sm:py-[48px] bg-[#163300] rounded-[56px]">
      <div className="flex justify-center items-center">
        <Image
          src={WorldFloat}
          alt="Image"
          className="lg:mt-[-170px] md:mt-[-190px] max-sm:mt-[-90px]"
        />
      </div>

      {/* TITLE */}
      <div className="text-center lg:max-w-[850px] md:max-w-[555px] max-sm:max-w-[310px] mx-auto lg:my-[32px] mt-[32px] mb-[16px]">
        <h2
          className={`${wiseSans.className} text-[#9FE870] lg:text-[102px] md:text-[56px] max-sm:text-[48px] lg:leading-[88px] md:leading-[48px] max-sm:leading-[42px] font-black`}
        >
          Meet money without borders
        </h2>
      </div>

      {/* PARA */}
      <div className="lg:max-w-[750px] md:max-w-[410px] max-sm:max-w-[270px] mx-auto mb-[40px] text-center">
        <p className="text-[#E8EBE6] lg:text-[24px] md:text-[20px] max-sm:text-[18px] lg:leading-[32px] max-md:leading-[28px] lg:tracking-[-0.3px] md:tracking-[-0.2px] max-sm:tracking-[-0.18px] font-semibold">
          Our dream is for people to live and work anywhere seamlessly. That
          means money without borders: moving it instantly, transparently,
          conveniently, and — eventually — for free.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center">
        <PrimaryButton big link="/" text="Learn about our mission" />
      </div>
    </section>
  );
}
