export const elasaData = {
  title: 'ELASA AI',
  service: 'Insurance Carrier Quoting Automation',
  timeline: 'Oct 2025 – Present',
  role: 'Software Engineer',
  techStack: ['Node.js', 'Express', 'Next.js', 'Playwright', 'AWS SQS', 'MySQL', 'Docker'],
  description:
    'Three-tier quoting platform: Next.js portal, Node/Express API + MySQL, and SQS-driven Playwright workers for carrier flows (ICW, Atlas, BTIS, Arrowhead). I improved bot reliability (especially ICW), expanded question coverage via the question bank pipeline, and tightened API correctness with typed errors and webhook fixes.',
  images: [
    {
      src: '/companies/elasa-logo.svg',
      alt: 'ELASA.AI logo'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'HOW IT\'S BUILT',
      contentType: 'split-content',
      content:
        'Two repos power the platform: product (portal + API + persistence) and automation (SQS consumers + Playwright bots). A shared question engine keeps UI and workers aligned.',
      list: [
        'Next.js portal for agent-facing quoting UI',
        'Node/Express API backed by MySQL',
        'SQS-driven Playwright workers for carrier flows',
        'Shared question engine across UI and automation'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'END-TO-END PIPELINE',
      contentType: 'split-content',
      content:
        'A quote request flows from user input through persistence, async processing, and back to the UI — each step decoupled by SQS.',
      list: [
        'UI collects inputs and shows quote progress',
        'API persists state and enqueues jobs to SQS',
        'Workers run carrier flows and write results back to DB/API',
        'Question engine keeps UI + automation aligned'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'CARRIER AUTOMATION',
      contentType: 'list',
      content: [
        'ICW: hardened login/session handling and reduced UI-drift failures (grids, overlays, validation).',
        'Atlas: expanded class-code + question coverage via question bank ingestion.',
        'BTIS + Arrowhead: fixed edge cases (dates, lapse/mailing logic, overlays, field-fill bugs).'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'MAKING FAILURES VISIBLE',
      contentType: 'list',
      content: [
        'Fixed Briza webhook integration for reliable status callbacks.',
        'Introduced typed quote errors across API and database layers.',
        'Cleaned up carrier credential routing, notably for ICW.'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'WHAT CHANGED',
      contentType: 'comparison',
      leftSide: {
        label: 'Before',
        content:
          'Flaky bots with silent failures, mismatched questions between UI and workers, and opaque error messages that slowed debugging.'
      },
      rightSide: {
        label: 'After',
        content:
          'Resilient carrier sessions, typed errors surfaced through every layer, and unified question coverage without UI/worker drift.'
      },
      images: []
    }
  ]
};
