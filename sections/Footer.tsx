import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/NaK8/",
  },
  {
    title: "X",
    href: "https://x.com/_hulk21",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nabeelk100/",
  },
];

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="z-10 flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024 All rights reserved</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={crypto.randomUUID()}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
