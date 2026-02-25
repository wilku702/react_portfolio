export const kdanData = {
  title: 'KDANMobile Internship',
  service: 'Chatbot Development',
  timeline: 'Jun 2024 - Aug 2024 (3 months)',
  role: 'Software Engineer Intern',
  techStack: ['React.js', 'Python', 'SQL', 'BigQuery', 'Docker', 'LangChain'],
  description: `At KDANMobile, I built a chatbot for a client to streamline data inquiries like revenue and stock checks, combining front-end and back-end development to deliver a responsive and user-friendly experience.`,
  images: [
    {
      src: '/companies/kdan/kdan-ai.jpg',
      alt: 'KDANMobile office building'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'FRONTEND DEVELOPMENT',
      contentType: 'paragraph',
      content:
        "Built an interactive interface in React.js that lets users explore data through dynamic graphs and tables, supporting real-time analysis and decision-making.",
      images: []
    },
    {
      headerType: 'h3',
      title: 'MOMENTS',
      contentType: 'gallery',
      columns: 2,
      content: 'Just highlighting some moments during my internship at KDANMobile.',
      images: [
        {
          src: '/companies/kdan/hi_team.jpg',
          alt: 'Group photo with the KDANMobile team',
          caption: 'Team Photo'
        },
        {
          src: '/companies/kdan/aws.jpg',
          alt: 'Attending the AWS Summit',
          caption: 'AWS Summit'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'FIGMA DESIGN',
      contentType: 'feature-highlight',
      content: 'Adapted the company\u2019s Figma design system, adding my own enhancements to improve usability and visual flow.',
      images: [
        {
          src: '/companies/kdan/figma.jpg',
          alt: 'Figma design mockups for the chatbot interface'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'INTERACTIVE CHATBOT FEATURES',
      contentType: 'gallery',
      columns: 3,
      content: 'Users ask questions, review data in tables, and generate charts \u2014 all within the same conversational interface.',
      images: [
        {
          src: '/companies/kdan/chatbot/chatbot_message.gif',
          alt: 'Demo of sending a message to the chatbot',
          caption: 'Ask a Question'
        },
        {
          src: '/companies/kdan/chatbot/chatbot_table.gif',
          alt: 'Demo of chatbot displaying data in a table',
          caption: 'Review Table Data'
        },
        {
          src: '/companies/kdan/chatbot/chatbot_graph.gif',
          alt: 'Demo of chatbot generating an interactive graph',
          caption: 'Graph the Data'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BACKEND',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: `Developed backend APIs in Python, connected to BigQuery with SQL queries, and integrated multiple LLM models to generate accurate, context-aware responses. Deployed on Google Cloud Functions and containerized with Docker.`,
      images: [
        {
          src: '/companies/kdan/chatbot_layout.jpg',
          alt: 'Architecture diagram of the chatbot backend system'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'INTEGRATION AND TESTING',
      contentType: 'split-content',
      content: `Implemented a testing pipeline to improve accuracy and reliability, using industry-standard tools for traceability and systematic evaluation.`,
      list: [
        'LangChain for orchestrating LLM interactions',
        'LangFuse for tracing and observability',
        'RAGAS for systematic prompt evaluation',
        'Iterative refinement loop for accuracy improvements'
      ],
      images: [
        {
          src: '/companies/kdan/langfuse.jpg',
          alt: 'LangFuse dashboard showing chatbot tracing and evaluation'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DEPLOYMENT',
      contentType: 'feature-highlight',
      content: `Containerized and embedded the chatbot into the client\u2019s website using Docker, ensuring smooth deployment and scalability across environments.`,
      images: [
        {
          src: '/companies/kdan/deployment.jpg',
          alt: 'Docker deployment pipeline for the chatbot'
        }
      ]
    }
  ]
};
