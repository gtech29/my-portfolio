"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 py-6 text-center text-sm text-slate-600">
      <p>© {year} Juan Rodriguez. Research & Development Engineer.</p>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
        >
          ↑ Back to Top
        </button>
      )}
    </footer>
  );
}
