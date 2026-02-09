export const internshipItems = [
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
  }
];

export const projectItems = [
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
    link: 'https://github.com/wilku702/Triniti',
    backgroundImage: '/companies/triniti.png',
    emojiLink: '👵🏠',
    details: 'React Native | Firebase',
    description:
      'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.',
    type: 'project'
  }
];

export const featuredItems = [internshipItems[0], internshipItems[1]];
