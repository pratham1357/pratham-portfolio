import { education, experience } from '../data/content'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className="relative space-y-10 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
        {experience.map((job) => (
          <li key={`${job.org}-${job.role}`} className="relative">
            <span
              className="absolute top-1.5 -left-[30px] h-2.5 w-2.5 rounded-full border-2 border-zinc-50 bg-sky-500 sm:-left-[38px] dark:border-zinc-950"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {job.role}
                <span className="text-zinc-500 dark:text-zinc-400"> · {job.org}</span>
              </h3>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{job.period}</p>
            </div>
            <ul className="mt-2.5 space-y-1.5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Education — one line, on purpose */}
      <div className="mt-12 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/60">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{education.degree}</span>
          {' — '}
          {education.school} · {education.detail}
        </p>
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{education.period}</p>
      </div>
    </Section>
  )
}
