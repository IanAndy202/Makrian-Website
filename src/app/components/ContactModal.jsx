'use client';

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

/**
 * ContactModal
 * - Opens when URL hash is "#contact"
 * - Submits via Formspree (no backend needed on GitHub Pages)
 * - Close with ESC, backdrop click, or the X button
 */

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });

  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);

  // Open when hash is #contact; close on any other hash
  useEffect(() => {
    const handleHash = () => setOpen(window.location.hash === "#contact");
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);
  useEffect(() => {
  // open modal when any link with #contact is clicked (works with Next <Link> too)
  const onClickOpen = (e) => {
    const el = e.target.closest('a[href]');
    if (!el) return;
    const href = el.getAttribute('href') || '';
    if (!href.includes('#contact')) return;

    e.preventDefault(); // prevent scrolling
    // update URL hash without reload
    const url = new URL(window.location.href);
    url.hash = 'contact';
    history.pushState(null, '', url);
    setOpen(true);
  };

  document.addEventListener('click', onClickOpen);
  return () => document.removeEventListener('click', onClickOpen);
}, []);


  // Focus the first field when opening; add ESC to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      // small delay so element is in DOM
      setTimeout(() => nameInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setStatus({ state: "idle", msg: "" });
    if (window.location.hash === "#contact") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const onChange = (e) => setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company) {
      // Honeypot filled => likely bot; pretend success
      setStatus({ state: "success", msg: "Thanks! We'll be in touch shortly." });
      setTimeout(close, 1200);
      return;
    }

    // Require at least email or phone (optional UX)
    if (!formData.email && !formData.phone) {
      setStatus({ state: "error", msg: "Please provide at least an email or phone." });
      return;
    }

    setStatus({ state: "loading", msg: "Sending..." });

    try {
      const FORMSPREE_ID = "f/xvgwpzpj"; // ✅ your ID
      const res = await fetch(`https://formspree.io/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New website enquiry (makrian.com)",
          _gotcha: formData.company, // honeypot
        }),
      });

      if (res.ok) {
        setStatus({ state: "success", msg: "Thanks! We'll be intouch soon." });
        setFormData({ name: "", email: "", phone: "", message: "", company: "" });
        setTimeout(close, 1500); // auto-close
      } else {
        const data = await res.json().catch(() => ({}));
        const err = data?.errors?.[0]?.message || "Something went wrong. Please try again.";
        setStatus({ state: "error", msg: err });
      }
    } catch {
      setStatus({ state: "error", msg: "Network error. Please try again." });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
          >
            {/* Container: header + form */}
            <div className="w-full max-w-xl rounded-2xl shadow-2xl bg-white overflow-hidden">
              {/* Header (centered title, absolute close button) */}
              <div className="relative flex items-center justify-center px-6 py-4 bg-[#001D61] text-white">
                <h3 className="w-full text-center text-lg md:text-xl font-semibold">Contact Makrian</h3>
                <button
                  onClick={close}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="Close contact form"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSubmit} className="px-6 py-6 bg-[#fdf8f3]">
                {/* Name */}
                <label className="block mb-4">
                  <span className="text-sm font-semibold text-[#001D61]">Full Name</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#001D61]/60 bg-white px-3 focus-within:ring-2 focus-within:ring-[#001D61]">
                    <FaUser className="text-[#001D61]" />
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className="w-full p-3 bg-transparent outline-none text-[#001D61] caret-[#001D61] placeholder:text-[#001D61]/58"
                    />
                  </div>
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <span className="text-sm font-semibold text-[#001D61]">Email</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#001D61]/60 bg-white px-3 focus-within:ring-2 focus-within:ring-[#001D61]">
                    <FaEnvelope className="text-[#001D61]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className="w-full p-3 bg-transparent outline-none text-[#001D61] caret-[#001D61] placeholder:text-[#001D61]/58"
                    />
                  </div>
                </label>

                {/* Phone */}
                <label className="block mb-4">
                  <span className="text-sm font-semibold text-[#001D61]">Phone</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#001D61]/60 bg-white px-3 focus-within:ring-2 focus-within:ring-[#001D61]">
                    <FaPhone className="text-[#001D61]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      placeholder="+254 7xx xxx xxx"
                      className="w-full p-3 bg-transparent outline-none text-[#001D61] caret-[#001D61] placeholder:text-[#001D61]/58"
                    />
                  </div>
                </label>

                {/* Message */}
                <label className="block mb-2">
                  <span className="text-sm font-semibold text-[#001D61]">Message</span>
                  <div className="mt-1 flex items-start gap-2 rounded-xl border border-[#001D61]/60 bg-white px-3 focus-within:ring-2 focus-within:ring-[#001D61]">
                    <FaCommentDots className="text-[#001D61] mt-3" />
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={onChange}
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full p-3 bg-transparent outline-none resize-y text-[#001D61] caret-[#001D61] placeholder:text-[#001D61]/58"
                    />
                  </div>
                </label>

                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Status */}
                {status.state !== "idle" && (
                  <div
                    className={`mt-3 text-sm ${
                      status.state === "success"
                        ? "text-green-700"
                        : status.state === "error"
                        ? "text-red-700"
                        : "text-[#001D61]"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#001D61] text-white px-5 py-3 font-semibold shadow hover:shadow-lg hover:opacity-95 focus:ring-2 focus:ring-[#001D61] focus:outline-none disabled:opacity-60"
                  >
                    <FaPaperPlane />
                    {status.state === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
