"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const timeline = [
    {
      title: "Computer Science Research Intern @ NAVFAC EXWC",
      description:
        "Developed containerized applications using Docker and Kubernetes to support mission-critical testing environments. Simulated control system operations in Python and configured secure network setups for reliable deployment.",
      current: true,
    },
    {
      title: "Front-End Web Developer @ CSUN ACM Chapter",
      description:
        "Designed and maintained the ACM CSUN website using Bootstrap, HTML/CSS, and JavaScript. Improved site engagement by 15% through regular updates, analytics integration, and responsive UX enhancements.",
      current: false,
    },
    {
      title: "Business Analyst Intern (QA) @ Accenture",
      description:
        "Performed QA testing on Cisco's purchasing website using SQL scripts. Helped resolve bugs and collaborated in stakeholder meetings to support a seamless experience for over 10,000 users.",
      current: false,
    },
    {
      title: "Freelance Front-End Developer @ Stelesthetics",
      description:
        "Built a responsive Webflow site for a skincare business. Enhanced booking flow and service visibility, leading to a 15% increase in appointments through UX improvements and clear service presentation.",
      current: false,
    },
    {
      title: "Computer Science Student @ CSUN",
      description:
        "Focused on AI/ML, software engineering, and DevSecOps fundamentals while actively participating in ACM events and project-based learning experiences.",
      current: false,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 bg-gradient-to-b from-white to-slate-100">
      {/* Profile Image + Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
        <Image
          src="/img/profile.jpg"
          alt="Profile picture of Juan Rodriguez"
          width={200}
          height={200}
          className="rounded-full border-4 border-slate-300 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold mb-3 text-center md:text-left text-black">
            Juan Rodriguez
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
            I&#39;m a Research & Development Engineer focused on building
            secure, scalable systems across AI/ML, and DevSecOps domains. I
            enjoy blending practical engineering with forward-thinking design.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <h2 className="text-2xl font-semibold mb-6 text-black">My Journey</h2>
      <div className="relative ml-4 pl-4 border-l-2 border-slate-300 space-y-10">
        {timeline.map((item, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="pb-8 border-b border-slate-200 last:border-none"
          >
            <div className="flex items-center gap-3 mb-1">
              <span
                className={`w-3 h-3 rounded-full inline-block ${
                  item.current ? "bg-blue-600 animate-pulse" : "bg-slate-400"
                }`}
              />
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              {item.current && (
                <span className="text-blue-600 text-sm ml-2">(Current)</span>
              )}
            </div>
            <p className="text-gray-700">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
