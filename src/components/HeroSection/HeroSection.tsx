import { wiseSans } from "../../fonts";
import PrimaryButton from "../../utils/buttons/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="lg:pt-[96px] md:pt-[72px] max-sm:pt-[48px] pb-[40px]">
      {/* HERO TITLE */}
      <div className="lg:max-w-[1100px] md:max-w-[750px] max-sm:max-w-[350px] mx-auto lg:px-[32px]">
        <h1
          className={`${wiseSans.className} text-[#0E0EF0C] lg:text-[102px] md:text-[56px] max-sm:text-[48px] lg:leading-[88px] md:leading-[48px] max-sm:leading-[42px] font-black text-center mb-[32px]`}
        >
          Save when you send worldwide
        </h1>
        {/* HERO SUBTITLE */}
        <div className="lg:max-w-[527px] md:max-w-[420px] max-sm:max-w-[330px] lg:mb-[32px] md:mb-[28px] max-sm:mb-[40px] mx-auto">
          <p className="text-center text-[#454745] lg:text-[20px] md:text-[18px] max-sm:text-[17px] lg:leading-[28px] md:leading-[26px] max-sm:leading-[26px] lg:tracking-[0.1px] md:tracking-[0.09px] max-sm:tracking-[0.08px]">
            Get your money moving internationally. Save up to 5x when you send
            with Wise.
          </p>
        </div>
        {/* HERO CTA */}
        <div className="lg:max-w-[1100px] lg:mb-[40px] flex lg:justify-center md:justify-center max-sm:flex-col">
          <PrimaryButton
            big
            link={"/send-money"}
            text={"Send money now"}
            className="mr-[8px] max-sm:m-[8px]"
          />
          <PrimaryButton
            big
            link={"/send-money"}
            text={"Open an account"}
            className="bg-[white] max-sm:m-[8px] max-sm:mt-[4px]"
          />
        </div>
        {/* HERO VIDEO */}
        <div className="max-w-[75%] mx-auto mt-[24px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://wise.com/static-assets/app/_next/static/media/poster.ff25224b.jpg"
          >
            <source
              src={
                "https://wise.com/static-assets/app/_next/static/media/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm"
              }
              type="video/webm"
            />
            <source
              src={
                "https://wise.com/static-assets/app/_next/static/media/3d-globe-cfe618f7f706583422789cd9773a062a.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
