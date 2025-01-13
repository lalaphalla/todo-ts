import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ShoppingCartProvider } from './context/shopping-cart.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>
);
