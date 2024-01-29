import PrimaryButton from "../../utils/buttons/PrimaryButton";
import CustomInput from "./CustomInput";
import FeesRate from "./FeesRateDropdown/FeesRate";
import PopoverInfo from "./PopoverInfo";
import RateList from "./RateList";

export default function RateCalculator() {
  return (
    <div className="w-[445px] h-[575px] max-sm:w-[350px] max-sm:mt-[40px]">
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
