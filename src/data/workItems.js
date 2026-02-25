export const internshipItems = [
  {
    id: 'elasa',
    title: 'ELASA AI',
    link: '/elasa',
    backgroundImage: '/companies/elasa-logo.svg',
    details: 'Node.js | Playwright | AWS SQS | MySQL',
    description:
      'Hardened SQS + Playwright carrier automation (ICW, Atlas, BTIS, Arrowhead) and improved quote explainability via webhook cleanup and error typing across API + DB.',
  },
  {
    id: 'kdan',
    title: 'KDANMOBILE',
    link: '/kdan',
    backgroundImage: '/companies/kdan.png',
    details: 'React.js | Python | SQL | BigQuery | LLM | Docker',
    description:
      'Built and deployed a real-time analytics chatbot for revenue and stock inquiries; integrated multiple LLMs with Google Cloud Functions and SQL on BigQuery, boosting response speed from 30s to ~8s and improving answer accuracy through LangChain, LangFuse, and RAGAS testing.',
  },
  {
    id: 'adonit',
    title: 'Adonit',
    link: '/adonit',
    backgroundImage: '/companies/adonit.png',
    details: 'React Native | Python | Streamlit | SQL | Prophet',
    description:
      'Developed features for Adonit One including an AI-powered audio module; created a predictive analytics dashboard using Streamlit and SQL on BigQuery with Prophet forecasting, enabling proactive revenue insights; automated deployments via GitLab CI/CD.',
  },
  {
    id: 'donedesk',
    title: 'Done Desk',
    link: '',
    backgroundImage: '/companies/donedesk.jpg',
    details: 'Ruby on Rails | MongoDB | AWS | REST APIs',
    description:
      'Engineered a SaaS platform to track employee CE credits; built data pipelines to parse state requirements from Excel into MongoDB, deployed a Ruby on Rails frontend for record management, and validated APIs with automated test suites and Postman.',
  },
  {
    id: 'resia',
    title: 'Resia',
    link: '',
    backgroundImage: '/companies/resia.jpg',
    details: 'React.js | AWS | LLM',
    description:
      'Collaborated on building an AI-powered 3D modeling and cost estimation platform for architects. Developed React.js components for interactive design previews, integrated LLM-based natural language inputs for generating structural layouts, and deployed prototypes on AWS.',
  },
  {
    id: 'siemens',
    title: 'Siemens',
    link: '',
    backgroundImage: '/companies/siemens.svg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#009999', backgroundPosition: 'center' },
    details: 'Tableau | Excel VBA | Postman | HTTP',
    description:
      'Created graphical visualizations of Siemens\u2019 HTTP Library, programmed building management interfaces, used Tableau for energy consumption modeling, and developed Excel VBA scripts for sorting a 10-year financial database.',
  }
];

export const projectItems = [
  {
    id: 'fluxpay',
    title: 'FluxPay',
    link: '/fluxpay',
    backgroundImage: '/projects/fluxpay/fluxpay-logo.svg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#0f172a', backgroundPosition: 'center' },
    details: 'React.js | Spring Boot | PostgreSQL | Redis | Kafka | Docker',
    description:
      'Full-stack payment ledger with double-entry bookkeeping, idempotency guarantees, optimistic concurrency control, and real-time balance caching.'
  },
  {
    id: 'codeassist',
    title: 'CodeAssist',
    link: '/codeassist',
    backgroundImage: '/projects/codeassist.png',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    details: 'RAG | Llama | Python | React | PostgreSQL',
    description:
      'RAG-driven Llama tutor that reviews student code and returns scaffolded hints, using retrieval over course notes, a policy layer that blocks solution leakage, and code redaction.',
  },
  {
    id: 'senioruplift',
    title: 'SeniorUplift',
    link: '/senioruplift',
    backgroundImage: '/projects/senioruplift/senioruplift_logo.svg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#0dcaf0', backgroundPosition: 'center' },
    details: 'React.js | Python | Flask | MySQL | AWS | D3.js',
    description:
      'Full-stack web application aggregating welfare support information for the elderly in Texas — healthcare centers, nursing homes, and entertainment — all interconnected through geographic proximity.',
  },
  {
    id: 'nagoya',
    title: 'Nagoya USARD',
    link: '/nagoya',
    backgroundImage: '/companies/nagoya.png',
    details: 'Hugo | Go | Node.js',
    description:
      'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.',
  },
  {
    id: 'triniti',
    title: 'Triniti',
    link: '/triniti',
    backgroundImage: '/companies/triniti.jpg',
    details: 'React Native | Firebase | Node.js',
    description:
      'Nursing home management app bridging communication between care facility staff and residents\u2019 families through dual portals for scheduling, mood tracking, and real-time messaging.',
  },
  {
    id: 'cosmicai',
    title: 'CosmicAI',
    link: '',
    backgroundImage: '/projects/cosmicai.jpg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    details: 'Python | Hugging Face | OpenCV | Qwen 2.5-VL',
    description:
      'Multi-agent feedback loop for adaptive scientific modeling at the NSF-Simons AI Institute for Cosmic Origins, with VLM-driven code generation and a pre-image processing pipeline for scientific plots.',
  },
  {
    id: 'ldos',
    title: 'LDOS Lab',
    link: '',
    backgroundImage: '/projects/ldos.png',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    details: 'Linux | Python | LLM | PolicySmith | QDisc',
    description:
      'Offline search and online policy-selection framework for Linux packet scheduling, extending PolicySmith to evolve QDisc heuristics with safe rollback, benchmarked against DRR/SCRR on trace-driven network instances.',
  }
];

export const featuredItems = [internshipItems[0], internshipItems[1]];
