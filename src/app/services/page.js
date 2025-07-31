"use client";

import { motion } from "framer-motion";
import { FaCheckSquare } from "react-icons/fa";
import Footer from "../components/Footer";



const services = [
  "Property Insurance and related perils",
  "MISC accident lines",
  "Liability lines, Professional Indemnity & Public Liability",
  "Marine Cargo & related lines",
  "Bonds & related lines",
  "Micro Insurance",
  "Political violence and terrorism covers",
  "Credit Insurance",
  "Surety Insurance",
  "Aviation",
  "Energy",
  "Cyber",
  "Medical",
  "Motor classes",
];

const business =[
    "Group Credit",
    "Personal Pension & Deposit Administration​",
    "Unit Linked Solutions​",
    "Group Life",
    "Annuities",
    "Individual Life",

]

export default function ServicesPage() {
  return (
    <div className="bg-[#f9f8f6] text-[#001D61] min-h-screen flex flex-col justify-between">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our Products and Services
        </motion.h1>
         <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          General Business
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-8"
        >
          Makrian RE provides comprehensive insurance solutions across Property,
          Liability, Marine, Motor, Medical, and Accident Lines. We also
          specialise in high-risk and emerging areas such as Political
          Violence, Credit, Surety, Cyber, Energy, and Aviation, along with
          Microinsurance and Bonds.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border-l-4 border-[#001D61] rounded shadow-md p-4 flex items-start gap-4 hover:bg-blue-50"
            >
              <FaCheckSquare className="text-[#001D61] mt-1" />
              <p className="text-md font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <br />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Long-Term Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-8"
        >
          Makrian RE offers a full suite of Life and Pension
          solutions, including Group and Individual Life,
          Annuities, Group credit, Personal Pensions, Deposit
          Administration, and Unit-Linked Products
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {business.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border-l-4 border-[#001D61] rounded shadow-md p-4 flex items-start gap-4 hover:bg-blue-50"
            >
              <FaCheckSquare className="text-[#001D61] mt-1" />
              <p className="text-md font-medium">{item}</p>
            </motion.div>
          ))}
          </div>

      </main>

      <Footer />
    </div>
  );
}
