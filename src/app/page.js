"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { FaPuzzlePiece, FaHandshake, FaBullseye, FaShieldAlt, FaMicrochip, FaChartLine, FaCogs, FaNetworkWired } from "react-icons/fa";



const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const valuePoints = [
  { icon: FaCogs, text: <>Reinsurance structure and optimization: <br /> Best practices for shareholder value. </> },
  { icon: FaNetworkWired, text: "Specialist lines: Credit, Cyber, Terrorism, Energy, Aviation, and more." },
  { icon: FaHandshake, text: "Technical and capacity building via partnerships with market specialists." },
  { icon: FaChartLine, text: "Insights into different markets accross Africa, Middle East, and Asia." },
  { icon: FaMicrochip, text: "Data analytics and research: Risk mitigation via advanced data insights." },
];

const strategyPoints = [
  { icon: FaPuzzlePiece, text: "Tailored solutions: 30+ years of global experience in delivering custom strategies." },
  { icon: FaHandshake, text: "Partnerships: Over 100+ networks enabling cross-collaboration." },
  { icon: FaBullseye, text: "Focus on specialist lines with coresponding market access." },
  { icon: FaShieldAlt, text: "Risk assessment: Working with experts to mitigate and manage risk." },
  { icon: FaMicrochip, text: "Innovation & Technology: Embracing emerging tech like blockchain." },
  { icon: FaChartLine, text: "Value for stakeholders: Our services are designed to leave a lasting impact." },
];

export default function Home() {
  useEffect(() => {
    const handleAnchorScroll = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleAnchorScroll);
    return () => document.removeEventListener("click", handleAnchorScroll);
  }, []);

  return (
    <>
    <main className="bg-[#fdf8f3] text-[#001D61] scroll-smooth">
      
        {/* Hero */}
  <section
    id="hero"
    className="bg-[#001D61] text-white flex flex-col items-center justify-center h-[35vh] text-center px-4 pt-28"
  >
    <a
      href="#hero"
      className="flex items-center justify-center gap-4 hover:scale-105 transition-transform duration-300"
    >
      <img
        src="/finallogo.png"
        alt="Makrian Logo"
        width={150}
        height={150}
        className="w-[150px] h-[150px] object-contain"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold">
        MAKRIAN REINSURANCE BROKERS LTD
      </h1>
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
        whileHover={{ scale: 1.08 }}
        className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto">
          Makrian RE provides <strong>comprehensive insurance solutions</strong> across Property, Liability, Marine, Motor,
Medical, and Accident Lines. We also specialise in high-risk and emerging areas such as Political Violence,
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
        whileHover={{ scale: 1.08 }}
        className="transition-transform duration-500 bg-[#f5f3ef] py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-4xl mx-auto">
          At Makrian, our mission is to <strong>empower insurers with innovative, data-driven reinsurance solutions and deep market intelligence 
          tailored to evolving risks</strong>.
           We specialize in structuring and optimizing reinsurance programs, sourcing specialist lines, and fostering technical
            capacity through strategic partnerships. We help clients navigate complex environments and thereby safeguard shareholder value.
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
            <img src="/values.png" alt="Value Proposition" width={200} height={200} className="w-[220px] h-[220px] object-cover rounded-lg shadow-md" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-justify">Our Value Proposition</h3>
              <ul className="space-y-3">
                {valuePoints.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <point.icon className="mt-1 text-[#001D61]" />
                    <span>{point.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Winning Strategies */}
          <div className="flex gap-6">
            <img src="/strategies.png" alt="Winning Strategies" width={200} height={200} className="w-[220px] h-[220px] object-cover rounded-lg shadow-md" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-justify">Our Winning Strategies</h3>
              <ul className="space-y-3">
                {strategyPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <point.icon className="mt-1 text-[#001D61]" />
                    <span>{point.text}</span>
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
        whileHover={{ scale: 1.08 }}
        className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          <img
            src="/CEO1.png"
            alt="Founder"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-[#001D61]">About Our Founder</h2>
            <p className="text-[#001D61] text-lg text-justify">
             Our founder <strong>Beth S. Nyagah</strong> is a former General Manager of Reinsurance Operations at one of the top African reinsurers.
              She holds <strong>over 30 years’ experience</strong> in the insurance and reinsurance sector.
               Her portfolio spanned revenue streams across Kenya, Africa, the Middle East, and Asia. 
             Additionally, she managed the outward retrocession protection for the company, covering both traditional insurance lines and emerging specialist lines such as Political Violence & Terrorism, Aviation, and Energy.
  </p>
            
          
            <p className="text-[#001D61] text-lg text-justify">  She is <strong>driven by the belief that with proper risk assessment and access to the right markets, no risk is too complex to place</strong>. Beth is passionate about the sector, which has offered continuous opportunities for innovation, new markets, products, technologies, and networks. The evolving nature of the industry and shifting customer needs have enabled career fulfillment, market expansion, cross-cultural engagement, and contributions to environmental sustainability — all of which impact future generations.</p>
          </div>
        </div>
      </motion.section>

      {/* Map */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.08 }}
        className="transition-transform duration-500 bg-[#fdf8f3] hover:bg-[#f3f0ec] py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Our Reach: Africa & Asia</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          <img
            src="/bluemap.png"
            alt="Makrian Reach"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="max-w-md text-left text-lg leading-relaxed">
           <div>
  <p>We serve clients across:</p>
  <ul className="list-disc list-inside mt-2">
    <li>Kenya (Nairobi HQ)</li>
    <li>East, Central & Southern Africa, CIMA Region </li>
    <li>Middle East & Asia</li>
  </ul>
</div>

            <p className="mt-4">
              With strategic partnerships accross continents, we ensure tailored reinsurance
              solutions that meet the unique needs of our clients in diverse markets.
            </p>
          </div>
        </div>
      </motion.section>

     
    </main>
    <Footer />
    </>

  );
}

