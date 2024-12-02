import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from 'routes/Routes';

import "./assets/styles/default.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/loader01.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
