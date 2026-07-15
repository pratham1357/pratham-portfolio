import { useCallback, useState } from 'react'
import { profile } from '../data/content'
import { DownloadIcon, MoonIcon, SunIcon } from './Icons'

export default function Nav() {
  // Initial theme was applied pre-paint by the inline script in index.html.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage unavailable (private mode) — theme still applies for this visit */
      }
      return next
    })
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          pratham<span className="text-sky-600 dark:text-sky-400">.lal</span>
        </a>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100"
          >
            {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={16} />}
          </button>

          <a
            href={profile.resume.href}
            download={profile.resume.downloadName}
            className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <DownloadIcon size={14} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
