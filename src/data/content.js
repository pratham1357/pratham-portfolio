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
    'Serverless AWS systems, DevSecOps tooling, and SIEM automation — with a published patent in cloud intrusion detection. Final-year Information Security undergraduate at VIT Vellore.',
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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratham-lal-69597b28a/', icon: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/pratham1357/', icon: 'code' },
  { label: 'Email', href: 'mailto:prathamlal370@gmail.com', icon: 'mail' },
]

/** Proof strip shown in the hero — the three strongest, externally verifiable signals. */
export const proofPoints = [
  { label: 'Patent Application Published', detail: 'Cloud intrusion detection' },
  { label: 'National Finalist', detail: 'UCO Bank Hackathon 2026' },
  { label: 'AWS Trained', detail: '6 accreditations' },
]

/** Flagship project(s). Keep this list short — strong items only. */
export const projects = [
  {
    name: 'KAVACH',
    tagline: 'AI-assisted DevSecOps scanner for banking applications',
    badges: ['National Finalist — UCO Bank Hackathon 2026', 'Full-stack'],
    description:
      'A security platform that scans repositories for vulnerabilities, scores them against banking-specific risk, and turns findings into remediation guidance an engineering team can act on.',
    capabilities: [
      'Nine security scanners unified under one Banking Risk Score',
      'Static & dependency scanning with Semgrep, pip-audit, and config-pattern analysis',
      'Risk engine combining CVSS, module criticality, and exploitability',
      'Compliance mapping to RBI IT Framework 2021, PCI-DSS v4.0, and SWIFT CSP',
      'Gemini-powered remediation guidance in plain business language',
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
  {
    name: 'Cloud-Native Leave Management System',
    tagline: 'Serverless HR leave workflows on AWS',
    badges: ['Serverless — AWS', 'CI/CD'],
    description:
      'A serverless platform for end-to-end HR leave management: employees submit requests, managers approve through multi-stage workflows, and the system enforces balance and overlap rules automatically.',
    capabilities: [
      'Multi-stage approval workflow orchestrated with AWS Step Functions',
      'Automatic leave-balance validation and overlapping-request detection',
      'Role-based access control across employee and manager actions',
      'Status-change notifications via SNS',
      'Security and production-readiness validation (Project Sprint)',
      'GitHub Actions CI/CD pipeline',
    ],
    stack: [
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Step Functions',
      'IAM',
      'SNS',
      'React',
      'Python',
    ],
    repo: 'https://github.com/pratham1357/leave-management-system',
  },
]

/** Research / patent — rendered as a distinct card, styled as research rather than a repo. */
export const research = {
  kind: 'Patent Application · Published',
  name: 'Cloud Intrusion Detection Framework',
  description:
    'A deception-based framework for cloud threat detection: Cowrie honeypots capture attacker behaviour, Wazuh SIEM correlates and classifies it, and automated response contains the threat.',
  stack: ['Cowrie Honeypot', 'Wazuh SIEM', 'AWS', 'Python'],
  url: 'https://drive.google.com/file/d/1ai000ob2QugmQAo63Zlz_gDNMV0RRhXh/view?usp=sharing',
}

/**
 * Additional projects — shipped and in-progress work beyond the flagship items.
 * `status` is either 'completed' or 'in-development'; the component renders a pill.
 */
export const additionalProjects = [
  {
    name: 'DocuVault',
    blurb:
      'Secure cloud document management — employees upload and retrieve personal documents while HR and Admin manage organisation-wide compliance.',
    stack: ['React', 'AWS Cognito', 'Lambda', 'API Gateway', 'DynamoDB', 'S3'],
    status: 'completed',
    repo: 'https://github.com/pratham1357/DocuVault',
  },
  {
    name: 'TargetLens',
    blurb:
      'AI-assisted recruitment pipeline that screens and ranks candidates against a role using language models.',
    stack: ['Python', 'LLM Integration', 'RAG', 'FastAPI'],
    status: 'completed',
    repo: 'https://github.com/pratham1357/targetlens',
  },
  {
    name: 'Project Sprint',
    blurb:
      'AWS security and CI/CD hardening track — production-readiness validation, IAM review, and pipeline automation.',
    stack: ['AWS', 'GitHub Actions', 'IAM', 'CI/CD'],
    status: 'completed',
  },
  {
    name: 'SecureSphere',
    blurb: 'Cloud security posture and monitoring tooling.',
    stack: ['AWS', 'Python', 'Cloud Security'],
    status: 'in-development',
  },
  {
    name: 'SOAR HI',
    blurb:
      'Security orchestration, automation, and response workflows for faster incident handling.',
    stack: ['SOAR', 'Automation', 'Python'],
    status: 'in-development',
  },
]

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
      tags: ['LLMs', 'Prompt Engineering', 'RAG'],
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
    role: 'AWS Cloud Engineering Intern',
    org: 'F13 Technologies',
    period: 'May 2026 — Present',
    points: [
      'Built a serverless Leave Management System on AWS — Lambda, API Gateway, DynamoDB, Step Functions, and IAM — automating end-to-end HR leave workflows with role-based access control.',
      'Completed AWS Partner training, earning six AWS Skill Builder accreditations across cloud architecture and generative AI.',
    ],
  },
  {
    role: 'Risk Management & Audit Intern',
    org: 'WNS Global Services (part of Capgemini)',
    period: 'May 2025 — July 2025',
    points: [
      'Optimized SIEM visibility through Sysmon integration and built a custom SOAR trigger for automated response workflows.',
      'Gained hands-on exposure to enterprise cybersecurity and threat intelligence, strengthening SOC fundamentals through Blue Team Level 1 (BTL1).',
    ],
  },
  {
    role: 'Security & Networks Analyst',
    org: 'Baldmann',
    period: 'May 2025 — Present',
    points: [
      'Analyzed Brain–Computer Interface (BCI) attack surfaces, identifying four major attack vectors for threat modeling.',
      'Hardened server and network infrastructure — access control, segmentation, monitoring — for secure dev/test environments.',
    ],
  },
  {
    role: 'Chairperson',
    org: 'IEEE-PCS Chapter, VIT',
    period: 'Board 2026–27',
    points: [
      'Leading the chapter for the 2026–27 board term — 22 technical workshops delivered with a 25-member team, reaching 400+ participants.',
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
    group: 'Languages & Frameworks',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'React', 'FastAPI', 'REST APIs'],
  },
  {
    group: 'Cloud & AWS',
    items: [
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'S3',
      'IAM',
      'Cognito',
      'Step Functions',
      'SNS',
      'CloudWatch',
      'X-Ray',
    ],
  },
  {
    group: 'AI & Development',
    items: ['LLM Integration', 'Prompt Engineering', 'RAG', 'AI-Assisted Development'],
  },
  {
    group: 'DevOps & Tooling',
    items: ['CI/CD', 'GitHub Actions', 'Git', 'Docker', 'Linux', 'Vercel'],
  },
  {
    group: 'Security',
    items: [
      'Wazuh SIEM',
      'Sysmon',
      'SOAR Automation',
      'Cowrie Honeypot',
      'Semgrep',
      'Threat Modeling',
      'JWT / RBAC',
      'API Security',
    ],
  },
]

export const credentials = {
  /** Public Google Drive folder with all certificates and Credly badges. */
  driveUrl:
    'https://drive.google.com/drive/folders/1IJUT7kA5PKPKnR9lnZR43O1itIstUyyj?usp=sharing',
  items: [
    'AWS Technical Accreditation (Partner)',
    'CompTIA Network+',
    'AWS Skill Builder — Agentic AI Essentials',
    'AWS Skill Builder — Generative AI on AWS',
    'AWS Skill Builder — Cloud Economics Essentials',
    'AWS Skill Builder — Migrating Workloads to AWS',
    'AWS Skill Builder — Data Scientist Learning Plan',
  ],
}
