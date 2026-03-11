import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Featured Work & Case Studies
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A selection of projects highlighting my expertise in software
            reliability, web architecture, and security operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projectsData.projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/50 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-indigo-500/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    {project.organization}
                  </span>
                  {/* Animated Indicator Arrow */}
                  <ArrowRight className="size-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {project.role}
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 transition-colors group-hover:border-indigo-200 dark:group-hover:border-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
