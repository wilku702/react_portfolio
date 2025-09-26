export const kdanData = {
  title: 'KDANMobile Internship',
  service: 'Chatbot Development',
  timeline: 'Jun 2024 - Aug 2024 (3 months)',
  role: 'Software Engineer Intern',
  description: `At KDANMobile, I built a chatbot for a client to streamline data inquiries like revenue and stock checks, combining front-end and back-end development to deliver a responsive and user-friendly experience.`,
  images: [
    {
      src: './companies/kdan/kdan-ai.jpg',
      alt: 'company branch'
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
      title: 'FIGMA DESIGN',
      contentType: 'paragraph',
      content: 'Adapted the company’s Figma design system, adding my own enhancements to improve usability and visual flow.',
      images: [
        {
          src: './companies/kdan/figma.png',
          alt: 'company branch'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ASK A QUESTION',
      contentType: 'demonstration',
      position: 'left',
      content: `Ask any question regarding data relevant to the client company.`,
      images: [
        {
          src: './companies/kdan/chatbot/chatbot_message.gif',
          alt: 'preview of opening chatbot'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'LOOK AT THE TABLE OF DATA',
      contentType: 'demonstration',
      position: 'right',
      content: `Review the data relevant to your inquiry.`,
      images: [
        {
          src: './companies/kdan/chatbot/chatbot_table.gif',
          alt: 'preview of opening chatbot'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'GRAPH THE DATA',
      contentType: 'demonstration',
      position: 'left',
      content: `Choose the graph type and variable axis.`,
      images: [
        {
          src: './companies/kdan/chatbot/chatbot_graph.gif',
          alt: 'preview of opening chatbot'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BACKEND',
      contentType: 'paragraph',
      content: `Developed backend APIs in Python, connected to BigQuery with SQL queries, and integrated multiple LLM models to generate accurate, context-aware responses. Deployed on Google Cloud Functions and containerized with Docker.`,
      images: [
        {
          src: './companies/kdan/chatbot_layout.png',
          alt: 'chatbot_layout'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'INTEGRATION AND TESTING',
      contentType: 'paragraph',
      content: `Implemented a testing pipeline to improve accuracy and reliability, using LangChain/LangFuse for traceability and RAGAS for systematic prompt evaluation and refinement.`,
      images: [
        {
          src: './companies/kdan/langfuse.png',
          alt: 'langfuse'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DEPLOYMENT',
      contentType: 'paragraph',
      content: `Containerized and embedded the chatbot into the client’s website using Docker, ensuring smooth deployment and scalability across environments.`,
      images: [
        {
          src: './companies/kdan/deployment.png',
          alt: 'deployment'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'MOMENTS',
      contentType: 'paragraph',
      content:
        'Just highlighting some moments during my internship at KDANMobile.',
      images: [
        { src: './companies/kdan/hi_team.png', alt: 'Hi Team' },
        { src: './companies/kdan/aws.png', alt: 'AWS Summit' }
      ]
    }
  ]
};