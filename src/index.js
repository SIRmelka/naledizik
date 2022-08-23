import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';

const connected = localStorage.getItem("connected")=="true"
console.log(connected);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {connected?<App />:<Login/>}
    </BrowserRouter>

);
