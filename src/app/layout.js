import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Makrian Reinsurance Brokers",
  description: "Reinsurance Brokers LTD",
  icons: {
    icon: "/favicon.ico", // or "/favicon.ico" if you create a proper favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* ✅ Navbar on every page */}
        {children}
+       {/* Contact modal is global so any "#contact" link opens it */}
+       <ContactModal />
      </body>
    </html>
  );
}
