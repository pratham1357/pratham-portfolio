import { links, profile, proofPoints } from '../data/content'
import useReveal from '../hooks/useReveal'
import { LINK_ICONS } from './Icons'

export default function Hero() {
  const ref = useReveal()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faint system-diagram grid behind the hero */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div
        ref={ref}
        className="reveal relative mx-auto max-w-5xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-24"
      >
        <p className="font-mono text-xs font-medium tracking-[0.28em] text-sky-600 uppercase dark:text-sky-400">
          {profile.label}
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          {profile.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {profile.subheadline}
        </p>

        {/* Proof strip — status-badge chips for the strongest verifiable signals */}
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {proofPoints.map((p) => (
            <li
              key={p.label}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 py-1.5 pr-3.5 pl-2.5 dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                aria-hidden="true"
              />
              <span className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                {p.label}
              </span>
              <span className="hidden text-xs text-zinc-500 sm:inline dark:text-zinc-500">
                {p.detail}
              </span>
            </li>
          ))}
        </ul>

        {/* Contact / social links */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          {links.map((link) => {
            const Icon = LINK_ICONS[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-zinc-50"
              >
                {Icon && <Icon size={15} />}
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
