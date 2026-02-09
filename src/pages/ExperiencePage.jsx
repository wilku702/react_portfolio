import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { internshipItems } from '../data/workItems';
import { defaultPageFadeInVariants } from '../motionUtils';
import './styles/WorkPage.css';

const ExperiencePage = () => {
  return (
    <motion.div
      className="work-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>Experience | Will Kung</title>
        <meta property="og:title" content="Experience | Will Kung" />
      </Helmet>
      <ArticleLinks items={internshipItems} />
    </motion.div>
  );
};

export default ExperiencePage;
