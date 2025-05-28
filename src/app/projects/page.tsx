import Image from "next/image";
import projects from "@/assets/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black">
        Projects
      </h1>
      <p className="text-lg md:text-xl text-center text-black/80 max-w-2xl mx-auto mb-10">
        In this section, you&#39;ll find a more detailed overview of the
        projects I&#39;ve worked on, highlighting the tools, challenges, and
        real-world impact behind each one.
      </p>

      {projects.map((project, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row gap-6 border rounded-xl shadow-md p-6 bg-white"
        >
          {/* Project Image */}
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg object-contain"
              width={400}
              height={300}
              priority
            />
          </div>

          {/* Project Details */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="space-y-2 mx-auto">
              <h2 className="text-2xl font-bold text-black mt-5">
                {project.title}
              </h2>
              {project.date && (
                <p className="text-sm text-gray-500 mb-1">{project.date}</p>
              )}
              <p className="text-gray-700">{project.description}</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Status:</span>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  project.showPlaceholder === false
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {project.showPlaceholder === false
                  ? "In Progress"
                  : "Completed"}
              </span>
            </div>

            {/* Metadata (no table) */}
            <div className="space-y-3">
              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Live Demo */}
              {project.link && (
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    🔗 View Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
