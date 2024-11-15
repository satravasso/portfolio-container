import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.querySelector('#root');
const root = createRoot(container as Element); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
