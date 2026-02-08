import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <main className="page not-found-page">
    <h1>404</h1>
    <p>This page doesn't exist.</p>
    <Link to="/" className="back-link">← Back to Home</Link>
  </main>
);

export default NotFoundPage;
