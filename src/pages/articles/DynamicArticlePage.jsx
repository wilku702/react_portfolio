import { useParams } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import NotFoundPage from '../NotFoundPage';
import articles from '../../data/articles';
import { projectItems } from '../../data/workItems';

const projectIds = new Set(projectItems.map((item) => item.id));

const DynamicArticlePage = () => {
  const { id } = useParams();
  const data = articles[id];

  if (!data) {
    return <NotFoundPage />;
  }

  const backTo = projectIds.has(id) ? '/projects' : '/experience';

  return <ArticlePage data={data} backTo={backTo} />;
};

export default DynamicArticlePage;
