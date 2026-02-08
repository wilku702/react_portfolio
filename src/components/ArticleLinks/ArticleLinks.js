import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ArticleLinks.css';
import { articleVariants } from '../../motionUtils';
import { useNavigationConfirm } from '../../context/NavigationContext';

const ArticleLinks = ({ items }) => {
  const articles = items || [];

  const navigate = useNavigate();
  const { confirmNavigation } = useNavigationConfirm();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index, link) => {
    const isExternal = typeof link === 'string' && /^https?:\/\//i.test(link);

    if ( typeof link === 'string' && link.length === 0 ) {
      return;
    }

    if (isExternal) {
      confirmNavigation(link);
      return;
    }

    // Internal route: animate then navigate
    setActiveIndex(index);
    setTimeout(() => { navigate(link); }, 500);
  };

  return (
    <section className="tiles">
      {articles.map((article, index) => {
        const isNonClickable = typeof article.link === 'string' && article.link.length === 0;

        return (
          <motion.article
            key={index}
            initial="normal"
            animate={index === activeIndex ? 'clicked' : 'normal'}
            variants={articleVariants}
            className={isNonClickable ? 'non-clickable' : ''}
            role={!isNonClickable ? 'link' : undefined}
            tabIndex={!isNonClickable ? 0 : undefined}
            aria-label={!isNonClickable ? `View ${article.title} details` : undefined}
            style={{ backgroundImage: `url(${article.backgroundImage})` }}
            onClick={() => handleClick(index, article.link)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(index, article.link); } }}>
            <motion.header
              className="major"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1>{article.title}</h1>
              <div className="tech-tags">
                {article.details.split('|').map((tech, i) => (
                  <span key={i} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
              <p className="card-description">{article.description}</p>
            </motion.header>
          </motion.article>
        );
      })}
    </section>
  );
};

export default ArticleLinks;
