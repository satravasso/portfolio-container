import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
const root = createRoot(container as Element); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
