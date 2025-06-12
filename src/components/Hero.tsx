"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[60vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/hero3.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-96 z-10 bg-gradient-to-t from-[#f6f8fb] to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Juan Rodriguez
          </h1>
          <p className="mt-2 text-white text-sm sm:text-base tracking-wide uppercase">
            Helping teams build secure, scalable, and reliable systems.
          </p>
          <p className="mt-4 text-white text-sm sm:text-base md:text-lg leading-relaxed">
            I specialize in{" "}
            <span className="font-semibold">secure automation</span>,{" "}
            <span className="font-semibold">real-time data integration</span>,
            and <span className="font-semibold">applied AI</span> to deliver
            practical, maintainable solutions.
            <br className="hidden md:block" />
            My focus is on supporting modern DevOps and cloud-native workflows
            through clear, scalable systems.
          </p>

          {/* CTA */}
          <Link
            href="/projects"
            className="inline-block mt-6 py-2 px-5 bg-white text-black font-semibold rounded shadow hover:bg-gray-100 transition"
          >
            View My Projects
          </Link>
        </div>

        {/* Profile Image */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden shadow-lg ring-2 ring-white">
          <Image
            src="/img/profile.jpg"
            alt="Juan Rodriguez"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
