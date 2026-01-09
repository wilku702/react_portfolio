import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';

// Disable React error overlay for generic script errors on mobile
if (process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    // Filter out generic "Script error" messages that come from browser extensions
    if (args[0] && typeof args[0] === 'string' && args[0].includes('Script error')) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
