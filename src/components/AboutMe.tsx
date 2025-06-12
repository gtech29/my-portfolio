"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const timeline = [
    {
      title: "AI Operations & Infrastructure Intern @ NAVFAC EXWC",
      description:
        "Developed containerized applications using Docker and Kubernetes to support mission-critical testing environments. Simulated control system operations in Python and configured secure network setups for reliable deployment.",
      current: true,
      tools: ["Docker", "Kubernetes", "Python", "CI/CD", "SSH"],
    },
    {
      title: "Front-End Web Developer @ CSUN ACM Chapter",
      description:
        "Designed and maintained the ACM CSUN website using Bootstrap, HTML/CSS, and JavaScript. Improved site engagement by 15% through regular updates, analytics integration, and responsive UX enhancements.",
      tools: ["Bootstrap", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      title: "Business Analyst Intern (QA) @ Accenture",
      description:
        "Performed QA testing on Cisco's purchasing website using SQL scripts. Helped resolve bugs and collaborated in stakeholder meetings to support a seamless experience for over 10,000 users.",
      tools: ["SQL", "Agile"],
    },
    {
      title: "Freelance Front-End Developer @ Stelesthetics",
      description:
        "Built a responsive Webflow site for a skincare business. Enhanced booking flow and service visibility, leading to a 15% increase in appointments through UX improvements and clear service presentation.",
      tools: ["Webflow", "Google Analytics", "UX/UI", "Responsive Design"],
    },
    {
      title: "Computer Science Student @ CSUN",
      description:
        "Focused on AI/ML, software engineering, and DevSecOps fundamentals while actively participating in ACM events and project-based learning experiences.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center md:text-left">
          Professional Experience
        </h2>

        <div className="relative border-l-2 border-slate-300 pl-4 sm:pl-6 space-y-10">
          {timeline.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="pb-10 border-b border-slate-200 last:border-none"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className={`w-3 h-3 rounded-full inline-block ${
                    item.current ? "bg-blue-600 animate-pulse" : "bg-slate-400"
                  }`}
                />
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {item.title}
                </h3>
                {item.current && (
                  <span className="text-blue-600 text-sm ml-1">(Current)</span>
                )}
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {item.description}
              </p>
              {item.tools && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
