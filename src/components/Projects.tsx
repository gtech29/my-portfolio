import Card from "./Card";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Technical Projects
        </h2>
        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-20">
          <Card
            logoUrl="https://example.com/logo1.png"
            description="Description for Project 1."
            link="https://example.com/project1"
          />
          <Card
            logoUrl="https://example.com/logo2.png"
            description="Description for Project 2."
            link="https://example.com/project2"
          />
          <Card
            logoUrl="https://example.com/logo3.png"
            description="Description for Project 3."
            link="https://example.com/project3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Digital Twin Project</h3>
            <p className="text-gray-400 mb-4">
              Built a digital twin simulation using Python and open-source tools
              to model real-world control systems, enabling safe testing,
              predictive analysis, and improved system reliability.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Docker", "Kubernetes", "SSH", "Linux/Ubuntu", "CI/CD"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                (Coming Soon)
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">StelEsthetics</h3>
            <p className="text-gray-400 mb-4">
              Since Feb 2022, I&#39;ve designed and launched a fully responsive
              Webflow website that highlights skincare services, streamlines
              booking, and improved client appointments by 15% through enhanced
              UX and navigation.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Webflow", "Google Analytics"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://www.stelesthetics.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">ACM @ CSUN</h3>
            <p className="text-gray-400 mb-4">
              As the current web developer for CSUN&#39;s ACM chapter (since Jul
              2024), I built and manage the website using HTML, CSS, JS, and
              Bootstrap, driving a 15% increase in engagement through UX
              optimization and analytics-based updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                <span
                  key={key}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://csunacm.org/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
