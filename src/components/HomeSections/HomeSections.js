import React from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../ArticleLinks/ArticleLinks';
import './HomeSections.css';

const HomeSections = () => {
  const internshipItems = [
    {
      title: 'KDANMOBILE',
      link: '/kdan',
      backgroundImage: '/companies/kdan.png',
      emojiLink: '🤖💬',
      details: 'React.js | Python | SQL | BigQuery | LLM',
      description:
        "Integration process // Utilized SQL queries within Google Cloud's BigQuery for data handling and incorporated LLM models for responsive chatbot communication."
    },
    {
      title: 'Adonit',
      link: '/adonit',
      backgroundImage: '/companies/adonit.png',
      emojiLink: '📈',
      details: 'React Native | Python | Streamlit',
      description:
        'Predictive analytics implementation // Created an AI-powered audio section and integrated revenue forecasting with React Native and Python.'
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
    <div className="home-sections">
      <section className="home-section">
        <motion.h2
          className="section-title"
          initial={titleAnim.initial}
          whileInView={titleAnim.whileInView}
          transition={titleAnim.transition}
          viewport={{ once: true, amount: 0.6 }}
        >
          Internships
        </motion.h2>
        <ArticleLinks items={internshipItems} />
      </section>

      <section className="home-section project-section">
        <motion.h2
          className="section-title"
          initial={titleAnim.initial}
          whileInView={titleAnim.whileInView}
          transition={titleAnim.transition}
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
