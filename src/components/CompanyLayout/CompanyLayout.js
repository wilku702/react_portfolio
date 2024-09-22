import React from 'react';
import { motion } from 'framer-motion';
import './CompanyLayout.css';
import { articleVariants } from '../../motionUtils';

const CompanyLayout = () => {
  // Array of articles
  const articles = [
    {
      title: 'DoneDesk',
      backgroundImage: '/companies/donedesk.jpg',
      emojiLink: '🦷 Internship',
      details: 'Ruby On Rails | AWS',
      description:
        'Build a SaaS app for tracking employee CE credits with state requirement integrations'
    },
    {
      title: 'Resia',
      backgroundImage: '/companies/resia.jpg',
      emojiLink: '🏗️ Internship',
      details: 'React.js | AWS',
      description:
        'Develop an AI-driven 3D modeling and cost estimation for architects'
    }
  ];

  return (
    <section className="tiles">
      {articles.map((article, index) => (
        <motion.article
          key={index}
          initial="normal"
          variants={articleVariants}
          style={{ backgroundImage: `url(${article.backgroundImage})` }}>
          <header className="major">
            <h1>{article.title}</h1>
            <a className="link" href={article.link}>
              {article.emojiLink}
            </a>
            <p>{article.details}</p>
            <p>{article.description}</p>
          </header>
        </motion.article>
      ))}
    </section>
  );
};

export default CompanyLayout;
