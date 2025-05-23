export default function AboutMe() {
  return (
    <section className="bg- py-20 px-4">
      <div className="max-w-5xl mx-auto bg-stone-100 border border-white/10 backdrop-blur rounded-xl p-8 shadow-lg">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        {/* Summary Paragraph */}
        <p className="text-lg text-center text-gray-900 max-w-3xl mx-auto mb-4">
          I&#39;m a senior Computer Science student at CSUN with a focus on building
          secure, scalable systems through DevSecOps practices. I&#39;ve contributed
          to both research and industry projects, developing solutions that
          leverage containerized infrastructure, CI/CD pipelines, and
          automation.
        </p>

        {/* Skills Title */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-blue-800 inline-block px-2 py-1 rounded">
            Technical Toolkit
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded shadow-md">
              Languages I Code In
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "HTML", "CSS", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded shadow-md">
              Tools I Use to Automate and Deploy
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
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Platforms */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded shadow-md">
              Frameworks I Build With
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
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition"
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
