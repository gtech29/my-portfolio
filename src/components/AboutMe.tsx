export default function AboutMe() {
  return (
    <section className="bg- py-20 px-4">
      <div className="max-w-5xl mx-auto bg-stone-100 border border-white/10 backdrop-blur rounded-xl p-8 shadow-lg">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          About Me
        </h2>

        {/* Summary Paragraph */}
        <p className="text-lg text-center text-gray-900 max-w-3xl mx-auto mb-4">
          I&#39;m a senior Computer Science student at CSUN with a focus on
          building secure, scalable systems through DevSecOps practices.
          I&#39;ve contributed to both research and industry projects,
          developing solutions that leverage containerized infrastructure, CI/CD
          pipelines, and automation.
        </p>

        {/* Skills Title */}
        <div className="text-center">
          <h3 className="text-blue-700 hover:text-blue-800 transition font-semibold border-b-2 border-blue-300 pb-1 mb-6 text-2xl">
            Technical Toolkit
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Programming Languages */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3 tracking-wide uppercase border-b border-gray-300 pb-1 dark:text-white">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "HTML", "CSS", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm shadow hover:bg-sky-700 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3 tracking-wide uppercase border-b border-gray-300 pb-1 dark:text-white">
              Programming Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git & GitHub",
                "Docker",
                "Kubernetes",
                "Linux",
                "CI/CD",
                "SSH",
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm shadow hover:bg-sky-700 hover:text-white transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Platforms */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3 tracking-wide uppercase border-b border-gray-300 pb-1 dark:text-white">
              Libraries/Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Flask",
                "Bootstrap",
                "React",
                "Node.js",
                "Webflow",
                "OpenAI API",
              ].map((fw) => (
                <span
                  key={fw}
                  className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm shadow hover:bg-sky-700 hover:text-white transition"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/timeline"
            className="inline-block text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-2 rounded-lg"
          >
            View Timeline
          </a>
        </div>
      </div>
    </section>
  );
}
