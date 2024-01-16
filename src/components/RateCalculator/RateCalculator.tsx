import PrimaryButton from "../../utils/buttons/PrimaryButton";
import CustomInput from "./CustomInput";
import FeesRate from "./FeesRateDropdown/FeesRate";
import PopoverInfo from "./PopoverInfo";
import RateList from "./RateList";

export default function RateCalculator() {
  return (
    <div className="w-[445px] h-[575px]">
      <div
        className={`bg-[url('https://wise.com/static-assets/app/_next/static/media/tapestry-3.ceefa502.svg')] w-[100%] h-[100%] bg-cover bg-center bg-no-repeat rounded-[32px] `}
      >
        <div
          className="bg-[#fff] h-[96%] rounded-[32px] p-[32px]"
          data-tracking-id="calculator"
          data-testid="calculator"
        >
          {/* CUSTOM INPUT BOX */}
          <CustomInput label={"You send exactly"} />
          {/* Fees and Rate */}
          <ul className="my-[24px]">
            {/* <li className="flex items-center text-[16px] leading-[26px] tracking-[-0.01px]">
              <span className="flex justify-center items-center my-[4px] pb-[2px] w-[16px] h-[16px] bg-[#ECEFEB] text-[14px] text-[#0e0f0c] rounded-[999%] font-bold">
                <span className="">-</span>
              </span>
              <div className="pl-[12px] flex justify-between items-center w-[100%]">
                <span className="pr-[12px] text-[#0E0F0C] font-semibold">
                  4.49 GBP
                </span>
                <div className=" text-[#454745] text-right">
                  <FeesRate />
                </div>
              </div>
            </li> */}
            <RateList sign={"-"} amount={"4.49 GBP"} component={<FeesRate />} />
            <RateList
              sign={"="}
              amount={"95.51 GBP "}
              className={"mt-[8px]"}
              component={"Total amount we’ll convert"}
            />
            <RateList
              sign={"×"}
              amount={"1.16463"}
              className={"mt-[8px]"}
              component={<PopoverInfo />}
            />
          </ul>
          {/* CUSTOM INPUT BOX */}
          <CustomInput label={"Recipient gets"} />

          {/* Info Part */}
          <div className="mt-[24px] text-[#454745]">
            <p>
              You could save up to
              <span className="font-semibold"> 0.21 USD</span>
            </p>
            <p>
              Should arrive <span className="font-semibold"> by Wednesday</span>
            </p>
          </div>

          {/* CTA Part */}
          <div className="mt-[24px] flex items-center">
            <div className="">
              <PrimaryButton big link="/" text="Compare Price" />
            </div>
            <div className="mx-[16px]">
              <PrimaryButton
                big
                link="/"
                text="Get Started"
                className="bg-[white]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
