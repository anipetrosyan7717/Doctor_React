import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/i18n'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/components/i18n.js'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

