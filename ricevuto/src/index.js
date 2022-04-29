import React from 'react';
import ReactDOM from 'react-dom/client';

//Styles
import './index.css';

//Routing
import Routing from './Routing';
import { BrowserRouter } from "react-router-dom"

//Localization
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
