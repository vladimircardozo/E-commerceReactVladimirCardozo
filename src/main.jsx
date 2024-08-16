import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdKNidRINSmIx15PD7gZ183k6kZsHvGBw",
  authDomain: "e-commerce-coder-b8b54.firebaseapp.com",
  projectId: "e-commerce-coder-b8b54",
  storageBucket: "e-commerce-coder-b8b54.appspot.com",
  messagingSenderId: "218778477644",
  appId: "1:218778477644:web:32e34c77e8cc4edce440e9"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
