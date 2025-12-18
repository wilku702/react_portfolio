import React from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../ArticleLinks/ArticleLinks';

const HomeSections = () => {
  const internshipItems = [
  {
      title: 'KDANMOBILE',
      link: '/kdan',
      backgroundImage: '/companies/kdan.png',
      emojiLink: '🤖💬',
      details: 'React.js | Python | SQL | BigQuery | LLM | Docker',
      description:
        'Built and deployed a real-time analytics chatbot for revenue and stock inquiries; integrated multiple LLMs with Google Cloud Functions and SQL on BigQuery, boosting response speed from 30s to ~8s and improving answer accuracy through LangChain, LangFuse, and RAGAS testing.'
    },
    {
      title: 'Adonit',
      link: '/adonit',
      backgroundImage: '/companies/adonit.png',
      emojiLink: '📈',
      details: 'React Native | Python | Streamlit | SQL | Prophet',
      description:
        'Developed features for Adonit One including an AI-powered audio module; created a predictive analytics dashboard using Streamlit and SQL on BigQuery with Prophet forecasting, enabling proactive revenue insights; automated deployments via GitLab CI/CD.'
    },
    {
      title: 'Done Desk',
      link: '',
      backgroundImage: '/companies/donedesk.jpg',
      emojiLink: '🦷',
      details: 'Ruby on Rails | MongoDB | AWS | REST APIs',
      description:
        'Engineered a SaaS platform to track employee CE credits; built data pipelines to parse state requirements from Excel into MongoDB, deployed a Ruby on Rails frontend for record management, and validated APIs with automated test suites and Postman.'
    },
    {
      title: 'Resia',
      link: '',
      backgroundImage: '/companies/resia.jpg',
      emojiLink: '🏗️',
      details: 'React.js | AWS | LLM',
      description:
        'Collaborated on building an AI-powered 3D modeling and cost estimation platform for architects. Developed React.js components for interactive design previews, integrated LLM-based natural language inputs for generating structural layouts, and deployed prototypes on AWS.'
    }
  ];

  const projectItems = [
    {
      title: 'Nagoya USARD',
      link: 'https://github.com/quarcs-lab/quarcs-bolivia',
      backgroundImage: '/companies/nagoya.png',
      emojiLink: '🎓',
      details: 'Hugo | Go | Node.js',
      description:
        'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.'
    },
    {
      title: 'Triniti',
      link: 'https://github.com/wilku702/Triniti',
      backgroundImage: '/companies/triniti.png',
      emojiLink: '👵🏠',
      details: 'React Native | Firebase',
      description:
        'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.'
    }
  ];

  const titleAnim = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col">
      <section className="pt-12 md:pt-16 lg:pt-20 px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-4 gradient-text-main"
          initial={titleAnim.initial}
          whileInView={titleAnim.whileInView}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ ...titleAnim.transition, duration: 1.2 }}
        >
          Internships
        </motion.h2>
        <ArticleLinks items={internshipItems} />
      </section>

      <section className="pt-20 px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-4 gradient-text-main"
          initial={titleAnim.initial}
          whileInView={titleAnim.whileInView}
          transition={{ ...titleAnim.transition, duration: 1.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Projects
        </motion.h2>
        <ArticleLinks items={projectItems} />
      </section>
    </div>
  );
};

export default HomeSections;
