export const elasaData = {
  title: 'ELASA AI',
  service: 'Insurance Carrier Quoting Automation',
  timeline: 'Oct 2025 – Present',
  role: 'Software Engineer',
  techStack: ['Node.js', 'Express', 'Next.js', 'Playwright', 'AWS SQS', 'MySQL', 'Docker'],
  description:
    'Three-tier quoting platform: Next.js portal, Node/Express API + MySQL, and SQS-driven Playwright workers for carrier flows (ICW, Atlas, BTIS, Arrowhead). I improved bot reliability (especially ICW), expanded question coverage via the question bank pipeline, and tightened API correctness with typed errors and webhook fixes.',
  images: [],
  sections: [
    {
      headerType: 'h3',
      title: 'SYSTEM ARCHITECTURE',
      contentType: 'paragraph',
      content:
        'Two repos: product (Next.js + API + MySQL) and automation (SQS consumers + Playwright bots). A shared question engine powers discovery + carrier-specific logic across UI and workers.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'FLOW',
      contentType: 'list',
      content: [
        'UI collects inputs and shows quote progress.',
        'API persists state and enqueues jobs to SQS.',
        'Workers run carrier flows and write results back to DB/API.',
        'Question engine keeps UI + automation aligned.'
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
      title: 'API + DEBUGGABILITY',
      contentType: 'paragraph',
      content:
        'Improved integration correctness and failure visibility with Briza webhook fixes, typed quote errors across API/DB, and cleaner carrier credential routing (notably ICW).',
      images: []
    },
    {
      headerType: 'h3',
      title: 'IMPACT',
      contentType: 'list',
      content: [
        'Higher quote success rate from more resilient bots.',
        'Faster debugging via clearer, typed failures.',
        'Broader question coverage without UI/worker mismatches.'
      ],
      images: []
    }
  ]
};