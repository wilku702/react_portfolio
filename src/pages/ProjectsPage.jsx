import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { projectItems } from '../data/workItems';
import { defaultPageFadeInVariants } from '../motionUtils';
import './styles/WorkPage.css';

const ProjectsPage = () => {
  return (
    <motion.div
      className="work-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>Projects | Will Kung</title>
        <meta property="og:title" content="Projects | Will Kung" />
      </Helmet>
      <ArticleLinks items={projectItems} />
    </motion.div>
  );
};

export default ProjectsPage;
