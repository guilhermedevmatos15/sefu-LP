import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './test/reportWebVitals';

// Styles
import './app/styles/index.scss';

// Router
import Routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
