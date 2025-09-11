import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ArticleLinks.css';
import { articleVariants } from '../../motionUtils';

const ArticleLinks = ({ items }) => {
  // Default array of articles (used if no items prop is passed)
  const defaultArticles = [
    {
      title: 'KDANMOBILE',
      link: '/kdan',
      backgroundImage: '/companies/kdan.png',
      emojiLink: '🤖💬',
      details: 'React.js | Python | SQL | BigQuery | LLM',
      description:
        "Integration process // Utilized SQL queries within Google Cloud's BigQuery for data handling and incorporated LLM models for responsive chatbot communication."
    },
    // {
    //   title: 'Resia',
    //   link: '/resia',
    //   backgroundImage: '/companies/triniti.png',
    //   emojiLink: '👵🏠',
    //   details: 'React Native | Firebase',
    //   description:
    //     'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.'
    // },
    {
      title: 'Triniti',
      link: '/triniti',
      backgroundImage: '/companies/triniti.png',
      emojiLink: '👵🏠',
      details: 'React Native | Firebase',
      description:
        'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.'
    },
    {
      title: 'Nagoya USARD',
      link: '/nagoya',
      backgroundImage: '/companies/nagoya.png',
      emojiLink: '🎓',
      details: 'Hugo | Go | Node.js',
      description:
        'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.'
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

  const articles = items && Array.isArray(items) ? items : defaultArticles;

  const navigate = useNavigate(); // Hook for programmatically navigating
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index, link) => {
    setActiveIndex(index); // Trigger the animation

    setTimeout(() => {
      navigate(link); // Navigate after the animation
    }, 500); // Delay in milliseconds, match this with your animation duration
  };

  return (
    <section className="tiles">
      {articles.map((article, index) => (
        <motion.article
          key={index}
          initial="normal"
          animate={index === activeIndex ? 'clicked' : 'normal'}
          variants={articleVariants}
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
          onClick={() => handleClick(index, article.link)}>
          <motion.header
            className="major"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1>{article.title}</h1>
            <p>{article.emojiLink} {article.details}</p>
            <p>{article.description}</p>
          </motion.header>
        </motion.article>
      ))}
    </section>
  );
};

export default ArticleLinks;
