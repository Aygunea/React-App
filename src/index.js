import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BasketProvider } from './context/BasketContext';
import { WishListProvider } from './context/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BasketProvider>
    <WishListProvider>
      <App />
    </WishListProvider>
  </BasketProvider>

);

