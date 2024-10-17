import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {MainPageProps} from './pages/main-page/main-page.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainPageProps : MainPageProps = {
  rentOffersCount: 312,
  userName : 'Oliver.conner@gmail.com',
  favoriteCount : 3,
};

root.render(
  <React.StrictMode>
    <App mainPageProps={mainPageProps}/>
  </React.StrictMode>
);
