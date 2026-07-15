import { links, profile } from '../data/content'
import useReveal from '../hooks/useReveal'
import { LINK_ICONS, MailIcon } from './Icons'

export default function Footer() {
  const ref = useReveal()

  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-xs font-medium tracking-[0.22em] text-sky-600 uppercase dark:text-sky-400">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          {profile.availability}.
        </h2>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <MailIcon size={15} />
            {profile.email}
          </a>
          {links
            .filter((link) => link.icon !== 'mail')
            .map((link) => {
              const Icon = LINK_ICONS[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-400/60 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-sky-500/50 dark:hover:text-zinc-100"
                >
                  {Icon && <Icon size={17} />}
                </a>
              )
            })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
