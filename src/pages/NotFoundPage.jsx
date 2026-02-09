import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => (
  <div className="page not-found-page">
    <Helmet>
      <title>404 - Page Not Found | Will Kung</title>
    </Helmet>
    <h1>404</h1>
    <p>This page doesn&apos;t exist.</p>
    <Link to="/" className="back-link">← Back to Home</Link>
  </div>
);

export default NotFoundPage;
