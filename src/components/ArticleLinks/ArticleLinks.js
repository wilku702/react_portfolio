import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ArticleLinks.css';
import { articleVariants } from '../../motionUtils';

const ArticleLinks = ({ items }) => {
  const articles = items || [];

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index, link) => {
    const isExternal = typeof link === 'string' && /^https?:\/\//i.test(link);

    if ( typeof link === 'string' && link.length === 0 ) {
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
    <section className="tiles">
      {articles.map((article, index) => (
        <motion.article
          key={index}
          initial="normal"
          animate={index === activeIndex ? 'clicked' : 'normal'}
          variants={articleVariants}
          role="link"
          tabIndex={0}
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
            <p>{article.emojiLink} {article.details}</p>
            <p>{article.description}</p>
          </motion.header>
        </motion.article>
      ))}
    </section>
  );
};

export default ArticleLinks;
