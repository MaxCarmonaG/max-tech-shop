import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { StoreProvider } from '@/providers';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
