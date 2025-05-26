import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NAVFAC Digital Twin",
    description:
      "Containerized simulation of a DDC system with real-time monitoring.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],
    showPlaceholder: true,
  },
  {
    title: "Stelesthetics",
    description:
      "Since Feb 2022, I've designed and launched a fully responsive Webflow website that highlights skincare services, streamlines booking, and improved client appointments by 15% through enhanced UX and navigation.",
    image: "/img/stelesthetics.jpg",
    tags: ["Webflow", "Google Analytics", "Responsive Design"],
    link: "https://www.stelesthetics.net/",
  },
  {
    title: "ACM @ CSUN",
    description:
      "Veteran support and wellbeing tracking app with backend integration.",
    image: "/img/acm.png",
    tags: ["React Native", "PostgreSQL", "APIs"],
    link: "https://www.stelesthetics.net/",
  },
  {
    title: "LifeAid App",
    description:
      "Veteran support and wellbeing tracking app with backend integration.",
    image: "/img/lifeaid.jpeg",
    tags: ["React Native", "PostgreSQL", "APIs"],
    showPlaceholder: false,
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-slate-100"
    >
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Technical Projects
      </h2>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
        {projects.map((project, index) => (
          <ProjectCard
            className="hover:scale-105 transition-transform duration-300"
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};
