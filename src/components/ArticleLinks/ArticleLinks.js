import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articleVariants } from '../../motionUtils';
import Tilt from 'react-parallax-tilt';
import { navigateWithTransition } from '../../utils/viewTransitions';
import { SKILLS_CONFIG } from '../../data/skillsConfig';
import './ArticleLinks.css';

const ArticleLinks = ({ items, hoveredSkill }) => {
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

  // Helper function to determine grid classes based on card size
  const getCardClasses = (size) => {
    switch(size) {
      case 'large':
        return 'col-span-1 md:col-span-2 md:row-span-2 h-[350px] md:h-full'; // Takes 2x2 space on desktop, full width on mobile
      case 'medium':
        return 'col-span-1 md:col-span-2 md:row-span-1 h-[300px] md:h-full'; // Takes 2x1 space on desktop, full width on mobile
      case 'small':
        return 'col-span-1 md:col-span-1 md:row-span-1 h-[280px] md:h-full'; // Takes 1x1 space
      default:
        return 'col-span-1 md:col-span-1 md:row-span-1 h-[280px] md:h-full';
    }
  };

  // Helper function to determine card opacity based on hover state
  const getCardOpacityClass = (article, hoveredSkill) => {
    if (!hoveredSkill) return 'opacity-100';
    const hasSkill = article.skills && article.skills.includes(hoveredSkill);
    return hasSkill ? 'opacity-100' : 'opacity-30';
  };

  // Helper function to determine card glow based on hover state
  const getCardGlowClass = (article, hoveredSkill) => {
    if (!hoveredSkill) return '';
    const hasSkill = article.skills && article.skills.includes(hoveredSkill);
    return hasSkill ? 'ring-2 ring-main/40 shadow-lg shadow-main/20' : '';
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 px-4 md:px-0">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`relative z-10 hover:z-50 ${getCardClasses(article.size)}`}
        >
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
              className={`
                group relative w-full h-full bg-[#1a1b1f] flex items-center p-6 md:p-8 lg:p-10
                overflow-hidden cursor-pointer rounded-2xl md:rounded-3xl border border-white/5
                transition-all duration-300
                ${getCardOpacityClass(article, hoveredSkill)}
                ${getCardGlowClass(article, hoveredSkill)}
              `}
              onClick={() => handleClick(index, article.link)}
            >
              {/* Background image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>

              {/* Dimming overlay with backdrop blur */}
              <div className="absolute inset-0 bg-[#1a1b1f]/80 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[#1a1b1f]/50 group-hover:backdrop-blur-sm"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-main/0 via-main/0 to-main/0 opacity-0 group-hover:from-main/20 group-hover:via-main/10 group-hover:to-transparent group-hover:opacity-100 transition-all duration-500"></div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   boxShadow: '0 0 20px rgba(148, 174, 247, 0.3), inset 0 0 20px rgba(148, 174, 247, 0.1)'
                 }}></div>

            {/* Content */}
            <motion.header
              className={`relative z-10 pb-12 md:pb-14 ${article.size === 'large' ? 'space-y-5 md:space-y-6' : 'space-y-3 md:space-y-4'}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className={`font-bold leading-tight transition-all duration-400 group-hover:text-main group-hover:translate-x-1 group-hover:brightness-110 ${
                article.size === 'large'
                  ? 'text-4xl md:text-5xl lg:text-6xl'
                  : article.size === 'medium'
                  ? 'text-3xl md:text-4xl lg:text-5xl'
                  : 'text-2xl md:text-3xl lg:text-4xl'
              }`}>
                {article.title}
              </h1>
              <p className={`text-white/85 leading-relaxed transition-all duration-400 group-hover:text-white/95 group-hover:translate-x-1 ${
                article.size === 'large'
                  ? 'text-base md:text-lg lg:text-xl line-clamp-5'
                  : article.size === 'small'
                  ? 'text-sm md:text-base line-clamp-4'
                  : 'text-sm md:text-base lg:text-lg line-clamp-4'
              }`}>
                {article.description}
              </p>
            </motion.header>

            {/* Skills icons row */}
            {article.skills && article.skills.length > 0 && (
              <div className="absolute bottom-4 left-6 md:left-8 flex gap-2 items-center z-20">
                {article.skills.slice(0, 6).map(skillKey => {
                  const skill = SKILLS_CONFIG[skillKey];
                  if (!skill) return null;
                  const Icon = skill.icon;
                  const isActiveSkill = hoveredSkill === skillKey;

                  return (
                    <div
                      key={skillKey}
                      className={`
                        transition-all duration-300
                        ${isActiveSkill
                          ? 'text-main scale-125 brightness-150'
                          : 'text-main/60 hover:text-main'
                        }
                      `}
                      title={skill.name}
                    >
                      <Icon size={20} />
                    </div>
                  );
                })}
              </div>
            )}

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
