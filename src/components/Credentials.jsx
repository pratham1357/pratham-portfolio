import { credentials } from '../data/content'
import Section from './Section'
import { ArrowUpRightIcon, AwardIcon } from './Icons'

export default function Credentials() {
  return (
    <Section id="credentials" label="Credentials" title="Certifications & training">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
        <ul className="flex flex-wrap gap-2">
          {credentials.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 px-3.5 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <AwardIcon size={13} />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={credentials.driveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-sky-500/40 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition-all hover:-translate-y-0.5 hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-300 dark:hover:bg-sky-500/20"
        >
          View all credentials
          <ArrowUpRightIcon size={15} />
        </a>
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
          Certificates and Credly badges, verifiable in one public folder.
        </p>
      </div>
    </Section>
  )
}
