import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NAVFAC Digital Twin",
    description:
      "Developed containerized control system applications, set up network configurations for automation, and used Python to simulate real world behavior for reliable testing and deployment.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],
  },
  {
    title: "ACM @ CSUN",
    description:
      "Built and maintained the ACM CSUN chapter website using Bootstrap, HTML, CSS, and JavaScript. Improved engagement by 15 percent through design updates, regular maintenance, and decisions guided by analytics.",
    image: "/img/acm.png",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "Web Development"],
  },
];


export const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-2">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-center text-black/80 mb-10">
          These projects reflect my experience in system design, software
          development, and automation through real world challenges in DevOps,
          security, and AI.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 px-4 ">
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
