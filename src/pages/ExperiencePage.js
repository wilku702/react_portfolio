import React from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { internshipItems } from '../data/workItems';
import { defaultPageFadeInVariants } from '../motionUtils';
import './styles/WorkPage.css';

const ExperiencePage = () => {
  return (
    <motion.main
      className="work-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="work-page-title">Experience</h1>
      <ArticleLinks items={internshipItems} />
    </motion.main>
  );
};

export default ExperiencePage;
