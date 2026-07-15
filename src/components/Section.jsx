import useReveal from '../hooks/useReveal'

/** Shared section shell: mono overline label, optional title, reveal-on-scroll. */
export default function Section({ id, label, title, children }) {
  const ref = useReveal()

  return (
    <section id={id} ref={ref} className="reveal mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
      <div className="mb-8">
        <p className="font-mono text-xs font-medium tracking-[0.22em] text-sky-600 uppercase dark:text-sky-400">
          {label}
        </p>
        {title && (
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {title}
          </h2>
        )}
      </div>
      {children}
    </section>
  )
}
