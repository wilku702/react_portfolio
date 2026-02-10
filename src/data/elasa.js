export const elasaData = {
  title: 'ELASA AI',
  service: 'Carrier Quoting Automation Platform',
  timeline: 'Oct 2025 – Feb 2026',
  role: 'Software Engineer',
  techStack: ['Node.js', 'Express', 'Next.js', 'Playwright', 'AWS SQS', 'MySQL', 'Docker'],
  description: `ELASA is a three-tier insurance quoting platform: Next.js portal for intake/tracking, Node/Express API with MySQL for orchestration, and SQS-driven Playwright bots executing carrier flows (ICW, Atlas, BTIS, Arrowhead). I hardened carrier bots (especially ICW), expanded question coverage via ingestion pipelines, and improved API integration correctness through error typing and webhook handling.`,
  images: [
    {
      src: '/companies/elasa/hero.jpg',
      alt: 'ELASA quoting workflow and quote status interface'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'SYSTEM ARCHITECTURE',
      contentType: 'paragraph',
      content:
        'ELASA spans two repos: product (Next.js frontend, Node/Express API, MySQL migrations) and automation (SQS consumers, Playwright bots, question bank, deployment tooling). A shared question engine ensures discovery questions, conditional logic, and class-code mappings stay consistent across UI and automation.',
      images: [
        {
          src: '/companies/elasa/architecture.jpg',
          alt: 'Diagram showing Next.js frontend, Node/Express API + MySQL, AWS SQS, and Playwright workers'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'END-TO-END FLOW',
      contentType: 'list',
      content: [
        'Frontend collects discovery inputs and displays quote/carrier progress.',
        'API persists quote state in MySQL and triggers async work via SQS.',
        'Workers consume jobs, run Playwright carrier flows with login/MFA/session handling, and write results to API/DB.',
        'Question engine delivers core and carrier-specific questions with conditional logic for UI and automation.'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'ICW AUTOMATION HARDENING',
      contentType: 'paragraph',
      content:
        'Led ICW bot reliability improvements: fixed carrier UI quirks (grids, overlays, percentage inputs), improved timeout/error detection, and strengthened login/session handling. Reduced brittle failures and made ICW resilient to UI drift and portal issues.',
      images: [
        {
          src: '/companies/elasa/icw.jpg',
          alt: 'ICW automation flow showing grid inputs and validation handling'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ATLAS EXPANSION VIA QUESTION BANK + INGESTION',
      contentType: 'paragraph',
      content:
        'Expanded Atlas coverage via improved question fill logic and class-code expansion through the question bank pipeline. This source-of-truth approach eliminated UI/automation mismatches.',
      images: [
        {
          src: '/companies/elasa/questions.jpg',
          alt: 'Question bank and ingestion pipeline view showing carrier-specific mappings'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BTIS AND ARROWHEAD FIXES',
      contentType: 'list',
      content: [
        'Fixed BTIS edge cases: mailing errors, lapse logic, date handling.',
        'Improved Arrowhead: overlay handling, optional questions, field-fill bugs.'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'API INTEGRATION AND QUOTE EXPLAINABILITY',
      contentType: 'paragraph',
      content:
        'Improved carrier integration correctness and failure visibility: refined Briza webhook handling, implemented typed quote errors across API and DB, and wired carrier login/verification triggers to route credential events correctly (especially for ICW).',
      images: [
        {
          src: '/companies/elasa/api.jpg',
          alt: 'API integration view highlighting webhooks and error typing for quotes'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'IMPACT',
      contentType: 'list',
      content: [
        'Increased quote success rate through hardened Playwright bots (especially ICW).',
        'Reduced support/debug time via improved error detection and typed failures.',
        'Scaled question coverage with shared ingestion system across UI and automation.'
      ],
      images: []
    }
  ]
};
