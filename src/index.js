import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import {disableReactDevTools} from '@fvilers/disable-react-devtools';

// if (ProcessingInstruction.env.NODE_ENV==='production') disableReactDevTools()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
