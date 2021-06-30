import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ShopContextProvider } from 'common/components/ShopContextProvider';

ReactDOM.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById('root')
);
