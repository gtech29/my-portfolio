import * as Icons from "lucide-react";
import aboutData from "@/data/about.json";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-start">
          {/* Narrative Column */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              {aboutData.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 whitespace-pre-line">
              {aboutData.description}
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {aboutData.techStack.map((tech) => {
              // Type-safe icon resolution: maps string key to Lucide component
              const IconComponent =
                (Icons[tech.icon as keyof typeof Icons] as Icons.LucideIcon) ||
                Icons.HelpCircle;

              return (
                <div
                  key={tech.name}
                  className="group relative flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-500/50"
                >
                  {/* Default State: Icon & Titles (Fades out on hover) */}
                  <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-95">
                    <IconComponent className="size-8 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-3 text-sm text-center font-semibold text-slate-900 dark:text-slate-200">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-center uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1">
                      {tech.category}
                    </span>
                  </div>

                  {/* Hover State: Description (Fades in on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 p-5 text-center opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-slate-900/95">
                    <p className="text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                      {tech.proficiency}
                    </p>
                  </div>

                  {/* Skill Context Indicator (Remains visible) */}
                  <div className="absolute top-2 right-2 flex size-2 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-indigo-500"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
