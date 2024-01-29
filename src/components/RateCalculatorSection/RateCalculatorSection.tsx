import RateCalculator from "../RateCalculator/RateCalculator";

export default function RateCalculatorSection() {
  return (
    <section className="py-[154px] max-sm:py-[96px] bg-[#9FE870]">
      <div className="lg:max-w-[1100px] md:max-w-[752px] max-sm:max-w-[350px] mx-auto lg:flex md:flex max-sm:flex-col justify-between items-center">
        <div>
          <h2 className="mb-[24px] text-[#163300] lg:text-[44px] md:text-[37px] max-sm:text-[34px] lg:leading-[57px] md:leading-[41px] max-sm:leading-[41px] lg:tracking-[-1.3px] md:tracking-[-1.11px] max-sm:tracking-[-1px] font-semibold">
            Make your money move, fast
          </h2>
          <p className="lg:max-w-[455px] md:max-w-[255px] max-sm:max-w-[325px] mb-[8px] text-[#163300] lg:text-[20px] md:text-[18px] max-sm:text-[16px] lg:leading-[28px] md:leading-[26px] max-sm:leading-[26px] lg:tracking-[0.1px] md:tracking-[0.09px] max-sm:tracking-[0.085px] ">
            Send to 70+ countries, fast. Free from hidden fees and exchange rate
            markups
          </p>
        </div>

        <RateCalculator />
      </div>
    </section>
  );
}
