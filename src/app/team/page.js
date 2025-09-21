'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaUserTie } from "react-icons/fa";

/** animations */
const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.45 } }),
};

/** data */
const teamMembers = [
  { icon: FaUserTie, name: "Joy Waruguru",   role: "Underwriter",                         meta: <>French &amp; English<br/>+254 736 061 925</> },
  { icon: FaUserTie, name: "Richard Githae", role: "Business Development Manager",        meta: <>+254 794 597 386</> },
  { icon: FaUserTie, name: "Addy Njagi",     role: "Information & Communication Specialist" },
  { icon: FaUserTie, name: "Allan N. Gacoki",role: "Board Chairman" },
  { icon: FaUserTie, name: "Zippy Muthuri",  role: "Board Member" },
  { icon: FaUserTie, name: "Maria L. Murigi",role: "Board Member" },
];

export default function TeamPage() {
  return (
    <>
      <main className="bg-[#fdf8f3] text-[#001D61]">
        {/* Hero */}
        <section className="bg-[#001D61] text-white flex flex-col items-center justify-center h-[30vh] text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Team</h1>
          <p className="opacity-90 mt-2">People behind Makrian RE</p>
        </section>

        {/* Team block */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left: square image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/teampic.png"   // make sure this exists in /public; or change to an existing image
                alt="Makrian Team"
                width={420}
                height={420}
                className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Right: list */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Leadership & Specialists</h2>
              <ul className="space-y-4">
                {teamMembers.map((m, i) => (
                  <motion.li
                    key={m.name}
                    custom={i}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <m.icon className="mt-1 text-[#001D61] shrink-0" />
                    <div>
                      <div className="font-semibold text-lg">{m.name}</div>
                      <div className="text-[#001D61]/90">{m.role}</div>
                      {m.meta && <div className="text-sm text-[#001D61]/80 italic mt-0.5">{m.meta}</div>}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
