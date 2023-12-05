import Image from "next/image";

import SecondFooterLink from "./SecondFooterLink";
import Wise from "../../../../public/wise.svg";
import Link from "next/link";

export default function SecondFooter() {
  return (
    <div className="grid lg:grid-cols-4 mb-[52px]">
      <div>
        <Link href="/">
          <Image src={Wise} alt="Wise Company Logo" className="mt-[10px]" />
        </Link>
      </div>
      <div>
        <ul>
          <SecondFooterLink link="/" name="Legal" />
          <SecondFooterLink link="/" name="Complaints" />
        </ul>
      </div>
      <div>
        <ul>
          <SecondFooterLink link="/" name="Privacy policy" />
          <SecondFooterLink link="/" name="Country site map" />
        </ul>
      </div>
      <div>
        <ul>
          <SecondFooterLink link="/" name="Cookie Policy" />
          <SecondFooterLink link="/" name="Modern slavery statement" />
        </ul>
      </div>
    </div>
  );
}
