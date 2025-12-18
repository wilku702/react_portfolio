import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="flex flex-wrap gap-y-6">
      {articles.map((article, index) => (
        <motion.article
          key={index}
          initial="normal"
          variants={articleVariants}
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
          className="relative w-full md:w-1/2 h-72 md:h-80 bg-cover bg-center flex items-center p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1a1b1f]/80"></div>
          <header className="relative z-10 space-y-2">
            <h1 className="text-3xl font-bold leading-tight">{article.title}</h1>
            <p className="text-lg text-main">{article.emojiLink}</p>
            <p className="text-base text-white/90">{article.details}</p>
            <p className="text-base text-white/90">{article.description}</p>
          </header>
        </motion.article>
      ))}
    </section>
  );
};

export default CompanyLayout;
