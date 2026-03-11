import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Target, Cpu, Trophy } from "lucide-react";
import projectsData from "@/data/projects.json";

export function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Need to fix header alignment
  return (
    <main className="min-h-screen bg-white pt-32 pb-40 dark:bg-[#050505] transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-24">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        {/* <header className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {project.organization}
            </span>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              >
                Live Project <ExternalLink className="size-4" />
              </a>
            )}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            Role:{" "}
            <span className="text-slate-900 dark:text-slate-200">
              {project.role}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </header> */}

        {/* Dynamic Content Grid - All blocks styled as premium cards */}
        <div className="flex flex-col gap-12">
          {/* Challenge Card */}
          <section className="rounded-3xl bg-slate-50/50 p-8 sm:p-12 border border-slate-100 dark:bg-slate-900/40 dark:border-slate-800">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                  <Target className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  The Challenge
                </h2>
              </div>
              <p className="pl-16 text-lg leading-loose text-slate-600 dark:text-slate-300">
                {project.challenge}
              </p>
            </div>
          </section>

          {/* Architecture Card */}
          <section className="rounded-3xl bg-slate-50/50 p-8 sm:p-12 border border-slate-100 dark:bg-slate-900/40 dark:border-slate-800">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                  <Cpu className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Architecture & Execution
                </h2>
              </div>
              <p className="pl-16 text-lg leading-loose text-slate-600 dark:text-slate-300">
                {project.architecture}
              </p>
            </div>
          </section>

          {/* Outcome Card - Indigo Highlight */}
          <section className="rounded-3xl bg-indigo-50/50 p-8 sm:p-12 border border-indigo-100/50 dark:bg-indigo-500/5 dark:border-indigo-500/10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-indigo-500/20">
                  <Trophy className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-indigo-950 dark:text-indigo-100">
                  The Outcome
                </h2>
              </div>
              <p className="pl-16 text-xl leading-loose text-indigo-900/80 dark:text-indigo-200/90 font-medium">
                {project.outcome}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
