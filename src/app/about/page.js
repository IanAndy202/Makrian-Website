// src/app/about/page.js
import HomePage from "../../components/HomePage";

export const metadata = {
  title: "About Us | Makrian Reinsurance Brokers",
  description: "Learn about Makrian & B — our mission, markets, and founder.",
  alternates: { canonical: "https://makrian.com/about" },
};

export default function AboutPage() {
  return <HomePage />;
}
