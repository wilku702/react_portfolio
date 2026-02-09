import { useParams } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import NotFoundPage from '../NotFoundPage';
import articles from '../../data/articles';

const DynamicArticlePage = () => {
  const { id } = useParams();
  const data = articles[id];

  if (!data) {
    return <NotFoundPage />;
  }

  return <ArticlePage data={data} />;
};

export default DynamicArticlePage;
