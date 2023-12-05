import Link from "next/link";

type topFooterLinkProps = {
  name: string;
  link: string;
};

export default function FirstFooterLink({ name, link }: topFooterLinkProps) {
  return (
    <li>
      <Link
        href={link}
        className="underline underline-offset-4 font-regular text-[14px] text-[#454745] leading-[18px] tracking-[-0.084px] hover:underline-offset-2 ease-[cubic-bezier(.09,.97,.25,1)] duration-300"
      >
        {name}
      </Link>
    </li>
  );
}
