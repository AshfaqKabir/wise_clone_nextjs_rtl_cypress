import Link from "next/link";

export default function SocialLinks({ link, icon }) {
  return (
    <Link href={link} className="mr-[16px]">
      {icon}
    </Link>
  );
}
