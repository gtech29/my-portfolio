const Experience = [
  {
    company:
      "Naval Facilities Engineering/Expeditionary Warfare Center (NAVFC/EXWC) ",
    role: "Computer Science Research Assistant",
    date: "Oct 2024 \u2013 Present",
    highlights: [
      "Developed and configured containerized applications using Docker and Kubernetes, enhancing system reliability and deployment efficiency.",
      "Configured network setups for advanced control systems, ensuring robust connectivity and operational integrity.",
      "Simulated control system operations using Python and open-source tools, achieving accurate system behavior modeling for testing purposes.",
    ],
    tools: ["Docker", "Kubernetes", "Python", "CI/CD", "SSH"],
  },
  {
    company: "Association for Computing Machinery, CSUN Chapter",
    role: "Front-End Web Developer",
    date: "July 2022 \u2013 Present",
    highlights: [
      "Designed and managed the CSUN ACM Chapter website using Bootstrap, HTML, CSS, and JavaScript, boosting functionality for over 300 users.",
      "Improved user engagement and increased bookings by 15% through streamlined navigation.",
      "Designed and managed the CSUN ACM Chapter website using Bootstrap, HTML, CSS, and JavaScript, boosting functionality for over 300 users.",
    ],
    tools: ["Bootstrap", "HTML", "CSS", "JavaScript", "Git"],
  },
  {
    company: "Stelesthetics",
    role: "Freelance Web Developer",
    date: "Feb 2022 \u2013 Present",
    highlights: [
      "Designed and implemented a modern, user-friendly website using Webflow, ensuring seamless experiences across both desktop and mobile platforms.",
      "Highlighted and showcased a diverse range of skincare services, including facials, chemical peels, lash lifts & tints, and brow lamination, to effectively attract and inform potential clients. ",
      " Optimized site navigation and booking process, ensuring enhanced client convenience and a 15% increase in appointment bookings.",
    ],
    tools: ["Webflow", "Google Analytics", "UX/UI", "Responsive Design"],
  },
  {
    company: "Accenture, LLC ",
    role: "Business Analyst Intern \u2013 Quality Assurance",
    date: "June 2023 \u2013 Aug 2023",
    highlights: [
      "Assisted in QA testing on Cisco's purchasing website using SQL scripts, contributing to the detection and resolution of bugs, which helped maintain a seamless user experience for 10,000+ monthly visitors. ",
      "Facilitated strategic meetings with Cisco stakeholders, where I collaborated with Accenture teams to enhance project outcomes, gaining valuable experience in cross-functional teamwork and project management.",
    ],
    tools: ["SQL", "Agile"],
  },
  {
    company: "Harbor Distributing, LLC",
    role: "Lead Merchandiser ",
    date: "May 2018 \u2013 December 2019",
    highlights: [
      "Procured new inventory using data-driven forecasting, maintained detailed documentation, achieved 99% stock rotation compliance, and reduced asset discrepancies by 15% through regular audits. ",
      "Curated engaging product displays, resulting in a 30% sales boost, while efficiently handling customer support inquiries as the primary contact, achieving a 20% reduction in issue resolution time." ,
    ],
    tools: ["Inventory Management", "Data Analysis", "Customer Support"],
  },
  {
    company: "LA Cafe",
    role: "Shift Manager",
    date: "April 2015 \u2013 May 2018",
    highlights: [
      "Coordinated the restaurant operation, including customer-facing and back-of-house staff, while delivering superior guest services and ensuring customer satisfaction. ",
    ],
    tools: ["Team Leadership", "Customer Service", "Operations Management"],
  },
  {
    company: "United States Navy ",
    role: "Hospital Corpsman (Combat Medic)",
    date: "May 2008 \u2013 Aug 2011",
    highlights: [
      "Provided critical support in disease prevention and treatment, emergency medical response in combat environments, and assisted healthcare professionals in delivering medical care to Armed Forces personnel. ",
    ],
    tools: ["Medical Training", "Emergency Response", "Team Collaboration"],
  },
];

export default function PExperience() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto bg-gradient-to-b from-white to-slate-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {Experience.map((proj, index) => (
          <div
            key={index}
            className="border border-slate-200  p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-black ">
                {proj.company}
              </h3>
              <span className="text-sm text-slate-500">{proj.date}</span>
            </div>
            <p className="text-slate-600  text-sm mb-1">
              {proj.role}
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 ">
              {proj.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-100  text-slate-700  text-sm px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
