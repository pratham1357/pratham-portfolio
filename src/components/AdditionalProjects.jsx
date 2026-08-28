import { additionalProjects } from '../data/content'
import Section from './Section'
import { ArrowUpRightIcon, GitHubIcon } from './Icons'

const STATUS = {
  completed: {
    label: 'Shipped',
    className:
      'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
  },
  'in-development': {
    label: 'In development',
    className:
      'border border-zinc-300 text-zinc-500 dark:border-zinc-700 dark:text-zinc-400',
  },
}

function ProjectRow({ project }) {
  const status = STATUS[project.status] ?? STATUS['in-development']

  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-sky-400/50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-sky-500/40">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {project.name}
        </h3>
        <span
          className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.blurb}
      </p>

      <div className="mt-4 flex flex-1 flex-col justify-end gap-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-100/80 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
          >
            <GitHubIcon size={14} />
            View repository
            <ArrowUpRightIcon size={13} />
          </a>
        )}
      </div>
    </article>
  )
}

export default function AdditionalProjects() {
  return (
    <Section id="projects" label="Additional Projects" title="More things I've built">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {additionalProjects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
