"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { url: "#", title: "Home" },
  { url: "#projects", title: "Projects" },
  { url: "#about-me", title: "About" },
  { url: "#contact-me", title: "Contact" },
];

type NavLinksType = { url: string; title: string };

const Header = () => {
  const [active, setActive] = useState<NavLinksType | null>(navLinks[0]);
  const [hover, setHover] = useState<NavLinksType | null>(null);
  return (
    <header className="fixed top-3 z-10 flex w-full items-center justify-center">
      <nav
        onMouseLeave={() => setHover(null)}
        className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur"
      >
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            onClick={() => setActive(link)}
            onMouseOver={() => setHover(link)}
            className={`nav-item z-0`}
          >
            {active?.title === link.title && (
              <motion.div
                layoutId="nav"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
            {hover?.title === link.title && (
              <motion.div
                layoutId="nav-hover"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 z-10 bg-white/10 mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
