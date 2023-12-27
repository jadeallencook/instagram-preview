import React from 'react';
  import { createRoot } from 'react-dom/client';

  const App = () => (<h1>Hello World</h1>);

  const root = document.getElementById('root');

  if (!root) throw new Error('Root element not found');

  createRoot(root).render(<App />);
