import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articleVariants } from '../../motionUtils';
import Tilt from 'react-parallax-tilt';
import { navigateWithTransition } from '../../utils/viewTransitions';

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

    // Internal route: play click animation then navigate with view transition
    setActiveIndex(index);
    setTimeout(() => {
      navigateWithTransition(navigate, link, 'forward');
    }, 500); // Keep in sync with 'clicked' animation duration
  };

  return (
    <section className="flex flex-wrap">
      {articles.map((article, index) => (
        <div key={index} className="w-full md:w-1/2 relative z-10 hover:z-50">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.01}
            transitionSpeed={2000}
            className="w-full h-full"
          >
            <motion.article
              initial="normal"
              animate={index === activeIndex ? 'clicked' : 'normal'}
              variants={articleVariants}
              className="group relative w-full h-80 md:h-[28rem] bg-[#1a1b1f] flex items-center p-8 md:p-12 overflow-hidden transition-all duration-400 cursor-pointer"
              onClick={() => handleClick(index, article.link)}
            >
              {/* Background image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>

              {/* Dimming overlay */}
              <div className="absolute inset-0 bg-[#1a1b1f]/80 transition-all duration-500 group-hover:bg-[#1a1b1f]/60"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-main/0 via-main/0 to-main/0 opacity-0 group-hover:from-main/15 group-hover:via-main/5 group-hover:to-transparent group-hover:opacity-100 transition-all duration-500"></div>

            {/* Content */}
            <motion.header
              className="relative z-10 space-y-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="text-4xl font-bold leading-tight transition-all duration-400 group-hover:text-main group-hover:translate-x-2 group-hover:brightness-110">
                {article.title}
              </h1>
              <p className="text-lg transition-all duration-400 group-hover:translate-x-2 group-hover:brightness-110">
                <span className="mr-2 inline-block transition-transform duration-400 group-hover:scale-125 group-hover:brightness-125">
                  {article.emojiLink}
                </span>
                {article.details}
              </p>
              <p className="text-base text-white/90 leading-relaxed transition-all duration-400 group-hover:text-white group-hover:translate-x-2 group-hover:brightness-110">
                {article.description}
              </p>
            </motion.header>

            {/* Arrow indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-x-4 group-hover:translate-x-0">
              <svg className="w-8 h-8 text-main animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.article>
        </Tilt>
        </div>
      ))}
    </section>
  );
};

export default ArticleLinks;
