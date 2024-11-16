import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {mockFavorites} from './mocks/favorites.ts';
import mockOffersDetailed from './mocks/offers-detailed.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersDetailed={mockOffersDetailed}
        allFavorites={mockFavorites}
      />
    </Provider>
  </React.StrictMode>
);
