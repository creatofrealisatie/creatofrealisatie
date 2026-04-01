"use client";

import { useState, useEffect } from "react";

const Logo = () => (
  <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Decorative vertical line */}
    <line x1="0" y1="6" x2="0" y2="54" stroke="#C0622A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Diamond accent */}
    <rect x="4" y="27" width="8" height="8" fill="#C0622A" transform="rotate(45 8 31)" />
    {/* Connector line */}
    <line x1="18" y1="31" x2="28" y2="31" stroke="#C0622A" strokeWidth="1" opacity="0.4" />
    {/* CREATOF REALISATIE — main company name, dominant */}
    <text x="32" y="30" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="26" fill="#C0622A" letterSpacing="1.5">CREATOF</text>
    <text x="32" y="52" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="12" fill="#E5E5E5" letterSpacing="5.5">REALISATIE</text>
    {/* Subtle underline accent */}
    <line x1="32" y1="57" x2="248" y2="57" stroke="#C0622A" strokeWidth="0.6" opacity="0.25" />
  </svg>
);

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
            >
              Offerte aanvragen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded text-center transition-colors duration-200 mt-2"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
