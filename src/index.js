import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initState } from './utils/Reducer';
import { StateProvider } from './utils/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initState={initState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

