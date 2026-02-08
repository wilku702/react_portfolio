import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { allItems, internshipItems, projectItems } from '../data/workItems';
import { defaultPageFadeInVariants } from '../motionUtils';
import './styles/WorkPage.css';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'internships', label: 'Internships' },
  { key: 'projects', label: 'Projects' }
];

const tabData = {
  all: allItems,
  internships: internshipItems,
  projects: projectItems
};

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <motion.main
      className="work-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="work-page-title">Work</h1>
      <div className="work-tabs" role="tablist" aria-label="Filter work items">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className="work-tab"
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ArticleLinks items={tabData[activeTab]} />
    </motion.main>
  );
};

export default WorkPage;
