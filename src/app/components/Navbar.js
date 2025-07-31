"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [showPhrase, setShowPhrase] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowPhrase(scrollY > 150);
      setScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-[#001D61] shadow-md" : "bg-transparent"
      } text-white sticky top-0 z-50 transition-all duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          
          <span className="font-bold text-xl">MAKRIAN RE</span>
        </div>

        {/* Center phrase on scroll */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <AnimatePresence>
            {showPhrase && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white italic text-sm md:text-base"
              >
                Your best partner
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm sm:text-base">
          <Link href="/#about" className="hover:underline">
            About
          </Link>

          <Link href="/services" className="hover:underline">
            Services
          </Link>

          {pathname === "/" ? (
            <a href="#footer" className="hover:underline">
              Contact
            </a>
          ) : (
            <Link href="/#footer" className="hover:underline">
              Contact
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
