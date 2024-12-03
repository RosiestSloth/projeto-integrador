// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App'; // O componente App deve ser importado corretamente

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
