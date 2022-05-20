import React from 'react';
import ReactDOM from 'react-dom/client';

import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from './utils/getLibrary';

import { HashRouter } from 'react-router-dom';

import { Buffer } from 'buffer';

import App from './pages/App';

import reportWebVitals from './reportWebVitals';

// import './i18n';

if (!window.Buffer) {
  window.Buffer = Buffer;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={ getLibrary }>
      <HashRouter>
        <App />
      </HashRouter>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
