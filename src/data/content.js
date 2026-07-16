/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth.
 *  Every section of the site reads from this file. Edit here, not in components.
 *
 *  Placeholders you still need to replace are marked with:  // TODO(placeholder)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Pratham Lal',
  label: 'Software × cloud × security',
  headline: 'I build secure, scalable systems.',
  subheadline:
    'SIEM automation, DevSecOps tooling, and serverless AWS. Final-year Information Security undergraduate at VIT Vellore.',
  location: 'Gurgaon, India',
  email: 'prathamlal370@gmail.com',
  availability: 'Open to cloud security & platform engineering roles',
  resume: {
    href: '/resume.pdf',
    downloadName: 'Pratham_Lal_Resume.pdf',
  },
}

/** Social / contact links. `icon` maps to a component in src/components/Icons.jsx */
export const links = [
  { label: 'GitHub', href: 'https://github.com/pratham1357', icon: 'github' },
  // TODO(placeholder): replace with your real LinkedIn profile URL
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratham-lal-69597b28a/', icon: 'linkedin' },
  // TODO(placeholder): replace with your real LeetCode profile URL
  { label: 'LeetCode', href: 'https://leetcode.com/u/pratham1357/', icon: 'code' },
  { label: 'Email', href: 'mailto:prathamlal370@gmail.com', icon: 'mail' },
]

/** Proof strip shown in the hero — the three strongest, externally verifiable signals. */
export const proofPoints = [
  { label: 'Patent Application Published', detail: 'Cloud intrusion detection' },
  { label: 'National Finalist', detail: 'UCO Bank Hackathon 2026' },
  { label: 'AWS Trained', detail: '6 accreditations' },
]

/** Flagship project(s). Keep this list short — two strong items beat four mixed ones. */
export const projects = [
  {
    name: 'KAVACH',
    tagline: 'AI-assisted DevSecOps scanner for banking applications',
    badges: ['National Finalist — UCO Bank Hackathon 2026', 'Full-stack'],
    description:
      'A security platform that scans repositories for vulnerabilities, scores them against banking-specific risk, and turns findings into remediation guidance an engineering team can act on.',
    capabilities: [
      'Static & dependency scanning with Semgrep, pip-audit, and config-pattern analysis',
      'Banking Risk Score engine combining CVSS, module criticality, and exploitability',
      'Compliance mapping to RBI IT Framework 2021, PCI-DSS v4.0, and SWIFT CSP',
      'Gemini-powered remediation guidance in plain business language',
      'Heuristic zero-day risk estimation from outdated dependencies and risky code patterns',
      'Executive PDF, SARIF, and CycloneDX SBOM report generation',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Semgrep',
      'pip-audit',
      'Google Gemini',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/TROJAN1HAMMER/KAVACH',
  },
]

/** Research / patent — rendered as a distinct card, styled as research rather than a repo. */
export const research = {
  kind: 'Patent Application · Published',
  name: 'Cloud Intrusion Detection Framework',
  description:
    'A deception-based framework for cloud threat detection: Cowrie honeypots capture attacker behaviour, Wazuh SIEM correlates and classifies it, and automated response contains the threat.',
  stack: ['Cowrie Honeypot', 'Wazuh SIEM', 'AWS', 'Python'],
  // TODO(placeholder): add the published patent application URL (or application number)
  // when available; the card renders a "View publication" link if `url` is set.
  url: 'https://drive.google.com/file/d/1ai000ob2QugmQAo63Zlz_gDNMV0RRhXh/view?usp=sharing',
}

/**
 * Applied AI — how AI is used across projects and engineering workflows.
 * Keep this focused on practical application rather than generic AI tooling.
 */
export const ai = {
  label: 'Applied AI',
  title: 'Building with AI, not just using it.',
  description:
    'I integrate AI into software, cloud, and security workflows — using language models and intelligent automation to turn complex technical data into actionable insights.',

  capabilities: [
    {
      title: 'AI-Assisted Security',
      description:
        'Applying LLMs to security workflows for vulnerability interpretation, risk analysis, and actionable remediation guidance.',
      tags: ['Gemini', 'Security Automation', 'DevSecOps'],
    },
    {
      title: 'Generative AI',
      description:
        'Building applications that use generative AI to transform technical context into structured, human-readable outputs.',
      tags: ['LLMs', 'Prompt Engineering', 'API Integration'],
    },
    {
      title: 'AI on Cloud',
      description:
        'Exploring the design and integration of AI-powered applications within scalable cloud architectures and serverless systems.',
      tags: ['AWS', 'Serverless', 'Generative AI'],
    },
  ],
}

export const experience = [
  {
    role: 'Cloud Engineering Intern',
    org: 'F13 Technologies',
    period: 'May 2026 — Present',
    points: [
      'Built a serverless leave-management system on AWS — Lambda, API Gateway, DynamoDB, and IAM — automating end-to-end HR workflows with role-based access control.',
      'Completed AWS partner training with six accreditations across cloud architecture and generative AI.',
    ],
  },
  {
    role: 'Security & Networks Analyst',
    org: 'Baldmann',
    period: 'May 2025 — Present',
    points: [
      'Threat-modeled Brain–Computer Interface systems, identifying four major attack vectors.',
      'Hardened server and network infrastructure — access controls, segmentation, monitoring — for secure dev/test environments.',
    ],
  },
  {
    role: 'Chairperson',
    org: 'IEEE-PCS Chapter, VIT',
    period: 'Mar 2026 — Present',
    points: [
      'Led 22 technical workshops with a 25-member team, reaching 400+ participants.',
    ],
  },
]

export const education = {
  degree: 'B.Tech, Computer Science (Information Security)',
  school: 'Vellore Institute of Technology, Vellore',
  period: '2023 — 2027',
  detail: 'CGPA 8.89 after six semesters',
}

export const skillGroups = [
  {
    group: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'IAM', 'Docker', 'Linux', 'Git'],
  },
  {
    group: 'Security',
    items: [
      'Wazuh SIEM',
      'ELK Stack',
      'Cowrie Honeypot',
      'Semgrep',
      'SOAR Automation',
      'Incident Response',
      'Threat Modeling',
    ],
  },
  {
    group: 'Frameworks & Tooling',
    items: ['FastAPI', 'React', 'Vite', 'VirtualBox'],
  },
]

export const credentials = {
  /** Public Google Drive folder with all certificates and Credly badges. */
  driveUrl:
    'https://drive.google.com/drive/folders/1IJUT7kA5PKPKnR9lnZR43O1itIstUyyj?usp=sharing',
  items: [
    'AWS Technical Accreditation (Partner)',
    'AWS Skill Builder — Agentic AI Essentials',
    'AWS Skill Builder — Generative AI on AWS',
    'AWS Skill Builder — Cloud Economics Essentials',
    'AWS Skill Builder — Migrating Workloads to AWS',
    'AWS Skill Builder — Data Scientist Learning Plan',
  ],
}
