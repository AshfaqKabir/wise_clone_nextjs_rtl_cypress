import FirstFooter from "./FirstFooter/FirstFooter";

export default function Footer() {
  const firstFooterLinks = [
    {
      name: "Company and team",
      link: "/",
    },
    {
      name: "Security",
      link: "/",
    },
    {
      name: "Press",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Service Status",
      link: "/",
    },
    {
      name: "Investor relations",
      link: "/",
    },
    {
      name: "Mission roadmap",
      link: "/",
    },
    {
      name: "Affiliates and partnerships",
      link: "/",
    },
    {
      name: "Help centre",
      link: "/",
    },
    {
      name: "Reviews",
      link: "/",
    },
    {
      name: "Accessibility",
      link: "/",
    },
  ];

  const secondFooterLinks = [
    {
      name: "International money transfers",
      link: "/",
    },
    {
      name: "Wise account",
      link: "/",
    },
    {
      name: "International debit card",
      link: "/",
    },
    {
      name: "Travel money card",
      link: "/",
    },
    {
      name: "Large amount transfer",
      link: "/",
    },
    {
      name: "Receive money",
      link: "/",
    },
    {
      name: "Assets",
      link: "/",
    },
    {
      name: "Wise Platform",
      link: "/",
    },
    {
      name: "Wise Business",
      link: "/",
    },
    {
      name: "Business debit card",
      link: "/",
    },
    {
      name: "Mass payments",
      link: "/",
    },
  ];

  return (
    <footer className="bg-[#ecefeb] ">
      <div className="max-w-[1164px] mx-auto min-h-[100vh] pt-[160px] pb-[80px] px-[32px]">
        <FirstFooter />
      </div>
    </footer>
  );
}
