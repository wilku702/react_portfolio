export const adonitData = {
  title: 'Adonit Internship',
  service: 'Adonit One & Forecast Analyzer',
  timeline: 'May 2023 – Jul 2023 (3 months)',
  role: 'Software Engineer Intern',
  techStack: ['React Native', 'Python', 'Streamlit', 'SQL', 'BigQuery', 'GitLab CI/CD'],
  description: `At Adonit, I contributed to both mobile and data projects. I built new features for the Adonit One app in React Native, including an audio module with AI-powered key point generation and accessibility support. In parallel, I developed a web application using Python, Streamlit, and SQL to extract data from BigQuery, applying Facebook’s Prophet model for predictive analytics and product revenue forecasting. I also authored YAML configuration files to streamline updates and enable feature integration via GitLab CI/CD pipelines.`,
  images: [
    {
      src: '/companies/adonit/start.jpg',
      alt: 'Forecast Analyzer interface'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'PROPHET MODEL & DATA ANALYTICS',
      contentType: 'paragraph',
      content:
        'Developed a forecasting tool that leveraged Facebook’s Prophet model to predict product revenue. Implemented the interface in Streamlit, extracted and processed data from BigQuery using SQL, and provided interactive visualizations to support business decision-making.',
      images: [
        {
          src: '/companies/adonit/forecast_page.jpg',
          alt: 'Forecast Analyzer interface'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'MOBILE FEATURE DEVELOPMENT',
      contentType: 'paragraph',
      content:
        'Enhanced the Adonit One app by creating React Native features, including an audio module with AI-powered key point generation and accessibility improvements, ensuring broader usability and engagement.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'CI/CD & AUTOMATION',
      contentType: 'paragraph',
      content:
        'Authored YAML configuration files to streamline feature rollouts and automate deployment pipelines using GitLab CI/CD, reducing integration overhead and improving team efficiency.',
      images: []
    }
  ]
};