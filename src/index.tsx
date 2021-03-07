import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './assets/css/bootstrap.min.css';
import { Routes } from './containers/Route';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
