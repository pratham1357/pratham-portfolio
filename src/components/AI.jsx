import { ai } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function AI() {
  const ref = useReveal()

  return (
    <section id="ai" className="border-t border-zinc-200 dark:border-zinc-800">
      <div
        ref={ref}
        className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24"
      >
        {/* Section header */}
        <p className="font-mono text-xs font-medium tracking-[0.28em] text-sky-600 uppercase dark:text-sky-400">
          {ai.label}
        </p>

        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {ai.title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {ai.description}
        </p>

        {/* AI capability cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ai.capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="group rounded-xl border border-zinc-200 bg-white/60 p-5 transition-all hover:-translate-y-1 hover:border-sky-400/60 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-sky-500/50"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                  aria-hidden="true"
                />

                <span className="font-mono text-xs text-zinc-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {capability.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {capability.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}