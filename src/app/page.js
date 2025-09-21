'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "./components/Footer";
import {
  FaPuzzlePiece, FaHandshake, FaBullseye, FaShieldAlt,
  FaMicrochip, FaChartLine, FaCogs, FaNetworkWired, FaUserTie, FaPhone, FaLanguage
} from "react-icons/fa";



/** ---------- Animations ---------- */
const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2, duration: 0.5 } }),
};

/** ---------- Content ---------- */
const valuePoints = [
  { icon: FaCogs,          text: <>Reinsurance structure & optimization:<br/>Best practices for shareholder value.</> },
  { icon: FaNetworkWired,  text: "Specialist lines: Credit, Cyber, Terrorism, Energy, Aviation, and more." },
  { icon: FaHandshake,     text: "Technical capacity-building via partnerships with market specialists." },
  { icon: FaChartLine,     text: "Insights across Africa, Middle East, and Asia." },
  { icon: FaMicrochip,     text: "Data analytics & research for risk mitigation." },
];

const strategyPoints = [
  { icon: FaPuzzlePiece,   text: "Tailored solutions from 30+ years of global experience." },
  { icon: FaHandshake,     text: "Partnerships with 100+ networks for collaboration." },
  { icon: FaBullseye,      text: "Focus on specialist lines with market access." },
  { icon: FaShieldAlt,     text: "Risk assessment with experts to manage complex risk." },
  { icon: FaMicrochip,     text: "Innovation & technology (incl. blockchain where useful)." },
  { icon: FaChartLine,     text: "Designed to deliver lasting stakeholder value." },
];
const teamMembers = [
  {
    icon: FaUserTie,
    name: "Joy Waruguru",
    role: "Underwriter",
    meta: <>French &amp; English<br/>+254 736 061 925</>,
  },
  {
    icon: FaUserTie,
    name: "Richard Githae",
    role: "Business Development Manager",
    meta: <>+254 794 597 386</>,
  },
  {
    icon: FaUserTie,
    name: "Addy Njagi",
    role: "Information & Communication Specialist",
  },
  {
    icon: FaUserTie,
    name: "Allan N. Gacoki",
    role: "Board Chairman",
  },
  {
    icon: FaUserTie,
    name: "Zippy Muthuri",
    role: "Board Member",
  },
  {
    icon: FaUserTie,
    name: "Maria L. Murigi",
    role: "Board Member",
  },
];


export default function AboutPage() {
  useEffect(() => {
    const handleAnchorScroll = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");

      // ✅ Let ContactModal handle this one
      if (href === "#contact") return;

      // For all other hashes, smooth scroll
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleAnchorScroll);
    return () => document.removeEventListener("click", handleAnchorScroll);
  }, []);

  return (
    <>
      <main className="bg-[#fdf8f3] text-[#001D61] scroll-smooth">
        {/* Hero */}
        <section id="hero" className="bg-[#001D61] text-white flex flex-col items-center justify-center h-[35vh] text-center px-4 pt-28">
          <a href="#hero" className="flex items-center justify-center gap-4 hover:scale-105 transition-transform duration-300">
            <Image src="/finallogo.png" alt="Makrian Logo" width={150} height={150} className="w-[150px] h-[150px] object-contain" />
            <h1 className="text-4xl md:text-5xl font-extrabold">MAKRIAN REINSURANCE BROKERS LTD</h1>
          </a>
          <p className="italic text-lg mt-2">Your best partner</p>
        </section>

        {/* About */}
        <motion.section
          id="about"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto">
            Makrian RE provides <strong>comprehensive insurance solutions</strong> across Property, Liability, Marine, Motor,
            Medical and Accident lines. We specialise in high-risk and emerging areas such as Political Violence,
Credit, Surety, Cyber, Energy, and Aviation, along with Microinsurance and Bond Insurance.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          id="mission"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="transition-transform duration-500 bg-[#f5f3ef] py-16 px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-4xl mx-auto">
            We <strong>empower insurers</strong> with innovative, data-driven reinsurance solutions and deep market intelligence tailored to evolving risks.
          </p>
        </motion.section>

        {/* Value Proposition & Winning Strategies */}
        <motion.section
          id="value-prop"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-6 bg-white hover:bg-[#f3f0ec] transition-colors duration-500"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Value Proposition */}
            <div className="flex gap-6">
              <Image src="/values.png" alt="Value Proposition" width={220} height={220} className="w-[220px] h-[220px] object-cover rounded-lg shadow-md" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-justify">Our Value Proposition</h3>
                <ul className="space-y-3">
                  {valuePoints.map((p, i) => (
                    <motion.li key={i} custom={i} variants={pointVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-2">
                      <p.icon className="mt-1 text-[#001D61]" />
                      <span>{p.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Winning Strategies */}
            <div className="flex gap-6">
              <Image src="/strategies.png" alt="Winning Strategies" width={220} height={220} className="w-[220px] h-[220px] object-cover rounded-lg shadow-md" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-justify">Our Winning Strategies</h3>
                <ul className="space-y-3">
                  {strategyPoints.map((p, i) => (
                    <motion.li key={i} custom={i} variants={pointVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-2">
                      <p.icon className="mt-1 text-[#001D61]" />
                      <span>{p.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Founder */}
        <motion.section
          id="founder"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            <Image src="/CEO1.png" alt="Founder" width={300} height={300} className="rounded-lg shadow-md" />
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-4 text-[#001D61]">About Our Founder</h2>
              <p className="text-[#001D61] text-lg text-justify">
                Our founder <strong>Beth S. Nyagah</strong> is a former General Manager of Reinsurance Operations at one of the top African reinsurers,
                with <strong>30+ years’ experience</strong> across Kenya, Africa, the Middle East, and Asia. She also managed outward retrocession
                protection across traditional and specialist lines including Political Violence &amp; Terrorism, Aviation, and Energy.
              </p>
              <p className="text-[#001D61] text-lg text-justify mt-4">
                She is driven by the belief that with proper risk assessment and access to the right markets, no risk is too complex to place.
                Beth’s passion for the evolving insurance sector spans innovation, new markets, products, technologies, and networks—enabling
                market expansion, cross-cultural engagement, and sustainability impact.
              </p>
            </div>
          </div>
        </motion.section>
{/* Our Team */}
<motion.section
  id="team"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    {/* Left: square image */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/teampic.png"   // put an image named team.png (or change to an existing public image)
        alt="Our Team"
        width={420}
        height={420}
        className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Right: names + roles with icons */}
    <div>
      <h3 className="text-3xl font-bold mb-6 text-[#001D61]">Our Team</h3>
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
              {m.meta && (
                <div className="text-sm text-[#001D61]/80 italic mt-0.5">{m.meta}</div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
</motion.section>



        {/* Reach */}
        <motion.section
          id="reach"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-10">Our Reach: Africa, Middle East &amp; Asia</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            <Image src="/bluemap.png" alt="Makrian Reach" width={600} height={400} className="rounded-lg shadow-lg" />
            <div className="max-w-md text-left text-lg leading-relaxed">
              <p>We serve clients across:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Kenya (Nairobi HQ)</li>
                <li>East, Central &amp; Southern Africa, CIMA Region</li>
                <li>Middle East &amp; Asia</li>
              </ul>
              <p className="mt-4">
                With strategic partnerships across continents, we deliver tailored reinsurance solutions that meet diverse market needs.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
