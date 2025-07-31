"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#001D61] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Makrian</h3>
            <p className="text-sm leading-relaxed">
              Makrian Reinsurance Brokers Ltd is dedicated to providing
              customized risk solutions through expertise, global partnerships,
              and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <a href="#footer" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li>Email: <a href="mailto:info@makrian.com" className="hover:underline">bethnyagah@makrianre.com</a></li>
              <li>Phone: +254 722 767826</li>
              <li>Website: makrianre.com</li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Offices</h3>
            <ul className="text-sm space-y-1">
              <li>Nachu Plaza, 9th Floor</li>
              <li>Kiambere Road, Upper Hill</li>
              <li>P.O. Box 27087 – 0100, Nairobi</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Makrian Reinsurance Brokers Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
