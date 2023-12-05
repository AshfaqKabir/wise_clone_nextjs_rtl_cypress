import FirstFooter from "./FirstFooter/FirstFooter";
import SecondFooter from "./SecondFooter/SecondFooter";
import ThirdFooter from "./ThirdFooter/ThirdFooter";

export default function Footer() {
  return (
    <footer className="bg-[#ecefeb]">
      <div className="max-w-[1164px] mx-auto min-h-[100vh] pt-[160px] pb-[72px] px-[32px]">
        <FirstFooter />
        <hr className="mt-[24px] mb-[32px] border-[#D0D3D0]" />
        <SecondFooter />
        <ThirdFooter />
      </div>
    </footer>
  );
}
