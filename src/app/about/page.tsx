import Image from "next/image";

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Computer Science Research Intern @ NAVFAC EXWC",
      description:
        "Developed containerized applications using Docker and Kubernetes to support mission-critical testing environments. Simulated control system operations in Python and configured secure network setups for reliable deployment.",
      current: true,
    },
    {
      year: "2024",
      title: "Front-End Web Developer @ CSUN ACM Chapter",
      description:
        "Designed and maintained the ACM CSUN website using Bootstrap, HTML/CSS, and JavaScript. Improved site engagement by 15% through regular updates, analytics integration, and responsive UX enhancements.",
      current: false,
    },
    {
      year: "2023",
      title: "Business Analyst Intern (QA) @ Accenture",
      description:
        "Performed QA testing on Cisco's purchasing website using SQL scripts. Helped resolve bugs and collaborated in stakeholder meetings to support a seamless experience for over 10,000 users.",
      current: false,
    },
    {
      year: "2022",
      title: "Freelance Front-End Developer @ Stelesthetics",
      description:
        "Built a responsive Webflow site for a skincare business. Enhanced booking flow and service visibility, leading to a 15% increase in appointments through UX improvements and clear service presentation.",
      current: false,
    },
    {
      year: "2022",
      title: "Computer Science Student @ CSUN",
      description:
        "Focused on AI/ML, software engineering, and DevSecOps fundamentals while actively participating in ACM events and project-based learning experiences.",
      current: false,
    },
  ];
  
  

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      {/* Profile Image + Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Image
          src="/img/profile.jpg" // Make sure your image exists in /public/img
          alt="Profile picture of Juan Rodriguez"
          width={200}
          height={200}
          className="rounded-full border-4 border-slate-300 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold mb-3">Juan Rodriguez</h1>
          <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            I&#39;m a Research & Development Engineer focused on building secure,
            scalable systems across digital twin, AI/ML, and DevSecOps domains.
            I enjoy blending practical engineering with forward-thinking design.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
      <div className="relative ml-4 pl-4 border-l-2 border-slate-300 dark:border-slate-700 space-y-10">
        {timeline.map((item, i) => (
          <div key={i}>
            <div className="text-sm text-slate-500">{item.year}</div>

            <div className="flex items-center gap-3 mb-1">
              {/* Dot next to title (not absolute) */}
              <span
                className={`w-3 h-3 rounded-full inline-block ${
                  item.current ? "bg-blue-600" : "bg-slate-400"
                }`}
              />
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              {item.current && (
                <span className="text-blue-600 text-sm ml-2">(Current)</span>
              )}
            </div>

            <p className="text-gray-700 dark:text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
