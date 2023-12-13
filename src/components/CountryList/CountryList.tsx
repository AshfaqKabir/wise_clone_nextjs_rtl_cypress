import Image from "next/image";
import Link from "next/link";

export default function CountryList({ src, link, name }) {
  return (
    <li className="mb-[32px] lg:pr-[56px] md:pr-[48px] max-sm:flex">
      <div className="max-sm:mr-[20px]">
        <Image src={src} alt="Country Flag" width={48} height={48} />
      </div>
      <div className="mt-[24px] max-sm:my-auto mb-[8px]">
        <Link
          href={link}
          className="text-[#0D1F00] lg:text-[16px] md:text-[14px] max-sm:text-[14px] leading-[24px] lg:tracking-[0.08px] md:tracking-[0.14px] font-semibold underline underline-offset-4 hover:underline-offset-2 ease-[cubic-bezier(.09,.97,.25,1)] duration-300"
        >
          {name}
        </Link>
      </div>
    </li>
  );
}
