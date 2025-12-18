import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    const isExternal = typeof link === 'string' && /^https?:\/\//i.test(link);

    if ( typeof link === 'string' && link.length == 0 ) {
      return;
    }

    if (isExternal) {
      // Open immediately without triggering the disappear animation
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    // Internal route: play click animation then navigate
    setActiveIndex(index);
    setTimeout(() => {
      navigate(link);
    }, 500); // Keep in sync with 'clicked' animation duration
  };

  return (
    <section className="flex flex-wrap">
      {articles.map((article, index) => (
        <motion.article
          key={index}
          initial="normal"
          animate={index === activeIndex ? 'clicked' : 'normal'}
          variants={articleVariants}
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
          className="group relative w-full md:w-1/2 h-80 md:h-[28rem] bg-cover bg-center flex items-center p-8 md:p-12 overflow-hidden transition-transform duration-300"
          onClick={() => handleClick(index, article.link)}
        >
          <div className="absolute inset-0 bg-[#1a1b1f]/85 transition-opacity duration-500 group-hover:opacity-70"></div>
          <motion.header
            className="relative z-10 space-y-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>
            <p className="text-lg">
              <span className="mr-2">{article.emojiLink}</span>
              {article.details}
            </p>
            <p className="text-base text-white/90 leading-relaxed">
              {article.description}
            </p>
          </motion.header>
        </motion.article>
      ))}
    </section>
  );
};

export default ArticleLinks;
