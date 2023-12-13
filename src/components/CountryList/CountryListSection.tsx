import PrimaryButton from "../../utils/buttons/PrimaryButton";
import CountryList from "./CountryList";

export default async function CountryListSection() {
  const res = await fetch(
    "https://3000-ashfaqkabir-wiseclonene-ompr42rkw2z.ws-us106.gitpod.io/api"
  );
  const countryData = await res.json();

  return (
    <section className="bg-[#ecefeb] lg:py-[96px] md:py-[72px] max-sm:py-[48px]">
      <div className="lg:max-w-[1100px] md:max-w-[752px] max-sm:max-w-[345px] mx-auto  ">
        {/* Section Heading */}
        <div>
          <h2 className="color-[#0E0F0C] lg:text-[44px] md:text-[36px] max-sm:text-[32px] lg:leading-[57px] max-sm:leading-[36px] lg:tracking-[-1.32px] md:tracking-[-1.11px] max-sm:tracking-[-1px] font-semibold lg:mb-[24px] md:mb-[20px] max-sm:mb-[22px]">
            Wise works nearly everywhere
          </h2>
          <PrimaryButton text="Send money" link="/send-money" />
        </div>
        {/* Country List */}
        <div className="mt-[56px]">
          <ul className="grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-1">
            {countryData &&
              countryData.map(({ imgSrc, link, name }, i: number) => {
                return (
                  <CountryList key={i} src={imgSrc} link={link} name={name} />
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}
