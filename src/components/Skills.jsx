import { skillGroups } from '../data/content'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <h3 className="font-mono text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-500">
              {group.group}
            </h3>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-zinc-200 bg-zinc-100/80 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
