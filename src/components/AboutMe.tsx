export default function AboutMe() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto border border-white rounded-xl p-8">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-6">
          About Me
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          I&#39;m a senior at CSUN majoring in Computer Science with a passion
          for systems, security, and DevSecOps. I enjoy building scalable
          solutions through containerized development and automation. I&#39;m
          currently expanding my experience with tools like Docker and
          Kubernetes in both academic and industry settings.
        </p>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-blue-800 inline-block px-2 py-1 rounded">
            Technical Skills
          </h3>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "HTML", "CSS", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded">
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
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Platforms */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-600 inline-block px-2 py-1 rounded">
              Frameworks & Platforms
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
                  className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
