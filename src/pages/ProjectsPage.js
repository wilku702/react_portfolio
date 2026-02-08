import React from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { projectItems } from '../data/workItems';
import { defaultPageFadeInVariants } from '../motionUtils';
import './styles/WorkPage.css';

const ProjectsPage = () => {
  return (
    <motion.main
      className="work-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="work-page-title">Projects</h1>
      <ArticleLinks items={projectItems} />
    </motion.main>
  );
};

export default ProjectsPage;
