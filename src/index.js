// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FronteggProvider } from '@frontegg/react';


const contextOptions = {
  baseUrl: 'https://app-kh4m54haiatz.frontegg.com', 
  clientId: 'e1527965-3f63-4154-9c8e-b96343489a7c', 
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);