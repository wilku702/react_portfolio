export const internshipItems = [
  {
    id: 'elasa',
    title: 'ELASA AI',
    link: '/elasa',
    backgroundImage: '/companies/elasa-logo.svg',
    emojiLink: '🧠',
    details: 'Node.js | Playwright | AWS SQS | MySQL',
    description:
      'Hardened SQS + Playwright carrier automation (ICW, Atlas, BTIS, Arrowhead) and improved quote explainability via webhook cleanup and error typing across API + DB.',
    type: 'part-time'
  },
  {
    id: 'kdan',
    title: 'KDANMOBILE',
    link: '/kdan',
    backgroundImage: '/companies/kdan.png',
    emojiLink: '🤖💬',
    details: 'React.js | Python | SQL | BigQuery | LLM | Docker',
    description:
      'Built and deployed a real-time analytics chatbot for revenue and stock inquiries; integrated multiple LLMs with Google Cloud Functions and SQL on BigQuery, boosting response speed from 30s to ~8s and improving answer accuracy through LangChain, LangFuse, and RAGAS testing.',
    type: 'internship'
  },
  {
    id: 'adonit',
    title: 'Adonit',
    link: '/adonit',
    backgroundImage: '/companies/adonit.png',
    emojiLink: '📈',
    details: 'React Native | Python | Streamlit | SQL | Prophet',
    description:
      'Developed features for Adonit One including an AI-powered audio module; created a predictive analytics dashboard using Streamlit and SQL on BigQuery with Prophet forecasting, enabling proactive revenue insights; automated deployments via GitLab CI/CD.',
    type: 'internship'
  },
  {
    id: 'donedesk',
    title: 'Done Desk',
    link: '',
    backgroundImage: '/companies/donedesk.jpg',
    emojiLink: '🦷',
    details: 'Ruby on Rails | MongoDB | AWS | REST APIs',
    description:
      'Engineered a SaaS platform to track employee CE credits; built data pipelines to parse state requirements from Excel into MongoDB, deployed a Ruby on Rails frontend for record management, and validated APIs with automated test suites and Postman.',
    type: 'internship'
  },
  {
    id: 'resia',
    title: 'Resia',
    link: '',
    backgroundImage: '/companies/resia.jpg',
    emojiLink: '🏗️',
    details: 'React.js | AWS | LLM',
    description:
      'Collaborated on building an AI-powered 3D modeling and cost estimation platform for architects. Developed React.js components for interactive design previews, integrated LLM-based natural language inputs for generating structural layouts, and deployed prototypes on AWS.',
    type: 'internship'
  },
  {
    id: 'siemens',
    title: 'Siemens',
    link: '',
    backgroundImage: '/companies/siemens.svg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#009999', backgroundPosition: 'center' },
    emojiLink: '🏭',
    details: 'Tableau | Excel VBA | Postman | HTTP',
    description:
      'Created graphical visualizations of Siemens\u2019 HTTP Library, programmed building management interfaces, used Tableau for energy consumption modeling, and developed Excel VBA scripts for sorting a 10-year financial database.',
    type: 'internship'
  }
];

export const projectItems = [
  {
    id: 'senioruplift',
    title: 'SeniorUplift',
    link: '/senioruplift',
    backgroundImage: '/projects/senioruplift/senioruplift_logo.svg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#0dcaf0', backgroundPosition: 'center' },
    emojiLink: '👴',
    details: 'React.js | Python | Flask | MySQL | AWS | D3.js',
    description:
      'Full-stack web application aggregating welfare support information for the elderly in Texas — healthcare centers, nursing homes, and entertainment — all interconnected through geographic proximity.',
    type: 'project'
  },
  {
    id: 'nagoya',
    title: 'Nagoya USARD',
    link: '/nagoya',
    backgroundImage: '/companies/nagoya.png',
    emojiLink: '🎓',
    details: 'Hugo | Go | Node.js',
    description:
      'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.',
    type: 'project'
  },
  {
    id: 'triniti',
    title: 'Triniti',
    link: '/triniti',
    backgroundImage: '/companies/triniti.jpg',
    emojiLink: '👵🏠',
    details: 'React Native | Firebase | Node.js',
    description:
      'Nursing home management app bridging communication between care facility staff and residents\u2019 families through dual portals for scheduling, mood tracking, and real-time messaging.',
    type: 'project'
  },
  {
    id: 'codeassist',
    title: 'CodeAssist',
    link: '',
    backgroundImage: '/projects/codeassist.png',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    emojiLink: '🤖',
    details: 'RAG | Llama | Python | React | PostgreSQL',
    description:
      'RAG-driven Llama tutor that reviews student code and returns scaffolded hints, using retrieval over course notes, a policy layer that blocks solution leakage, and code redaction.',
    type: 'project'
  },
  {
    id: 'cosmicai',
    title: 'CosmicAI',
    link: '',
    backgroundImage: '/projects/cosmicai.jpg',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    emojiLink: '🔭',
    details: 'Python | Hugging Face | OpenCV | Qwen 2.5-VL',
    description:
      'Multi-agent feedback loop for adaptive scientific modeling at the NSF-Simons AI Institute for Cosmic Origins, with VLM-driven code generation and a pre-image processing pipeline for scientific plots.',
    type: 'project'
  },
  {
    id: 'ldos',
    title: 'LDOS Lab',
    link: '',
    backgroundImage: '/projects/ldos.png',
    backgroundStyle: { backgroundSize: 'contain', backgroundColor: '#ffffff', backgroundPosition: 'center' },
    emojiLink: '🐧',
    details: 'Linux | Python | LLM | PolicySmith | QDisc',
    description:
      'Offline search and online policy-selection framework for Linux packet scheduling, extending PolicySmith to evolve QDisc heuristics with safe rollback, benchmarked against DRR/SCRR on trace-driven network instances.',
    type: 'project'
  }
];

export const featuredItems = [internshipItems[0], internshipItems[1]];
