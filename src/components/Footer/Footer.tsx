import FirstFooter from "./FirstFooter/FirstFooter";
import SecondFooter from "./SecondFooter/SecondFooter";

export default function Footer() {
  return (
    <footer className="bg-[#ecefeb] ">
      <div className="max-w-[1164px] mx-auto min-h-[100vh] pt-[160px] pb-[80px] px-[32px]">
        <FirstFooter />
        <hr className="mt-[24px] mb-[32px] border-[#D0D3D0]" />
        <SecondFooter />
      </div>
    </footer>
  );
}
