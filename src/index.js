import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //ajuda a prevenir erro com mensagens
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


