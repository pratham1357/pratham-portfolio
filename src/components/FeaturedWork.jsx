import { projects, research } from '../data/content'
import Section from './Section'
import { ArrowUpRightIcon, AwardIcon, GitHubIcon } from './Icons'

function TechChips({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-zinc-200 bg-zinc-100/80 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/5 sm:p-8 lg:col-span-3 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-sky-500/40">
      <div className="flex flex-wrap items-center gap-2">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full bg-sky-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
          >
            {badge}
          </span>
        ))}
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.name}
        <span className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {project.tagline}
        </span>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {project.capabilities.map((capability) => (
          <li key={capability} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
            {capability}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-5">
        <TechChips items={project.stack} />
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
        >
          <GitHubIcon size={15} />
          View repository
          <ArrowUpRightIcon size={14} />
        </a>
      </div>
    </article>
  )
}

function ResearchCard() {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-100/60 p-6 transition-all hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/5 sm:p-8 lg:col-span-2 dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-900/30 dark:hover:border-sky-500/40">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
        <AwardIcon size={12} />
        {research.kind}
      </span>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {research.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {research.description}
      </p>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-5">
        <TechChips items={research.stack} />
        {research.url && (
          <a
            href={research.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
          >
            View publication
            <ArrowUpRightIcon size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <Section id="work" label="Featured Work" title="Two things I'd show first">
      <div className="grid gap-5 lg:grid-cols-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        <ResearchCard />
      </div>
    </Section>
  )
}
