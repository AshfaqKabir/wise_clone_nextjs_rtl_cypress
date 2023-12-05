import Link from "next/link";

export default function SecondFooterLink({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <li className="underline underline-offset-4 my-[5px] font-medium text-[14px] text-[#0E0F0C] leading-[22px] tracking-[-0.084px] hover:underline-offset-2 ease-[cubic-bezier(.09,.97,.25,1)] duration-300">
      <Link href={link}>{name}</Link>
    </li>
  );
}
