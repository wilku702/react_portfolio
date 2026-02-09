import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import articles from '../../data/articles';

const DynamicArticlePage = () => {
  const { id } = useParams();
  const data = articles[id];

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  return <ArticlePage data={data} />;
};

export default DynamicArticlePage;
