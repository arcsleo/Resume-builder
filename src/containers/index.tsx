import React from 'react';
import '../index.css';
import '../assets/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../containers/Route'; 

export function index(){
    return(
        <Router>
            <Routes />
        </Router> 
    );
}
