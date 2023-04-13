import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tendances from './Tendances';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Tendances/>
  </React.StrictMode>
);
