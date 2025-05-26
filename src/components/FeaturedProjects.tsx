import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NAVFAC Digital Twin",
    date: " December 2024 \u2013 Present",
    description:
      "Developed containerized control system apps, configured networks for advanced automation setups, and simulated system behavior using Python to support accurate testing and deployment.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],

    showPlaceholder: true,
  },
  {
    title: "Stelesthetics",
    date: "February 2022 \u2013 Present",
    description:
      "Designed and launched a fully responsive Webflow website that highlights skincare services, streamlines booking, and improved client appointments by 15% through enhanced UX and navigation.",
    image: "/img/stelesthetics.jpg",
    tags: ["Webflow", "Google Analytics", "Responsive Design"],
    link: "https://www.stelesthetics.net/",
  },
  {
    title: "ACM @ CSUN",
    date: "June 2024 \u2013 Present",
    description:
      "Built and maintained the ACM CSUN chapter website using Bootstrap, HTML, CSS, and JavaScript, boosting engagement by 15% through design improvements, regular updates, and analytics-driven decisions.",
    image: "/img/acm.png",
    tags: ["React Native", "PostgreSQL", "APIs"],
    link: "https://www.stelesthetics.net/",
  },
  {
    title: "LifeAid App",
    date: "September 2024 \u2013 Present",
    description:
      "Advised an app founder on technology strategy, attended Google events to stay ahead of trends, and helped improve functionality and analytics through hands-on consulting.",
    image: "/img/lifeaid.jpeg",
    tags: ["React Native", "PostgreSQL", "APIs"],
    showPlaceholder: false,
  },
];

export const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Featured Projects
        </h2>
        <p className="text-center text-black/80 max-w-2xl mx-auto mb-10">
          Here are some of the projects I&#39;ve had the opportunity to work on,
          each one reflecting a different aspect of my experience in design,
          development, and problem solving across real world applications.
        </p>
      </div>

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
