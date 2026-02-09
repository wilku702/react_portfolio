import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page not-found-page">
          <h1>Oops</h1>
          <p>Something went wrong.</p>
          <Link to="/" className="back-link" onClick={() => this.setState({ hasError: false })}>← Back to Home</Link>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
