import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 dark:bg-black sm:pt-16 sm:pb-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            {/* Fixed: Added dark mode text color */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
              {title}
            </h1>
            {/* Fixed: Added dark mode subtitle color */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {/* Fixed: Swapped <a> for Next.js <Link> for SPA routing */}
              <Link
                href={ctaLink}
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                {ctaText}
              </Link>

              {/* Fixed: Swapped <a> for Next.js <Link> and added a subtle hover animation on the arrow */}
              <Link
                href="#about"
                className="group text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-300"
              >
                Learn more{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Visual Asset (Envisioned Pixels) */}
          <div className="mt-14 flex justify-end lg:mt-0">
            {/* Fixed: Added dark mode styling to the placeholder box so it doesn't look like a glaring white square */}
            <div className="relative aspect-4/3 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl dark:border-slate-800 dark:bg-slate-900 lg:max-w-none">
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)]">
                <span className="font-mono text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Visual Asset Container
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
