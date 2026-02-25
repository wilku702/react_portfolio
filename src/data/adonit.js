export const adonitData = {
  title: 'Adonit Internship',
  service: 'Adonit One & Forecast Analyzer',
  timeline: 'May 2023 – Jul 2023 (3 months)',
  role: 'Software Engineer Intern',
  techStack: ['React Native', 'Python', 'Streamlit', 'SQL', 'BigQuery', 'GitLab CI/CD'],
  description:
    'At Adonit, I built mobile features for the Adonit One app and developed a Prophet-based forecasting tool for product revenue planning. I also streamlined deployments with GitLab CI/CD pipelines.',
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
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'Developed a forecasting tool that leveraged Facebook\'s Prophet model to predict product revenue. Implemented the interface in Streamlit, extracted and processed data from BigQuery using SQL, and provided interactive visualizations to support business decision-making.',
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
      contentType: 'feature-highlight',
      content:
        'Enhanced the Adonit One app by creating React Native features, including an audio module with AI-powered key point generation and accessibility improvements, ensuring broader usability and engagement.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'CI/CD & AUTOMATION',
      contentType: 'split-content',
      content:
        'Authored YAML configuration files and automated deployment pipelines using GitLab CI/CD, reducing integration overhead and improving team efficiency.',
      list: [
        'YAML configuration files for streamlined updates',
        'Automated deployment pipelines via GitLab CI/CD',
        'Feature toggles for controlled rollouts',
        'Integration testing across build stages'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'IMPACT',
      contentType: 'list',
      content: [
        'Shipped audio module with AI-powered key point generation for the Adonit One app.',
        'Deployed forecasting tool used by the business team for product revenue planning.',
        'CI/CD pipeline reduced manual deployment steps and accelerated feature delivery.'
      ],
      images: []
    }
  ]
};
