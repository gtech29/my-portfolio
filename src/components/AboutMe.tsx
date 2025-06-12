"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const timeline = [
    {
      title: "AI Infrastructure & Operations @ NAVFAC EXWC",
      description:
        "Developed a modular microservices architecture using Docker and deployed services with Kubernetes for secure, air-gapped environments. Built a real-time dashboard using Flask and WebSocket, integrated machine learning models for anomaly detection, and configured MQTT for internal communication between simulated PLCs and sensors. Delivered internal demos, created deployment-ready VM images, and authored detailed technical documentation.",
      current: true,
      tools: ["Docker", "Kubernetes", "Python", "CI/CD", "SSH"],
    },
    {
      title: "Front-End Developer @ CSUN ACM Chapter",
      description:
        "Built and maintained a responsive website using Bootstrap, HTML5, and modular JavaScript for the CSUN ACM chapter. Implemented real-time event banners, project highlights, and accessible design elements to increase student participation. Optimization efforts reduced update time and contributed to a rise in signups and engagement.",
      tools: ["Bootstrap", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      title: "Technical Advisor @ Life Aid Research Institute",
      description:
        "Provided technical guidance on mobile architecture decisions, Firebase integration, and secure authentication. Reviewed product wireframes and supported HIPAA-aligned data planning and onboarding improvements. Assisted with MVP rollout preparation, analytics setup, and platform feature testing.",
      tools: [
        "Product Design",
        "Firebase",
        "Product Strategy",
        "Mobile App MVP",
      ],
    },
    {
      title: "Business Analysis & Consulting (QA) @ Accenture",
      description:
        "Contributed to federal system modernization efforts by developing user stories, mapping legacy data flows, and creating business process models. Participated in Agile sprint cycles, daily standups, and milestone tracking. Analyzed user access logs using SQL and Excel to support recommendations for workflow improvements and system design.",
      tools: [
        "SQL",
        "Agile Methodology",
        "Cross-Team Collaboration",
        "Data Review",
      ],
    },
    {
      title: "Front-End Developer @ Stelesthetics",
      description:
        "Designed and deployed a responsive Webflow site optimized for mobile and SEO. Embedded booking tools, integrated analytics, and regularly published promotional content to improve client engagement. Site performance improvements led to a measurable increase in appointments and a significant reduction in bounce rate.",
      tools: ["Webflow", "Google Analytics", "UX/UI", "Responsive Design"],
    },
    {
      title: "Computer Science Student @ CSUN",
      description:
        "Gained foundational experience in AI/ML, software engineering, and DevSecOps through project-based learning and hands-on experimentation. Actively participated in ACM events and collaborative projects to strengthen technical and teamwork skills",
      tools: ["AI/Machine Learning Fundamentals", "Data Structures & Algorithms", "Cybersecurity Fundamentals"],
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
