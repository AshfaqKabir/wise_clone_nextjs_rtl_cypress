import FirstFooterLink from "./FirstFooterLink";
import FirstFooterTitle from "./FirstFooterTitle";

import { firstFooter } from "../footerData.js";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function FirstFooter() {
  return (
    <div className="grid lg:grid-cols-4">
      <div>
        <FirstFooterTitle title={"Company and team"} />
        <ul>
          {firstFooter[0].map((elem, i) => (
            <FirstFooterLink key={i} name={elem.name} link={elem.link} />
          ))}
        </ul>
      </div>
      <div>
        <FirstFooterTitle title={"Wise Products"} />
        <ul>
          {firstFooter[1].map((elem, i) => (
            <FirstFooterLink key={i} name={elem.name} link={elem.link} />
          ))}
        </ul>
      </div>
      <div>
        <FirstFooterTitle title={"Resources"} />
        <ul>
          {firstFooter[2].map((elem, i) => (
            <FirstFooterLink key={i} name={elem.name} link={elem.link} />
          ))}
        </ul>
      </div>
      <div>
        <FirstFooterTitle title={"Follow Us"} />
        <ul>
          <li className="flex">
            <SocialLinks
              link={"/"}
              icon={<BsFacebook size={24} color="#454745" />}
            />
            <SocialLinks
              link={"/"}
              icon={<BsTwitter size={24} color="#454745" />}
            />
            <SocialLinks
              link={"/"}
              icon={<BsInstagram size={24} color="#454745" />}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
