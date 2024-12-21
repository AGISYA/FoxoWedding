"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa"; // Ikon dari React Icons
import Hero from "@/components/organisms/hero";
import PhotoboothWedding from "@/components/organisms/photobooth-wedding";
import WeddingDocumentation from "@/components/organisms/pre-wedding-documentation";
import Booking from "@/components/organisms/booking";
import ChatSection from "@/components/organisms/chat";
import WhyFoxo from "@/components/organisms/whyfoxo";
import Warranty from "@/components/organisms/warranty";
import WeddingPrices from "@/components/organisms/weddingprices";
import WeddingPackage from "@/components/organisms/weddingpackage";
import Footer from "@/components/organisms/footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false); // Mengatur background navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mengatur menu mobile
  const [showScrollTop, setShowScrollTop] = useState(false); // Untuk tombol scroll ke atas
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Atur visibilitas tombol scroll ke atas
      setShowScrollTop(window.scrollY > 300);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting); // Navbar transparan jika Hero terlihat
      },
      { threshold: 0.1 } // Trigger saat 10% Hero terlihat
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all ${
          isScrolled ? "bg-amber-800 opacity-60 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 mx-24">
            {["Home", "Photos", "Videos", "Booking", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:underline hover:decoration-white hover:decoration-2 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              className="text-white"
            >
              {isMenuOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden p-4 transition-all ${
              isScrolled ? "bg-amber-800 opacity-90" : "bg-transparent"
            } text-white`}
          >
            <ul>
              {["Home", "Photos", "Videos", "Booking", "Contact"].map(
                (item) => (
                  <li key={item} className="my-2">
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block text-white hover:underline hover:decoration-white hover:decoration-2 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section with ref */}
      <div ref={heroRef} id="home">
        <Hero />
      </div>

      {/* Other Sections */}
      <ChatSection />
      <div id="videos">
        <WeddingDocumentation />
      </div>
      <div id="photos">
        <PhotoboothWedding />
      </div>

      <div id="contact">
        <WhyFoxo />
        <Warranty />
        <WeddingPrices />
        <WeddingPackage />
      </div>
      <div id="booking">
        <Booking />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-800 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
