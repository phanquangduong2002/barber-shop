import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <BookContextProvider>
            <Router>
                <App />
            </Router>
        </BookContextProvider>
    </AuthContextProvider>,
);
