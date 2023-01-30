import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import ThemeContextProvider from './Context/ThemeContextProvider';
import GeoJsonContextProvider from './Context/GeoJsonContextProvider';
import "leaflet/dist/leaflet.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeContextProvider>
        <GeoJsonContextProvider>
          <App />
        </GeoJsonContextProvider>
      </ThemeContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);