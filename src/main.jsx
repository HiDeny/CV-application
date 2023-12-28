import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import App from './Components/App';
import './Styles/normalize.css';
import './Styles/Styles.css';

document.addEventListener('scroll', () => {
  console.log('Scrolled');
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);
