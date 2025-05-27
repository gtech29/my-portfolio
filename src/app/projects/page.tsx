// src/pages/Projects.tsx
import Image from "next/image";
import projects from "@/assets/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
        Projects
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
        In this section, you&#39;ll find a more detailed overview of the projects
        I&#39;ve worked on—highlighting the tools, challenges, and real-world impact
        behind each one.
      </p>

      {projects.map((project, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row gap-6 border rounded-xl shadow-md p-6 bg-white dark:bg-gray-800"
        >
          {/* Project Image */}
          <div className="w-full md:w-1/3">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-cover"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Project Description */}
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {project.title}
              </h2>
              {project.date && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {project.date}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            <table className="w-full table-auto text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Techonology Stack</td>
                  <td className="border px-4 py-2">
                    {project.tags.length > 0 ? project.tags.join(", ") : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Status</td>
                  <td className="border px-4 py-2">
                    {project.showPlaceholder === false
                      ? "In Progress"
                      : "Completed"}
                  </td>
                </tr>
                {project.link && (
                  <tr>
                    <td className="border px-4 py-2">Live Demo</td>
                    <td className="border px-4 py-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        View Project
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
