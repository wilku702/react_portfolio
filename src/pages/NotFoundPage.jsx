import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="page not-found-page">
    <h1>404</h1>
    <p>This page doesn't exist.</p>
    <Link to="/" className="back-link">← Back to Home</Link>
  </div>
);

export default NotFoundPage;
