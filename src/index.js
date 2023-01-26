import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Firebase
import { getDatabase } from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_g-TK3kPlNR9Hg2rzjYw5LIKxr9qixc0",
  authDomain: "info442-christmas.firebaseapp.com",
  projectId: "info442-christmas",
  storageBucket: "info442-christmas.appspot.com",
  messagingSenderId: "118043730120",
  appId: "1:118043730120:web:c67e0228349dfc5cec05fd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
