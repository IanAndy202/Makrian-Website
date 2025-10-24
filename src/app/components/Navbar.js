'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [showPhrase, setShowPhrase] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowPhrase(y > 120); // show after a little scroll
      setScrolled(y > 10);    // tint bg early for readability
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300
        ${scrolled ? "bg-[#001D61]/95 shadow-md backdrop-blur-sm" : "bg-[#001D61]"}
        text-white`}
    >
      {/* fixed height so the animated phrase never expands the bar */}
      <nav className="h-16 md:h-20">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Left: brand */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg md:text-xl tracking-wide">MAKRIAN RE</span>
          </div>

          {/* Center: animated phrase (show only ≥ md to avoid mobile overlap) */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
            <AnimatePresence>
              {showPhrase && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="italic text-sm md:text-base text-center
                             max-w-[60vw] overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  Your best partner
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: nav links */}
          <div className="flex items-center gap-4 sm:gap-5 text-sm sm:text-base">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/team" className="hover:underline">Team</Link>
            {/* Always use #contact so the modal opens (ContactModal listens for it) */}
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
