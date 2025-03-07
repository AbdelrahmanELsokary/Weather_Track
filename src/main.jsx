import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import { Header } from './components/layout/Header.jsx';
import { BrowserRouter, Router } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
